import { Component, OnInit, NgModule } from '@angular/core';
import { Validators, FormsModule } from '@angular/forms';
import { DatastoreService } from 'src/app/services/datastore.service';
import { EmailService } from 'src/app/services/email.service';


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
  selectedDesk: any = null;
  selectedDeskId: number = null;
  constructor(
    // public authService: AuthService
    private datastoreService: DatastoreService,
    private emailService: EmailService
  ) { }  

  ngOnInit() {
  
    this.datastoreService.getDesks()
    .subscribe(
      (desks: any) =>{
        console.log("res: ", desks.items);
        this.desks = desks.items;
        this.selectedDesk = this.emailService.getSelectedDesk();
        if (this.selectedDesk) {
          this.selectedDeskId = this.selectedDesk.id;
        }
        this.emailService.setDesks(this.desks);
      }, 
      error =>{
        console.log("error message:", error);
      }
    );
  }

  selectDesk(desk) {
    console.log('Selected: ', desk);
    if (desk.booked) {
      console.log('This desk is already booked! Sorry!')
    } else {
      this.selectedDeskId = desk.id;
      this.emailService.setSelectedDesk(desk);
    }
  }

}
