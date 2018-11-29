import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// page components

import { ChooseDeskComponent } from './pages/choose-desk/choose-desk.component';
import { TeamSendEmailComponent } from './pages/team-send-email/team-send-email.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/choose-desk',
    pathMatch: 'full'
  }, {
    path: 'choose-desk',
    component: ChooseDeskComponent
  }, {
    path: 'team-send-email',
    component: TeamSendEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
