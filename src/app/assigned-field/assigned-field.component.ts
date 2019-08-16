import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { ProductService } from '../product/product.service';
// import { Product } from '../product/product';
// import { LocationRouter } from '../class/LocationRouter';
import { InwardCustomerPaymentProductService } from '../inward-customer-payment-product/inward-customer-payment-product.service';

import * as $ from 'jquery';
// import 'datatables.net';
// import { WarrantProductField } from '../modules/warrant/warrant-product-field/warrant-product-field';
// import { WarrantProductFieldService } from '../modules/warrant/warrant-product-field/warrant-product-field.service';


@Component({
  selector: 'app-assigned-field',
  templateUrl: './assigned-field.component.html',
  styleUrls: ['./assigned-field.component.css']
})
export class AssignedFieldComponent implements OnInit {

  relatedTaskCurrency: boolean;
  // productField: WarrantProductField[];
  // product: Product;
  // navItem: any;
  // operation: string;
  // //locator: LocationRouter;
  // prod:Product 
  // //datatable: DataTables.Api;
  // dataTable
  constructor(private _inwardCustomerPaymentProductService: InwardCustomerPaymentProductService,
    // private _router: Router, private _fieldService: WarrantProductFieldService,
    // private locator:LocationRouter,
    // private _activatedRoute: ActivatedRoute, private _productService: ProductService, private chRef: ChangeDetectorRef
    ) {
    //this.locator = new LocationRouter(this._router);
  }

  ngOnInit() {
    this.relatedTaskCurrency = true;
    // console.log('HERE!');

    // this._activatedRoute.params.subscribe(params => {
    //   const decode = JSON.parse(atob(params.navItem));
    //   console.log("decoded item",decode)
    //   this.product = decode.product;
    //   console.log("decoded product",this.product)

    //   this.operation = decode.operation;
    //   this._productService.getOne(this.product.id).subscribe(data => {

    //     this.prod = data;
    //     console.log("proddd",this.prod)
    //   });
    // });


    // this._fieldService.getWarrantProductFieldz(this.product.id).subscribe(data => {
    //   console.log('fetch');
    //   this.productField = data;
    //   console.log("productField",this.productField)
    //   this.chRef.detectChanges();
    //   const table = $('table');
    //   this.dataTable = table.DataTable();
    //  // this.productField.forEach(e=>e.dScript)
    //   /* if (this.productField === undefined) {
    //     this.productField = [];
    //   } */
    // });

    // // this.chRef.detectChanges();
    // // const table = $('#myTable');
    // // this.datatable = table.DataTable({
    // // });

  }

  // fieldOperation(evt) {
  //   evt.preventDefault();
  //   switch (evt.path[0].innerText) {
  //     case 'Add': {
  //       this.relatedTaskCurrency = false;
  //       break;
  //     }
  //     case 'Modify': {

  //       break;

  //     }
  //     case 'Cancel': {
  //       break;
  //     }
  //     case 'View': {




  //       break;
  //     }
  //     default: {
  //       console.log(this.product);
  //       this.navItem = {
  //         'operation': this.operation,
  //         'product': this.product
  //       };
  //       console.log(this.navItem);
  //       this._productService.setRelatedTaskFlag(true);
  //       this.locator.getLocation(this.product.productSubCategory.productCategory.code, this.navItem);
  //     }

  //   }

  // }

  // assign(warrant: any) {
  //   console.log(warrant);
  //   console.log('here');
  //   // this.productField.push(warrant);
  //   // this._inwardCustomerPaymentProductService.addField(warrant);
  //   this.ngOnInit();
  // }


}
