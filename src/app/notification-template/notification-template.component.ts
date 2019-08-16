import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationTemplate } from './notification-template';
import { NotificationType } from '../notification-type/notification-type';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from 'src/app/components/confirmation-dialog/confirmation-dialog.service';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';
import { NotificationTypeService } from '../notification-type/notification-type.service';
import { NotificationTemplateService } from './notification-template.service';
import { template } from '@angular/core/src/render3';
// import { NotepadService } from 'src/app/notepad/notepad.service';
// import { NotepadComponent } from 'src/app/notepad/notepad.component';
// import { NotificationMessageTemplateComponent } from '../notification-message-template/notification-message-template.component';


import * as $ from 'jquery';
// import 'datatables.net';

@Component({
  selector: 'app-notification-template',
  templateUrl: './notification-template.component.html',
  styleUrls: ['./notification-template.component.css']
})
export class NotificationTemplateComponent implements OnInit {

  notificationTemplate: NotificationTemplate = new NotificationTemplate();
  notificationTemplates: NotificationTemplate[] = [];
  selectedNotificationTemplate: any
  view: number
  searchNotificationTemplate: NotificationTemplate = new NotificationTemplate()
  notificationTypes: NotificationType[] = []
  notificationTypeCode:string;
  dataTable;
  deliveryMethod = ['SMS', 'Email', 'Post', 'Hand']
  specialPrinter = ['Yes', 'No']
  specialPrinterClass = ['PrinterClass1', 'PrinterClass2']
  enableAdviseTemplate: boolean;
  enableMsgTemplate: boolean;
  enableSpecialPrinter:boolean;
  enableSpecialPrinterClass:boolean;
  enablePrinterPrompt:boolean;
  closeResult:string;


  constructor(private router: Router,
    // private confirmationDialogService: ConfirmationDialogService, private chRef: ChangeDetectorRef,
    // private modalService: NgbModal, private _smp: ServerMessagePopUp,  private notificationTypeService: NotificationTypeService,
    // private notifcationTemplateService: NotificationTemplateService, private notepadService:NotepadService
    ) {
    this.view = 0;

  }

  ngOnInit() {

    // this.notifcationTemplateService.getNotificationTemplates().subscribe(data => {
    //   this.notificationTemplates = data;
    //   this.chRef.detectChanges();
    //   const table = $('table');
    //   this.dataTable = table.DataTable();
    // }), err => {
    //   console.log("Cannot load notification Templates ")
    // }
    // this.getNotificationTypes()


  }
  // search() {
  //   console.log('searching!!');
  //   this.notifcationTemplateService.query(this.searchNotificationTemplate).subscribe((data => {
  //     this.notificationTemplates = data;
  //     console.log(data);
  //     this.chRef.detectChanges();

  //     const table = $('table');
  //     this.dataTable = table.DataTable();

  //   }), (err => {
  //     console.log(err);
  //   }));
  // }

  // getNotificationTypes() {
  //   this.notificationTypeService.getNotificationTypes().subscribe(data => {
  //     this.notificationTypes = data;
  //   })
  // }




  Add() {
    this.view = 1;
  }
  // delete() {
  //   this.notifcationTemplateService.deleteNotificationTemplate(this.selectedNotificationTemplate.id).subscribe((data) => {
  //     this.notificationTypes.splice(this.notificationTypes.indexOf(this.selectedNotificationTemplate.id), 1);
  //     this.ngOnInit();
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }

  edit() {
    this.view = 1
    this.notificationTemplate = this.selectedNotificationTemplate;

  }

  set(event: any, notificationTemplate: any) {
    this.selectedNotificationTemplate = notificationTemplate;
  }

  changeNotificationTypes(event){
    this.notificationTypeCode = event.code

  }

  changeDelMethod() {
    var del = this.notificationTemplate.deliveryMethod;
    var specialprinter = this.notificationTemplate.specialPrinter
    console.log(this.notificationTemplate.deliveryMethod)
    console.log(this.notificationTemplate.specialPrinter)

  this.enableAdviseTemplate = (del === "SMS" || del === "" ? false : true)
    this.enableMsgTemplate = (("Post" === del || "Hand" === del || "" === del) ? false : true)
    this.enableSpecialPrinter = (("SMS" === del || "Email" === del || "" === del ?false : true))
    this.enableSpecialPrinterClass = ((("Hand" === del || "Post" === del) && "Yes" === specialprinter)? true : false)
    console.log(this.notificationTemplate.specialPrinter)

    this.enablePrinterPrompt = (("Hand" === del) ? true : false);
    console.log("Advise Template",this.enableAdviseTemplate)
    console.log("Message Template",this.enableMsgTemplate);
    console.log("Special Printer",this.enableSpecialPrinter);


  }

  open(event){
     if (event == "message"){
       
      // const modalRef = this.modalService.open(NotificationMessageTemplateComponent, {});
      // // modalRef.componentInstance.notepad = this.notes;

      // // modalRef.componentInstance.emitService.subscribe(emittedValue => {
      // //   this.fxBidSession.remarks = emittedValue
      }
     }
    
     


    
  


  // openMsgTemplate(msg) {

  //   this.modalService.open(msg, {size: 'lg'}).result.then((result) => {
  //    // this.advanceSearch();
  //   //  this.createDocument();
  //   //  this.doc = new Document();

  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

  // Save() {
  //   if (this.notificationTemplate.id === undefined) {
  //     this.notificationTypeService.createNotificationType(this.notificationTemplate).subscribe((data => {
  //       this._smp.popUpAlertSuccess();
  //       this.notificationTemplate = new NotificationTemplate()
  //       this.view = 0;
  //       this.ngOnInit()
  //       //this.router.navigate(['static-data/account']);
  //     }), err => {
  //       console.log(err);
  //     });
  //   } else {
  //     this.notifcationTemplateService.updateNotificationTemplate(this.notificationTemplate).subscribe((data => {
  //       this._smp.popUpAlertSuccess();
  //       this.notificationTemplate = new NotificationTemplate()

  //       this.view = 0;
  //       this.ngOnInit()
  //       // this.router.navigate(['static-data/account']);
  //     }), err => {
  //       console.log(err);
  //     });
  //   }
  // }

  Cancel() {
    this.view = 0;
    this.ngOnInit()
  }
  // dDialog() {
  //   this.confirmationDialogService.confirm('Confirm delete', `Do you really want to delete this template?`)
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


