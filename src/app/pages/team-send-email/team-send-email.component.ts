import { Component, OnInit, Injectable } from '@angular/core';
import { EmailService } from './../../services/email.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

interface IApiResponse {
  message: string;
  error: string;
}

@Component({
  selector: 'app-team-send-email',
  templateUrl: './team-send-email.component.html',
  styleUrls: ['./team-send-email.component.less']
})
@Injectable()
export class TeamSendEmailComponent implements OnInit {

  email1: string;
  email2: string;

  submitted=false;
  message: string;
  error: string;

  constructor( 
    private emailService: EmailService,
    private router: Router ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.email1, this.email2);

    this.emailService.sendEmail({
      email1: this.email1,
      email2: this.email2})
    .subscribe(
      response =>{
        console.log("response:",response);//(suc as IApiResponse).message
        this.router.navigate(['/email-success']);
      }, 
      error =>{
      this.error = error
      console.log("error message:", this.message);
      }
    );
    //this.emailService.sendEmail(this.email1).subscribe(val => console.log(val));
  }
}
