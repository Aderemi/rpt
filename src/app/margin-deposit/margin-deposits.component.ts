import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';

import * as $ from 'jquery';
// // import 'datatables.net';
// import { MarginDeposit } from './margin-deposit';
// import { margindepositService } from './margin-deposit.service';
// import { MarginDepositType } from './margin-deposit-type';
// import { InstrumentRegister } from '../registration/registration';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { MarginDepositComponent } from './margin-deposit.component';

@Component({
  selector: 'app-margin-deposits',
  templateUrl: './margin-deposits.component.html',
  styleUrls: ['./margin-deposits.component.css']
})
export class MarginDepositsComponent implements OnInit {

  // @Input() instrumentRegister : InstrumentRegister;
  // @Input() enableFromParent : boolean;
  // MarginDeposits: MarginDeposit[];
  // margindeposit:MarginDeposit = new MarginDeposit();
  // dataTable: any;
  // selectedMarginDeposit: any;
  // margintypes : MarginDepositType[];

  constructor(private router: Router
    // , private marginService: margindepositService,
    // private confirmationDialogService: ConfirmationDialogService, 
    // private chRef: ChangeDetectorRef, private modalService:NgbModal
    ) { }


 

  // deleteMarginDeposit() {
  //   if (this.selectedMarginDeposit.id) {
  //     this.marginService.deleteMarginDeposit(this.selectedMarginDeposit.id).subscribe(data => {
  //       console.log('Margin Deposit Deleted');
  //       this.ngOnInit();

  //     });
  //   }



  // }

  // editMarginDeposit() {
  //   const isValid = !isNaN(this.selectedMarginDeposit.id);
  //   if (isValid) 
  //   {
  //     debugger
  //  /* if (isValid) {
  //     console.log('Margin Deposit edited');
  //     this.router.navigate(['/margindeposit', this.selectedMarginDeposit.id]);
  //   }*/

  //   //this.modalService.open(MarginDepositComponent, { size: 'lg' });
  //  // this.modalService.open(MarginDepositComponent, { size : 'lg', backdrop: 'static', windowClass: 'custom-modal'} );
  //   const modalref = this.modalService.open(MarginDepositComponent, { size : 'lg', backdrop: 'static', windowClass: 'custom-modal'} );
  //   modalref.componentInstance.instrumentRegister = this.instrumentRegister;
  //   modalref.componentInstance.externalId = this.selectedMarginDeposit.id;
  // }
  //   /*.result.then((result) => {

  //     this.editDocument();
  //     this.doc = new Document();
  //     console.log(this.selectedMarginDeposit);
  //    // this.closeResult = `Closed with: ${result}`;
  //     this.ngOnInit();
  //     //this.ngOnInit();
  //   }, (reason) => {
  //   //  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     this.ngOnInit();
  //   });*/


  // }

  // equals(o1, o2) {
  //   if (o1 != null && o2 != null) {
  //     console.log("-------------------")
  //     console.log(o1.code)
  //     console.log(o2.code)
  //     console.log(o1.code == o2.code)
  //     console.log("-------------------")
  //     return o1.code == o2.code ? true : false;
  //   }
  //   return false;
  // }
  // set(event: any, margindeposit: any) {
  //   console.log('Margin Deposit selected' + margindeposit);
  //   this.selectedMarginDeposit = margindeposit;
         
  // }

  // search() {
  //   console.log('searching margin deposit !!');
  //   this.margindeposit.effectiveDate =null;
  //   this.marginService.queryMarginDeposit(this.margindeposit).subscribe((data => {
  //     this.MarginDeposits = data;
  //     debugger
  //     console.log(data);
  //     this.chRef.detectChanges();

  //     const table = $('table');
  //     this.dataTable = table.DataTable();

  //   }), (err => {
  //     console.log('Exhange rate search error ' + err);
  //   }));
  // }

  // public openConfirmationDialog() {

  //   this.confirmationDialogService.confirm('Confirm delete', `Do you wish to delete ${this.selectedMarginDeposit.code}?`)
  //     .then((confirmed) => {
  //       console.log('User confirmed:', confirmed); this.deleteMarginDeposit();
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }

  ngOnInit() {
  //   this.margindeposit = new MarginDeposit();
  //   this.margindeposit.instrumentRegister = this.instrumentRegister;
  //   this.margindeposit.effectiveDate = null;
  //  // this.marginService.getMarginDeposits().subscribe(data => {
  //     this.marginService.queryMarginDeposit(this.margindeposit).subscribe(data => {
  //     console.log(data);
  //     this.MarginDeposits = data;
  //     debugger
  //     this.getMarginDepositTypes(); 
  //     this.chRef.detectChanges();

  //     const table: any = $('#myTable');
  //     this.dataTable = table.DataTable();  
       
  //   }, (error) => {
  //     console.log(error);
  //   });

 
  }


  // openMarginDeposit()
  // {
  //   //this.modalService.open(MarginDepositComponent, {  });
  //   const modalref = this.modalService.open(MarginDepositComponent, { size : 'lg', backdrop: 'static', windowClass: 'custom-modal'} );
  //   modalref.componentInstance.instrumentRegister = this.instrumentRegister;
    
  // }

  // getMarginDepositTypes()
  // {
  //   debugger
  //   this.marginService.getMarginDepositTypes().subscribe((data=>{
  //     this.margintypes = data;
  //     console.log(data);
    
  //   }),(err=>{
 
  //   }));
  // }  
}
