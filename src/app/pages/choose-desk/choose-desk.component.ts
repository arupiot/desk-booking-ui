import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-choose-desk',
  templateUrl: './choose-desk.component.html',
  styleUrls: ['./choose-desk.component.less']
})
export class ChooseDeskComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
