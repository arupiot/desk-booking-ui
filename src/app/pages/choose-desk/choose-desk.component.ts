import { Component, OnInit, NgModule } from '@angular/core';
import { Validators, FormsModule } from '@angular/forms';

import { AuthService } from './../../auth/auth.service';


@Component({
  selector: 'app-choose-desk',
  templateUrl: './choose-desk.component.html',
  styleUrls: ['./choose-desk.component.less']
})
@NgModule({
  imports: [
    FormsModule
  ]
})
export class ChooseDeskComponent implements OnInit {
  names;
  constructor(
    
    // public authService: AuthService
  ) { }

  ngOnInit() {
    this.names = ["jovial_goldberg","big_volhard","backstabbing_elion","sick_poincare","mad_carson","furious_payne","cranky_lumiere","hopeful_allen","gloomy_volhard","thirsty_morse"];
  }

}
