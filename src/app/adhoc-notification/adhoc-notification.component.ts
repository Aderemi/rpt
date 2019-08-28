import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AdhocNotification } from './adhoc-notification';
// import { NotificationType } from '../notification-type/notification-type';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from 'src/app/components/confirmation-dialog/confirmation-dialog.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';
// import { NotificationTypeService } from '../notification-type/notification-type.service';
// import { AdhocNotificationService } from './adhoc-notification.service';

import * as $ from 'jquery';
// import 'datatables.net';

@Component({
  selector: 'app-adhoc-notification',
  templateUrl: './adhoc-notification.component.html',
  styleUrls: ['./adhoc-notification.component.css']
})
export class AdhocNotificationComponent implements OnInit {

  // adhocNotification: AdhocNotification = new AdhocNotification();
  // adhocNotifications: AdhocNotification[] = [];
  // selectedAdhocNotification: any
  view: number
  // searchAdhocNotification:AdhocNotification = new AdhocNotification()
  // notificationTypes:NotificationType[]=[]
  // dataTable;
  // reasons = ['']


  constructor(private router: Router,
    // private confirmationDialogService: ConfirmationDialogService, private chRef: ChangeDetectorRef,
    // private adHocNotificationService:AdhocNotificationService,
    // private modalService: NgbModal, private _smp: ServerMessagePopUp, private notificationTypeService:NotificationTypeService,
    ) {
    this.view = 0;

  }

  ngOnInit() {

  //   this.notificationTypeService.getNotificationTypes().subscribe(editorData => {
  //     this.notificationTypes = editorData;
  //     this.chRef.detectChanges();
  //     const table = $('table');
  //     this.dataTable = table.DataTable();
  //   }), err => {
  //     console.log("Cannot load notification Type ")
  //   }
  //  // this.getNotificationCategories()


  }
  // search() {
  //   console.log('searching!!');
  //   this.adHocNotificationService.query(this.searchAdhocNotification).subscribe((editorData => {
  //     this.adhocNotifications = editorData;
  //     console.log(editorData);
  //     this.chRef.detectChanges();

  //     const table = $('table');
  //     this.dataTable = table.DataTable();

  //   }), (err => {
  //     console.log(err);
  //   }));
  // }

  // getAdhocNotifications(){
  //   this.adHocNotificationService.getAdhocNotifications().subscribe(editorData=>{
  //     this.adhocNotifications = editorData;
  //   })
  // }




  Add() {
    this.view = 1;
  }
  // delete() {
  //   this.adHocNotificationService.deleteAdHocNotification(this.selectedAdhocNotification.id).subscribe((editorData) => {
  //     this.adhocNotifications.splice(this.adhocNotifications.indexOf(this.selectedAdhocNotification.id), 1);
  //     this.ngOnInit();
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }

  edit() {
    this.view = 1
    // this.adhocNotification = this.selectedAdhocNotification;

  }

  // set(event: any, notificationType: any) {
  //   this.selectedAdhocNotification = notificationType;
  // }

  // Save() {
  //   if (this.adhocNotification.id === undefined) {
  //     this.adHocNotificationService.createAdhocNotification(this.adhocNotification).subscribe((editorData => {
  //       this._smp.popUpAlertSuccess();
  //       this.adhocNotification = new AdhocNotification()
  //       this.view = 0;
  //       this.ngOnInit()
  //       //this.router.navigate(['static-editorData/account']);
  //     }), err => {
  //       console.log(err);
  //     });
  //   } else {
  //     this.adHocNotificationService.updateAdhocNotification(this.adhocNotification).subscribe((editorData => {
  //       this._smp.popUpAlertSuccess();
  //       this.adhocNotification = new AdhocNotification()

  //       this.view = 0;
  //       this.ngOnInit()
  //      // this.router.navigate(['static-editorData/account']);
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
  //   this.confirmationDialogService.confirm('Confirm delete', `Do you really want to delete ${this.selectedAdhocNotification.subject}?`)
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
