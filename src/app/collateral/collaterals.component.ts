import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';

import * as $ from 'jquery';
// import 'datatables.net';

// import { InstrumentRegister } from '../registration/registration';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import { Collateral } from './collateral';
// import { CollateralType } from './collateral-type';
// import { CollateralService } from './collateral.service';
// import { CollateralComponent } from './collateral.component';

@Component({
  selector: 'app-collaterals',
  templateUrl: './collaterals.component.html',
  styleUrls: ['./collaterals.component.css']
})
export class CollateralsComponent implements OnInit {

  // @Input() instrumentRegister : InstrumentRegister;
  // @Input() enableFromParent : boolean;
  // collaterals: Collateral[];
  // collateral:Collateral = new Collateral();
  // dataTable: any;
  // selectedCollateral: any;
  // colTypes : CollateralType[];

  // constructor(private router: Router, private colService: CollateralService,
  //   private confirmationDialogService: ConfirmationDialogService, private chRef: ChangeDetectorRef, private modalService:NgbModal) { }


 

  // deleteCollateral() {
  //   if (this.selectedCollateral.id) {
  //     this.colService.deleteCollateral(this.selectedCollateral.id).subscribe(data => {
  //       console.log('collateral Deleted');
  //       this.ngOnInit();

  //     });
  //   }



  // }

  // editCollateral() {
  //   const isValid = !isNaN(this.selectedCollateral.id);
  //  /* if (isValid) {
  //     console.log('Margin Deposit edited');
  //     this.router.navigate(['/Collateral', this.selectedCollateral.id]);
  //   }*/

  //   this.modalService.open(CollateralComponent, { size: 'lg' });
  //   /*.result.then((result) => {

  //     this.editDocument();
  //     this.doc = new Document();
  //     console.log(this.selectedCollateral);
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
  // set(event: any, Collateral: any) {
  //   console.log('collateral selected' + Collateral);
  //   this.selectedCollateral = Collateral;
         
  // }

  // search() {
  //   console.log('searching Collateral !!');
  //   this.collateral.effectiveDate =null;
  //   this.colService.queryCollateral(this.collateral).subscribe((data => {
  //     this.collaterals = data;
  //     debugger
  //     console.log(data);
  //     this.chRef.detectChanges();

  //     const table = $('table');
  //     this.dataTable = table.DataTable();

  //   }), (err => {
  //     console.log('Collateral search error ' + err);
  //   }));
  // }

  // public openConfirmationDialog() {

  //   this.confirmationDialogService.confirm('Confirm delete', `Do you wish to delete ${this.selectedCollateral.code}?`)
  //     .then((confirmed) => {
  //       console.log('User confirmed:', confirmed); this.deleteCollateral();
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }

  ngOnInit() {
  //   this.collateral = new Collateral();
  //   this.collateral.instrumentRegister = this.instrumentRegister;
  //   this.collateral.effectiveDate = null;
  //   this.colService.queryCollateral(this.collateral).subscribe(data => {
  //     console.log(data);
  //     this.collaterals = data;
  //     debugger
  //     this.getCollateralTypes(); 
  //     this.chRef.detectChanges();

  //     const table: any = $('#myTable');
  //     this.dataTable = table.DataTable();  
       
  //   }, (error) => {
  //     console.log(error);
  //   });

 
  }

  // openCollateral()
  // {
  //   const modalref = this.modalService.open(CollateralComponent, { size : 'lg', backdrop: 'static', windowClass: 'custom-modal'} );
  //   modalref.componentInstance.instrumentRegister = this.instrumentRegister;
  // }

  // getCollateralTypes()
  // {
  //   debugger
  //   this.colService.getCollateralTypes().subscribe((data=>{
  //     this.colTypes = data;
  //     console.log(data);
    
  //   }),(err=>{
 
  //   }));
  // }  
}
