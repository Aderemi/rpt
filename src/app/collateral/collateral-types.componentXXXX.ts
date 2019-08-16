import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';

import * as $ from 'jquery';
import 'datatables.net';
import { CollateralType } from './collateral-type';
// import { CollateralService } from './collateral.service';


@Component({
  selector: 'app-collateral-types',
  templateUrl: './collateral-types.component.html',
  styleUrls: ['./collateral-types.component.css']
})
export class CollateralTypesComponent implements OnInit {

  // Collateraltypes: CollateralType[];
  // collateraltype = new CollateralType();
  // dataTable: any;
  // selectedCollateraltype: any;

  // constructor(private router: Router, private colService: CollateralService,
  //   private confirmationDialogService: ConfirmationDialogService, private chRef: ChangeDetectorRef) { }


 

  // deleteCollateraltype() {
  //   if (this.selectedCollateraltype.id) {
  //     this.colService.deleteCollateralType(this.selectedCollateraltype.id).subscribe(data => {
  //       console.log('Collateral Type Deleted');
  //       this.ngOnInit();

  //     });
  //   }



  // }

  // editCollateraltype() {
  //   const isValid = !isNaN(this.selectedCollateraltype.id);
  //   if (isValid) {
  //     console.log('Collateral Type edited');
  //     this.router.navigate(['/collateraltype', this.selectedCollateraltype.id]);
  //   }


  // }

  // set(event: any, collateraltype: any) {
  //   console.log('Collateral type selected' + collateraltype);
  //   this.selectedCollateraltype = collateraltype;
         
  // }

  // search() {
  //   console.log('searching Collateral type !!');
  //   this.colService.query(this.collateraltype).subscribe((data => {
  //     this.Collateraltypes = data;
  //     console.log(data);
  //     this.chRef.detectChanges();

  //     const table = $('table');
  //     this.dataTable = table.DataTable();

  //   }), (err => {
  //     console.log('Collateral search error ' + err);
  //   }));
  // }

  // public openConfirmationDialog() {

  //   this.confirmationDialogService.confirm('Confirm delete', `Do you wish to delete ${this.selectedCollateraltype.code}?`)
  //     .then((confirmed) => {
  //       console.log('User confirmed:', confirmed); this.deleteCollateraltype();
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }

  ngOnInit() {
  //   this.colService.getCollateralTypes().subscribe(data => {
  //     console.log(data);
  //     this.Collateraltypes = data;
  //     this.chRef.detectChanges();

  //     const table: any = $('#myTable');
  //     this.dataTable = table.DataTable();         
  //   }, (error) => {
  //     console.log(error);
  //   });

 
  }

}
