import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationType } from './notification-type';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';
import { NotificationTypeService } from './notification-type.service';
import { NotificationCategoryService } from '../notification-category/notification-category.service';
import { NotificationCategory } from '../notification-category/notification-category';


import * as $ from 'jquery';
// import 'datatables.net';
@Component({
  selector: 'app-notification-type',
  templateUrl: './notification-type.component.html',
  styleUrls: ['./notification-type.component.css']
})
export class NotificationTypeComponent implements OnInit {

  notificationType: NotificationType = new NotificationType();
  notificationTypes: NotificationType[] = [];
  selectedNotificationType: any
  view: number
  searchNotificationType:NotificationType = new NotificationType()
  notificationCategories:NotificationCategory[]=[]
  dataTable;
  recipientCategory = ['Customer','Relationship Manager']
  priority = ['Low','Medium','High','Very High']
  adhocGeneration = ['Allowed','Not Allowed']

  constructor(private router: Router,
    // private confirmationDialogService: ConfirmationDialogService, private chRef: ChangeDetectorRef, 
    // private modalService: NgbModal, private _smp: ServerMessagePopUp, private notificationTypeService:NotificationTypeService,
    private notifcationCatService:NotificationCategoryService) {
    this.view = 0;

  }

  ngOnInit() {
   
    // this.notificationTypeService.getNotificationTypes().subscribe(data => {
    //   this.notificationTypes = data;
    //   this.chRef.detectChanges();
    //   const table = $('table');
    //   this.dataTable = table.DataTable();
    // }), err => {
    //   console.log("Cannot load notification Type ")
    // }
    // this.getNotificationCategories()


  }
  // search() {
  //   console.log('searching!!');
  //   this.notificationTypeService.query(this.searchNotificationType).subscribe((data => {
  //     this.notificationTypes = data;
  //     console.log(data);
  //     this.chRef.detectChanges();

  //     const table = $('table');
  //     this.dataTable = table.DataTable();

  //   }), (err => {
  //     console.log(err);
  //   }));
  // }

  // getNotificationCategories(){
  //   this.notifcationCatService.getNotificationCategories().subscribe(data=>{
  //     this.notificationCategories = data;
  //   })
  // }




  Add() {
    this.view = 1;
  }
  // delete() {
  //   this.notificationTypeService.deleteNotificationType(this.selectedNotificationType.id).subscribe((data) => {
  //     this.notificationTypes.splice(this.notificationTypes.indexOf(this.selectedNotificationType.id), 1);
  //     this.ngOnInit();
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }

  edit() {
    this.view = 1
    this.notificationType = this.selectedNotificationType;

  }

  // set(event: any, notificationType: any) {
  //   this.selectedNotificationType = notificationType;
  // }

  // Save() {
  //   if (this.notificationType.id === undefined) {
  //     this.notificationTypeService.createNotificationType(this.notificationType).subscribe((data => {
  //       this._smp.popUpAlertSuccess();
  //       this.notificationType = new NotificationType()
  //       this.view = 0;
  //       this.ngOnInit()
  //       //this.router.navigate(['static-data/account']);
  //     }), err => {
  //       console.log(err);
  //     });
  //   } else {
  //     this.notificationTypeService.updateNotificationType(this.notificationType).subscribe((data => {
  //       this._smp.popUpAlertSuccess();
  //       this.notificationType = new NotificationType()

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
    this.ngOnInit()
  }
  // dDialog() {
  //   this.confirmationDialogService.confirm('Confirm delete', `Do you really want to delete ${this.selectedNotificationType.description}?`)
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
