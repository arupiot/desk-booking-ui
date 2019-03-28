import { Component, OnInit, NgModule } from '@angular/core';
import { Validators, FormsModule } from '@angular/forms';
import { DatastoreService } from 'src/app/services/datastore.service';
import { EmailService } from 'src/app/services/email.service';
import { ImageMapCoordinate } from './image-map/image-map.component';


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
    private emailService: EmailService
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
        this.desks = desks.items;
        this.selectedDesk = this.emailService.getSelectedDesk();
        if (this.selectedDesk) {
          this.selectedDeskId = this.selectedDesk.id;
        }
        this.emailService.setDesks(this.desks);
        for (let i = 0; i < this.desks.length-1; i++)
        {
          if (this.desks[i]['x'])
          {
            let obj: ImageMapCoordinate = {
              name: this.desks[i]['name'],
              x: this.desks[i]['x'],
              y: this.desks[i]['y'],
              width: 20,
              height: 28,
              floor: this.desks[i]['floor'],
              building: this.desks[i]['building']
            }

            if (obj.floor == 1) this.coordinate01.push(obj);
            else if (obj.floor == 4) this.coordinate04.push(obj);
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
    } else {
      this.selectedDeskId = desk.id;
      this.emailService.setSelectedDesk(desk);
    }
  }

  getClick(coordinate: ImageMapCoordinate) {
    console.log('Clicked',coordinate);
  }

}
