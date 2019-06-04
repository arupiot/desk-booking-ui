import {Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmailService } from './../../../services/email.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.less']
})
export class BookingModalComponent {

  submittedError: boolean;
  error: any;
  emailPending: boolean;

  constructor(
      public dialogRef: MatDialogRef<BookingModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private emailService: EmailService,
      private authService: AuthService,
      private router: Router,
      private toastr: ToastrService,
    ) {
      this.emailPending = false;
      this.submittedError = false;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  bookFromModal(): void {
    const desk = this.emailService.getSelectedDesk();
    const email = this.authService.userProfile.email;
    this.emailPending = true;

    this.emailService.sendEmail({
      email1: email,
      email2: null})
    .subscribe(
      response =>{
        console.log("response:",response);
        this.emailService.setSelectedDesk(undefined);        
        this.toastr.success('Success! Check your email...');
        this.dialogRef.close();
      }, 
      error =>{
        this.error = error
        console.log("error message:", error);
        this.submittedError = true;
      }
    );

    this.emailPending = false;
    
  }

}
