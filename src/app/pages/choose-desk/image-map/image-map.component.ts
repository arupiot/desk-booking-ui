import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'image-map',
  templateUrl: './image-map.component.html',
  styleUrls: ['./image-map.component.less']
})
export class ImageMapComponent implements OnInit {

  @Input()
  src: string

  @Input()
  coordinates: ImageMapCoordinate[]

  @Input()
  canEdit: boolean

  @Output('onClick')
  onClick: EventEmitter<ImageMapCoordinate> = new EventEmitter();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'booked',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-face-24px.svg'));
   }

  ngOnInit() {  }

   getClass(co) {
    if (co.booked) return "booked";
    else return "area";
   }

  getCoordinateStyle(coordinate: ImageMapCoordinate): object {
    return {
      top: `${coordinate.y}px`,
      left: `${coordinate.x}px`,
      height: `${coordinate.height}px`,
      width: `${coordinate.width}px`
    };
  }

  onAreaClick(coordinate) {
    this.onClick.emit(coordinate);
  }

  onAreaContext(e: MouseEvent, coordinate: ImageMapCoordinate) {
    if(this.canEdit)
    {
      if(coordinate) {
        console.log('editing')

      }
      else {
        console.log('creating')
      }
    
      e.stopPropagation();
      return false;
    }
  }

  onAreaCreate(x: number, y: number): ImageMapCoordinate {
    const coordinate = new ImageMapCoordinate({x, y, width: 100, height: 100});
    return coordinate;
  }

  onAreaEdit(coordinate: ImageMapCoordinate): ImageMapCoordinate {
    return coordinate;
  }

}

export class ImageMapCoordinate {
  x: number = 0
  y: number = 0
  width: number = 100
  height: number = 100
  name?: string
  floor?: number
  building?: number
  arupDeskId?: string
  booked?: boolean
  cold_img?: string
  fm_name?: string
  hotdesk?: boolean
  id?: number
  sign_in_time?: string
  sign_out_time?: string
  user_email?: string
  vacant?: boolean

  constructor(init?: Partial<ImageMapCoordinate>) {
    Object.assign(this, init);
  }
}