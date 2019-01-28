import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  DESKS_API_URL: string = 'https://arup-iot-desk.appspot.com/api'
  message: string;

  constructor(
    private http: HttpClient,
    public auth: AuthService
    ) { }

  getDesks() {    
    return this.http.get(this.DESKS_API_URL + '/desks');
  }
}
