import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpecialPrinter } from './special-printer';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { SpecialPrinterService } from './special-printer.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';
import { SpecialPrinterClass } from '../special-printer-class/special-printer-class';
import { SpecialPrinterClassService } from '../special-printer-class/special-printer-class.service';

import * as $ from 'jquery';
// import 'datatables.net';

@Component({
  selector: 'app-special-printer',
  templateUrl: './special-printer.component.html',
  styleUrls: ['./special-printer.component.css']
})
export class SpecialPrinterComponent implements OnInit {

  specialPrinter: SpecialPrinter = new SpecialPrinter();
  specialPrinters: SpecialPrinter[] = [];
  selectedSpecialPrinter: any
  view: number
  searchSpecialPrinter:SpecialPrinter = new SpecialPrinter()
  //notificationTypes:NotificationType[]=[]
  dataTable;

  specialPrinterClasses:SpecialPrinterClass[]=[]

  constructor(private router: Router,
    // private confirmationDialogService: ConfirmationDialogService,
     private chRef: ChangeDetectorRef, 
    private specialPrinterService:SpecialPrinterService,
    // private modalService: NgbModal, private _smp: ServerMessagePopUp,
    private specialPrinterClassService:SpecialPrinterClassService
    ) {
    this.view = 0;

  }

  ngOnInit() {
   
    // this.specialPrinterService.getSpecialPrinters().subscribe(data => {
//       this.specialPrinters = data;
//       this.chRef.detectChanges();
//       const table = $('table');
//       this.dataTable = table.DataTable();
//     }), err => {
//       console.log("Cannot load notification Type ")
//     }
//    // this.getNotificationCategories()
// this.getSpecialPrinterClass();

  }
  getSpecialPrinterClass(){
    this.specialPrinterClassService.getSpecialPrinterClasses().subscribe(data=>{
      this.specialPrinterClasses = data;
    })
  }
  // search() {
  //   console.log('searching!!');
  //   this.specialPrinterService.query(this.searchSpecialPrinter).subscribe((data => {
  //     this.specialPrinters = data;
  //     console.log(data);
  //     this.chRef.detectChanges();

  //     const table = $('table');
  //     this.dataTable = table.DataTable();

  //   }), (err => {
  //     console.log(err);
  //   }));
  // }

  // getAdhocNotifications(){
  //   this.SpecialPrinterService.getSpecialPrinteres().subscribe(data=>{
  //     this.SpecialPrinteres = data;
  //   })
  // }




  Add() {
    this.view = 1;
  }
  // delete() {
  //   this.specialPrinterService.deleteSpecialPrinter(this.selectedSpecialPrinter.id).subscribe((data) => {
  //     this.specialPrinters.splice(this.specialPrinters.indexOf(this.selectedSpecialPrinter.id), 1);
  //     this.ngOnInit();
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }

  edit() {
    this.view = 1
    this.specialPrinter = this.selectedSpecialPrinter;

  }

  set(event: any, notificationType: any) {
    this.selectedSpecialPrinter = notificationType;
  }

  // Save() {
  //   if (this.specialPrinter.id === undefined) {
  //     this.specialPrinterService.createSpecialPrinter(this.specialPrinter).subscribe((data => {
  //       this._smp.popUpAlertSuccess();
  //       this.specialPrinter = new SpecialPrinter()
  //       this.view = 0;
  //       this.ngOnInit()
  //       //this.router.navigate(['static-data/account']);
  //     }), err => {
  //       console.log(err);
  //     });
  //   } else {
  //     this.specialPrinterService.updateSpecialPrinter(this.specialPrinter).subscribe((data => {
  //       this._smp.popUpAlertSuccess();
  //       this.specialPrinter = new SpecialPrinter()

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
  //   this.confirmationDialogService.confirm('Confirm delete', `Do you really want to delete ${this.selectedSpecialPrinter.description}?`)
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
