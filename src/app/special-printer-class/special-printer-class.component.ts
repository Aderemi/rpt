import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpecialPrinterClass } from './special-printer-class';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { SpecialPrinterClassService } from './special-printer-class.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';


import * as $ from 'jquery';
// import 'datatables.net';

@Component({
  selector: 'app-special-printer-class',
  templateUrl: './special-printer-class.component.html',
  styleUrls: ['./special-printer-class.component.css']
})
export class SpecialPrinterClassComponent implements OnInit {

  specialPrinterClass: SpecialPrinterClass = new SpecialPrinterClass();
  specialPrinterClasses: SpecialPrinterClass[] = [];
  selectedSpecialPrinterClass: any
  view: number
  searchSpecialPrinterClass:SpecialPrinterClass = new SpecialPrinterClass()
  //notificationTypes:NotificationType[]=[]
  dataTable;


  constructor(private router: Router,
    // private confirmationDialogService: ConfirmationDialogService,
     private chRef: ChangeDetectorRef, 
    private specialPrinterClassService:SpecialPrinterClassService,
    // private modalService: NgbModal, private _smp: ServerMessagePopUp
    ) {
    this.view = 0;

  }

  ngOnInit() {
   
    this.specialPrinterClassService.getSpecialPrinterClasses().subscribe(data => {
      this.specialPrinterClasses = data;
      this.chRef.detectChanges();
      const table = $('table');
      // this.dataTable = table.DataTable();
    }), err => {
      console.log("Cannot load notification Type ")
    }
   // this.getNotificationCategories()


  }
  search() {
    console.log('searching!!');
    this.specialPrinterClassService.query(this.searchSpecialPrinterClass).subscribe((data => {
      this.specialPrinterClasses = data;
      console.log(data);
      this.chRef.detectChanges();

      const table = $('table');
      // this.dataTable = table.DataTable();

    }), (err => {
      console.log(err);
    }));
  }

  // getAdhocNotifications(){
  //   this.specialPrinterClassService.getSpecialPrinterClasses().subscribe(data=>{
  //     this.specialPrinterClasses = data;
  //   })
  // }




  Add() {
    this.view = 1;
  }
  delete() {
    this.specialPrinterClassService.deleteSpecialPrinterClass(this.selectedSpecialPrinterClass.id).subscribe((data) => {
      this.specialPrinterClasses.splice(this.specialPrinterClasses.indexOf(this.selectedSpecialPrinterClass.id), 1);
      this.ngOnInit();
    }, (error) => {
      console.log(error);
    });
  }

  edit() {
    this.view = 1
    this.specialPrinterClass = this.selectedSpecialPrinterClass;

  }

  set(event: any, notificationType: any) {
    this.selectedSpecialPrinterClass = notificationType;
  }

  // Save() {
  //   if (this.specialPrinterClass.id === undefined) {
  //     this.specialPrinterClassService.createSpecialPrinterClass(this.specialPrinterClass).subscribe((data => {
  //       this._smp.popUpAlertSuccess();
  //       this.specialPrinterClass = new SpecialPrinterClass()
  //       this.view = 0;
  //       this.ngOnInit()
  //       //this.router.navigate(['static-data/account']);
  //     }), err => {
  //       console.log(err);
  //     });
  //   } else {
  //     this.specialPrinterClassService.updateSpecialPrinterClass(this.specialPrinterClass).subscribe((data => {
  //       this._smp.popUpAlertSuccess();
  //       this.specialPrinterClass = new SpecialPrinterClass()

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
  //   this.confirmationDialogService.confirm('Confirm delete', `Do you really want to delete ${this.selectedSpecialPrinterClass.subject}?`)
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
