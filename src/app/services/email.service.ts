import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { Request } from '@angular/http';
import { AuthService } from '../auth/auth.service';


interface IApiResponse {
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  API_URL: string = 'http://angular-authentication.eu.auth0.com/api'
  message: string;

  constructor(
    private http: HttpClient,
    // private request: Request,
    public auth: AuthService
    ) { }

  sendEmail(email: any) {
    // code from auth0 calling an api tutorial https://auth0.com/docs/quickstart/spa/angular2/03-calling-an-api

    console.log(email);
    

    this.message = '';
    const access = this.auth.returnAccessToken();
    
    this.http.post(
      'http://localhost:8080/email', 
      {
        "emails" : email
      }, 
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${access}`)
      })
        .subscribe(
          data => this.message = (data as IApiResponse).message,
          error => this.message = error
        );
    console.log("message: " + this.message);

    // var request = require("request");// Using request, not sure if this will work for production, angular does not seem to fully support it by default
    // // Swapping the authorization code for tokens

    // // Auth0 api authentication using 'request'
    

    // var options = { method: 'GET',
    // url: 'http://localhost:8080/email',
    // headers:
    // { authorization: 'Bearer ACCESS_TOKEN',
    //   'content-type': 'application/json'  } };

    // request(options, function (error, response, body){
    //   if (error) throw new Error(error);

    //   console.log(body);
    //   return body;
    // });

    // return this.http.get<String>('http://localhost:8080/email' + email);
  }
  // getToken()
  // {
  //   var request = require("request");
  //   var options = { method: 'POST',
  //     url: 'https://angular-authentication.eu.auth0.com/oauth/token',
  //     headers: { 'content-type': 'application/json' },
  //     body:
  //       {
  //         grant_type: 'authorization_code',
  //         code: 'NEED_TO_FIND_AUTHORIZATION_CODE',
  //         client_id: 'M0q1Dt5-1OPgqwG2xza_NsnMfYrH_hdD',
  //         client_secret: 'NEED_TO_TURN_THIS_TO_ENV',
  //         redirect_uri: 'http://localhost:4200/callback' },
  //     json: true};

  //   request(options, function (error, response, body){
  //     if (error) throw new Error(error);

  //     return body;
  //   })
  // }
}
