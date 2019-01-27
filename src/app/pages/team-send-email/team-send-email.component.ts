import { Component, OnInit, Injectable } from '@angular/core';
import { EmailService } from './../../services/email.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-team-send-email',
  templateUrl: './team-send-email.component.html',
  styleUrls: ['./team-send-email.component.less']
})
@Injectable()
export class TeamSendEmailComponent implements OnInit {

  email1: string;
  email2: string;

  submittedError=false;
  message: string;
  error: string;

  selectedDesk: any = undefined;
  userEmail: string;

  constructor( 
    private emailService: EmailService,
    private authService: AuthService,
    private router: Router ) { }

  ngOnInit() {
    this.selectedDesk = this.emailService.getSelectedDesk();
    console.log('profile: ', this.authService.userProfile)
    this.email1 = this.authService.userProfile.name;
  }

  onSubmit(){
    console.log(this.email1, this.email2);

    this.emailService.sendEmail({
      email1: this.email1,
      email2: this.email2})
    .subscribe(
      response =>{
        console.log("response:",response);
        this.router.navigate(['/email-success']);
      }, 
      error =>{
        this.error = error
        console.log("error message:", this.error);
        this.submittedError = true;
      }
    );
  }
}
