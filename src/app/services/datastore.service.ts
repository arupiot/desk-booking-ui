import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  DESKS_API_URL: string = 'http://localhost:8080/api'
  // DESKS_API_URL: string = 'https://no8-iot-desk-occupancy.appspot.com/api'
  message: string;

  constructor(
    private http: HttpClient,
    public auth: AuthService
    ) { }

  getDesks() {    
    return this.http.get(this.DESKS_API_URL + '/desks');
  }
}
