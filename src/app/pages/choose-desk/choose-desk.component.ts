import { Component, OnInit, NgModule } from '@angular/core';
import { Validators, FormsModule } from '@angular/forms';
import { DatastoreService } from 'src/app/services/datastore.service';
import { EmailService } from 'src/app/services/email.service';
import { ImageMapCoordinate } from './image-map/image-map.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';
import { BookingModalComponent } from './booking-modal/booking-modal.component';
import { getViewData } from '@angular/core/src/render3/instructions';


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

  floor: number = 4;
  floors: number[] = [1,4,5];
  currentfloor: number = 0;

  constructor(
    // public authService: AuthService
    private datastoreService: DatastoreService,
    private emailService: EmailService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }  

  image01: string = '/assets/8.01.jpeg';
  image04: string = '/assets/8.04.jpeg';
  image05: string = '/assets/'

  coordinate01: ImageMapCoordinate[] = [];
  coordinate04: ImageMapCoordinate[] = [];
  coordinate05: ImageMapCoordinate[] = [];

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.desks = [];
    this.coordinate01 = [];
    this.coordinate04 = [];
    this.coordinate05 = [];

    this.datastoreService.getDesks()
    .subscribe(
      (desks: any) =>{
        console.log("res: ", desks.items);
        this.desks = desks.items.filter( d => d.hotdesk === true);

        console.log('filtered desks: ', this.desks);
        

        this.selectedDesk = this.emailService.getSelectedDesk();
        if (this.selectedDesk) {
          this.selectedDeskId = this.selectedDesk.id;
        }


        this.emailService.setDesks(this.desks);
        for (let i = 0; i < this.desks.length; i++)
        {
          
          if (this.desks[i]['x']/* && !this.desks[i]['booked']*/)
          {
            let d = this.desks[i];

            let obj: ImageMapCoordinate = {
              name: d['name'],
              x: d['x'],
              y: d['y'],
              width: 15,
              height: 25,
              floor: d['floor'],
              building: d['building'],
              arupDeskId: d['arupDeskId'],
              booked: d['booked'],
              cold_img: d['cold_img'],
              fm_name: d['fm_name'],
              hotdesk: d['hotdesk'],
              id: d['id'],
              sign_in_time: d['sign_in_time'],
              sign_out_time: d['sign_out_time'],
              user_email: d['user_email'],
              vacant: d['vacant']
            }

            switch(obj.floor)
            {
              case 1: this.coordinate01.push(obj); break;
              case 4: this.coordinate04.push(obj); break;
              case 5: this.coordinate05.push(obj); break;
            }
            // if (obj.floor === 1) this.coordinate01.push(obj);
            
            // if (obj.floor === 4) this.coordinate04.push(obj);


          }
        }
        console.log("coordinate 01:",this.coordinate01);
        console.log("coordinate 04:",this.coordinate04);
        console.log("coordinate 05:",this.coordinate05);
      }, 
      error =>{
        console.log("error message:", error);
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookingModalComponent, {
      width: '250px',
      data: {name: 'yes', animal: 'cat'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getData();

      // this.animal = result;
    });
  }

  selectDesk(desk) {
    console.log('Selected: ', desk);
    if (desk.booked) {
      console.log('This desk is already booked! Sorry!')
      this.toastr.error('(by ' + desk.user_email + ')', 'Already booked!');
    } else {
      this.selectedDeskId = desk.id;
      this.emailService.setSelectedDesk(desk);
      this.toastr.success('Available!');
      this.openDialog();
    }
  }

  getClick(coordinate: ImageMapCoordinate) {
    let desk = coordinate;
    this.selectDesk(desk);
  }

  switchFloor() {
    this.currentfloor ++;
    
    if (this.currentfloor >= this.floors.length) this.currentfloor = 0;
    
    this.floor = this.floors[this.currentfloor];
  }

}
