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

@NgModule({
  declarations: [
    AppComponent,
    ChooseDeskComponent,
    TeamSendEmailComponent,
    SplashComponent,
    CallbackComponent,
    EmailSuccessComponent,
    ImageMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    CommonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ AuthService, EmailService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
