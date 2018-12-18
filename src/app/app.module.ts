import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChooseDeskComponent } from './pages/choose-desk/choose-desk.component';
import { TeamSendEmailComponent } from './pages/team-send-email/team-send-email.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashComponent } from './pages/splash/splash.component';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseDeskComponent,
    TeamSendEmailComponent,
    SplashComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
