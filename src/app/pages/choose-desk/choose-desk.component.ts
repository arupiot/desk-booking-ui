import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-choose-desk',
  templateUrl: './choose-desk.component.html',
  styleUrls: ['./choose-desk.component.less']
})
export class ChooseDeskComponent implements OnInit {
  numbers;
  constructor(
    
    // public authService: AuthService
  ) { }

  ngOnInit() {
    this.numbers = [1,2,3,4,5,6,7,8,9,10];
  }

}
