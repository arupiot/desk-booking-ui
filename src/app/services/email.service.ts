import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  API_URL: string = 'http://angular-authentication.eu.auth0.com/api'
  message: string;
  _selectedDesk: any = null;
  _desks: Array<any>;

  constructor(
    private http: HttpClient,
    public auth: AuthService
    ) { }

  sendEmail(email: any) {
    // code from auth0 calling an api tutorial https://auth0.com/docs/quickstart/spa/angular2/03-calling-an-api

    console.log('email: ', email, ' selectedDesk: ', this._selectedDesk);
    

    this.message = '';
    const access = this.auth.returnAccessToken();
    
    return this.http.post(
      // 'http://localhost:8080/email',
      'https://arup-iot-desk.appspot.com/email', 
      {
        "emails" : email,
        "desk": this._selectedDesk
      }, 
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${access}`),
        responseType: 'text'
      });
  }

  setDesks(val) {
    this._desks = val;
  }

  setSelectedDesk(val) {
    this._selectedDesk = val;
  }

  getSelectedDesk() {
    return this._selectedDesk;
  }

  
}
