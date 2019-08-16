import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';

import * as $ from 'jquery';
// import 'datatables.net';
import { MarginDepositType } from './margin-deposit-type';
// import { margindepositService } from './margin-deposit.service';

@Component({
  selector: 'app-margin-deposit-types',
  templateUrl: './margin-deposit-types.component.html',
  styleUrls: ['./margin-deposit-types.component.css']
})
export class MarginDepositTypesComponent implements OnInit {

  Margindeposittypes: MarginDepositType[];
  margindeposittype = new MarginDepositType();
  dataTable: any;
  selectedMarginDeposittype: any;

  constructor(
    // private router: Router, private marginService: margindepositService,
    // private confirmationDialogService: ConfirmationDialogService,
     private chRef: ChangeDetectorRef) { }


 

  // deleteMarginDeposittype() {
  //   if (this.selectedMarginDeposittype.id) {
  //     this.marginService.deleteMarginDepositType(this.selectedMarginDeposittype.id).subscribe(data => {
  //       console.log('Margin Deposit Type Deleted');
  //       this.ngOnInit();

  //     });
  //   }



  // }

  // editMarginDeposittype() {
  //   const isValid = !isNaN(this.selectedMarginDeposittype.id);
  //   if (isValid) {
  //     console.log('Margin Deposit Type edited');
  //     this.router.navigate(['/margindeposittype', this.selectedMarginDeposittype.id]);
  //   }


  // }

  // set(event: any, margindeposittype: any) {
  //   console.log('Margin Deposit type selected' + margindeposittype);
  //   this.selectedMarginDeposittype = margindeposittype;
         
  // }

  // search() {
  //   console.log('searching margin deposit type !!');
  //   this.marginService.query(this.margindeposittype).subscribe((data => {
  //     this.Margindeposittypes = data;
  //     console.log(data);
  //     this.chRef.detectChanges();

  //     const table = $('table');
  //     this.dataTable = table.DataTable();

  //   }), (err => {
  //     console.log('Margin Deposit search error ' + err);
  //   }));
  // }

  // public openConfirmationDialog() {

  //   this.confirmationDialogService.confirm('Confirm delete', `Do you wish to delete ${this.selectedMarginDeposittype.code}?`)
  //     .then((confirmed) => {
  //       console.log('User confirmed:', confirmed); this.deleteMarginDeposittype();
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }

  ngOnInit() {
    // this.marginService.getMarginDepositTypes().subscribe(data => {
    //   console.log(data);
    //   this.Margindeposittypes = data;
    //   this.chRef.detectChanges();

    //   const table: any = $('#myTable');
    //   this.dataTable = table.DataTable();         
    // }, (error) => {
    //   console.log(error);
    // });

 
  }

}
