import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// page components

import { ChooseDeskComponent } from './pages/choose-desk/choose-desk.component';
import { TeamSendEmailComponent } from './pages/team-send-email/team-send-email.component';
import { SplashComponent } from './pages/splash/splash.component';
import { CallbackComponent } from './callback.component';
import { PostLoginComponent} from './pages/post-login/post-login.component';

// authentication
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  }, {
    path: 'splash',
    component: SplashComponent
  }, {
    path: 'choose-desk',
    component: ChooseDeskComponent,
    canActivate: [
      AuthGuard
    ]
  }, {
    path: 'team-send-email',
    component: TeamSendEmailComponent,
    canActivate: [
      AuthGuard
    ]
  }, {
    path: 'callback',
    component: CallbackComponent
  }, {
    path: 'post-login',
    component: PostLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
