// auth.service.ts
import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';

(window as any).global = window;

@Injectable()
export class AuthService {
  // Create Auth0 web auth instance
  auth0 = new auth0.WebAuth({
    clientID: environment.auth.clientID,
    domain: environment.auth.domain,
    responseType: 'token',
    redirectUri: environment.auth.redirect,
    //audience: environment.auth.audience,
    scope: environment.auth.scope
  });
  // Store authentication data
  expiresAt: number = 0;
  userProfile: any;
  accessToken: string;
  authenticated: boolean = false;

  constructor(private router: Router) {
    this.getAccessToken();
  }

  login() {
    // Auth0 authorize request
    // console.log("login");
    this.auth0.authorize();
  }

  handleLoginCallback() {
    // When Auth0 hash parsed, get profile
    // console.log("handleLoginCallback");
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        // console.log("yes handleLoginCallback");
        window.location.hash = '/';
        this.getUserInfo(authResult);
      } else if (err) {
        console.error(`Error: ${err.error}`);
      }
      // this.router.navigate(['/choose-desk']);
    });
  }

  getAccessToken() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.getUserInfo(authResult);
      }
    });
  }

  getUserInfo(authResult) {
    // Use access token to retrieve user's profile and set session
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        // console.log("yes getUserInfo");
        this._setSession(authResult, profile);
      }
      else
      {
        // console.log("no getUserInfo");
      }
    });
  }

  private _setSession(authResult, profile) {

    localStorage.setItem('isLoggedIn','true');
    // Save authentication data and update login status subject
    // console.log("setSession");
    this.expiresAt = authResult.expiresIn * 1000 + Date.now();
    this.accessToken = authResult.accessToken;
    this.userProfile = profile;
    this.authenticated = true;

    this.router.navigate(['/choose-desk']);
  }

  logout() {
    // Log out of Auth0 session
    // Ensure that returnTo URL is specified in Auth0
    // Application settings for Allowed Logout URLs
    this.auth0.logout({
      returnTo: 'http://localhost:4200',
      clientID: environment.auth.clientID
    });
    localStorage.removeItem('isLoggedIn');
  }

  get isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally
    // console.log("get");
    
    // console.log("Date: " + Date.now());
    // console.log("expiresAt: " + this.expiresAt);
    // console.log("authenticated: " + this.authenticated);

    return Date.now() < this.expiresAt && this.authenticated;
  }

}