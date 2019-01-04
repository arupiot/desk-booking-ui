import { Component, OnInit, Injectable } from '@angular/core';
import { EmailService } from './../../services/email.service';

@Component({
  selector: 'app-team-send-email',
  templateUrl: './team-send-email.component.html',
  styleUrls: ['./team-send-email.component.less']
})
@Injectable()
export class TeamSendEmailComponent implements OnInit {

  email1: string;
  email2: string;

  constructor( private emailService: EmailService ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.email1, this.email2);
    this.emailService.sendEmail(this.email1);
    //this.emailService.sendEmail(this.email1).subscribe(val => console.log(val));
  }
}
