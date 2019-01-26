import { Component, OnInit, NgModule } from '@angular/core';
import { Validators, FormsModule } from '@angular/forms';
import { DatastoreService } from 'src/app/services/datastore.service';


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
  desks: Array<any>;
  constructor(
    // public authService: AuthService
    private datastoreService: DatastoreService
  ) { }

  ngOnInit() {
  
    this.datastoreService.getDesks()
    .subscribe(
      (desks: any) =>{
        console.log("res: ", desks.items);
        this.desks = desks.items;
        
      }, 
      error =>{
        console.log("error message:", error);
      }
    );



  }

  selectDesk(name) {
    console.log('Selected: ', name);
  }

}
