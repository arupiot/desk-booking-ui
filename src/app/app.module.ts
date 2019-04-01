import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ChooseDeskComponent } from './pages/choose-desk/choose-desk.component';
import { TeamSendEmailComponent } from './pages/team-send-email/team-send-email.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashComponent } from './pages/splash/splash.component';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback.component';

import { EmailService } from './services/email.service';
import { EmailSuccessComponent } from './pages/email-success/email-success.component';
import { ImageMapComponent } from './pages/choose-desk/image-map/image-map.component';

import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingModalComponent } from './pages/choose-desk/booking-modal/booking-modal.component';

import { MatIconModule } from '@angular/material/icon';

import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    CommonModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    ChooseDeskComponent,
    TeamSendEmailComponent,
    SplashComponent,
    CallbackComponent,
    EmailSuccessComponent,
    ImageMapComponent,
    BookingModalComponent
  ],
  entryComponents: [BookingModalComponent, ChooseDeskComponent],
  providers: [ AuthService, EmailService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
