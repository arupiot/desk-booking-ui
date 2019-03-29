import { Component, OnInit, NgModule } from '@angular/core';
import { Validators, FormsModule } from '@angular/forms';
import { DatastoreService } from 'src/app/services/datastore.service';
import { EmailService } from 'src/app/services/email.service';
import { ImageMapCoordinate } from './image-map/image-map.component';
import { ToastrService } from 'ngx-toastr';


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
  constructor(
    // public authService: AuthService
    private datastoreService: DatastoreService,
    private emailService: EmailService,
    private toastr: ToastrService
  ) { }  

  image04: string = '/assets/8.04.jpeg';
  image01: string = '/assets/8.01.jpeg';

  coordinate01: ImageMapCoordinate[] = []/* = [
    {
      name: '167',
      x: 1173,
      y: 998,
      width: 20,
      height: 28
    }
  ]*/
  coordinate04: ImageMapCoordinate[] = []

  ngOnInit() {
  
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
          
          if (this.desks[i]['x'] && !this.desks[i]['booked'])
          {
            let d = this.desks[i];

            let obj: ImageMapCoordinate = {
              name: d['name'],
              x: d['x'],
              y: d['y'],
              width: 18,
              height: 28,
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

            if (obj.floor === 1) this.coordinate01.push(obj);
            
            if (obj.floor === 4) this.coordinate04.push(obj);
          }
        }
        console.log("coordinate 01:",this.coordinate01);
        console.log("coordinate 04:",this.coordinate04);
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
      this.toastr.error('(Taken by ' + desk.user_email + ')', 'Already booked!');
    } else {
      this.selectedDeskId = desk.id;
      this.emailService.setSelectedDesk(desk);
      this.toastr.success('Available!');
    }
  }

  getClick(coordinate: ImageMapCoordinate) {
    let desk = coordinate;

    console.log('Selected: ', desk);
    if (desk.booked) {
      console.log('This desk is already booked! Sorry!')
    } else {
      this.selectedDeskId = desk.id;
      this.emailService.setSelectedDesk(desk);
    }
  }

  switchFloor() {
    if (this.floor == 1) this.floor = 4;
    else if (this.floor == 4) this.floor = 1;
  }

}
