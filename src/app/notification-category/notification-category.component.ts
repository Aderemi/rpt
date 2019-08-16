import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from 'src/app/components/confirmation-dialog/confirmation-dialog.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';
// import { NotificationCategory } from './notification-category';
// import { NotificationCategoryService } from './notification-category.service';

import * as $ from 'jquery';
// import 'datatables.net';

@Component({
  selector: 'app-notification-category',
  templateUrl: './notification-category.component.html',
  styleUrls: ['./notification-category.component.css']
})
export class NotificationCategoryComponent implements OnInit {

  // notificationCategory: NotificationCategory = new NotificationCategory();
  // notificationCategories: NotificationCategory[] = [];
  selectedNotificationCategory: any
  view: number
  // searchNotificationCategory:NotificationCategory = new NotificationCategory()

  // dataTable;

  constructor(private router: Router,
    // private confirmationDialogService: ConfirmationDialogService, private chRef: ChangeDetectorRef, 
    // private modalService: NgbModal, private _smp: ServerMessagePopUp, private notificationCatService:NotificationCategoryService
    ) {
    this.view = 0;

  }

  ngOnInit() {
   
    // this.notificationCatService.getNotificationCategories().subscribe(data => {
    //   this.notificationCategories = data;
    //   this.chRef.detectChanges();
    //   const table = $('table');
    //   this.dataTable = table.DataTable();
    // }), err => {
    //   console.log("Cannot load notification Category ")
    // }


  }
  // search() {
  //   console.log('searching!!');
  //   this.notificationCatService.query(this.searchNotificationCategory).subscribe((data => {
  //     this.notificationCategories = data;
  //     console.log(data);
  //     this.chRef.detectChanges();

  //     const table = $('table');
  //     this.dataTable = table.DataTable();

  //   }), (err => {
  //     console.log(err);
  //   }));
  // }




  Add() {
    this.view = 1;
  }
  delete() {
    // this.notificationCatService.deleteNotificationCategory(this.selectedNotificationCategory.id).subscribe((data) => {
    //   this.notificationCategories.splice(this.notificationCategories.indexOf(this.selectedNotificationCategory.id), 1);
      // this.ngOnInit();
    // }, (error) => {
    //   console.log(error);
    // });
  }

  edit() {
    this.view = 1
    // this.notificationCategory = this.selectedNotificationCategory;

  }

  // set(event: any, account: any) {
  //   console.log("data", account)
  //   this.selectedNotificationCategory = account;
  // }

  // Save() {
  //   if (this.notificationCategory.id === undefined) {
  //     this.notificationCatService.createNotificationCategory(this.notificationCategory).subscribe((data => {
  //       this._smp.popUpAlertSuccess();
  //       this.notificationCategory = new NotificationCategory()
  //       this.view = 0;
  //       this.ngOnInit()
  //       //this.router.navigate(['static-data/account']);
  //     }), err => {
  //       console.log(err);
  //     });
  //   } else {
  //     this.notificationCatService.updateNotificationCategories(this.notificationCategory).subscribe((data => {
  //       this._smp.popUpAlertSuccess();
  //       this.notificationCategory = new NotificationCategory()

  //       this.view = 0;
  //       this.ngOnInit()
  //      // this.router.navigate(['static-data/account']);
  //     }), err => {
  //       console.log(err);
  //     });
  //   }
  // }

  Cancel(){
    this.view = 0;
   // console.log("enter")
    this.ngOnInit()
  }
  // dDialog() {
  //   this.confirmationDialogService.confirm('Confirm delete', `Do you really want to delete ${this.selectedNotificationCategory.code}?`)
  //     .then((confirmed) => {
  //       if (confirmed = true) {
  //         this.delete();
  //         this.view = 0;
  //       }
  //       console.log('User confirmed:', confirmed);
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }


}
