import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-send-email',
  templateUrl: './team-send-email.component.html',
  styleUrls: ['./team-send-email.component.less']
})
export class TeamSendEmailComponent implements OnInit {

  email1: string;
  email2: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.email1, this.email2);

  }

}
