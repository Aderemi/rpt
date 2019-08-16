import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InwardCustomerPaymentProductService } from '../inward-customer-payment-product/inward-customer-payment-product.service';
// import { Product } from '../product/product';
// import { ProductService } from '../product/product.service';
// import { LocationRouter } from '../class/LocationRouter';


import * as $ from 'jquery';
// import 'datatables.net';
// import { WarrantProductMapping } from '../modules/warrant/warrant-product-mapping/warrant-product-mapping';
// import { WarrantProduct } from '../modules/warrant/warrant-product/warrant-product';
// import { WarrantProductMappingService } from '../modules/warrant/warrant-product-mapping/warrant-product-mapping.service';


@Component({
  selector: 'app-assigned-mapping',
  templateUrl: './assigned-mapping.component.html',
  styleUrls: ['./assigned-mapping.component.css']
})
export class AssignedMappingComponent implements OnInit {
  relatedTaskCurrency: boolean;
  // productSection: WarrantProductMapping[];
  // product: Product;
  // navItem: any;
  // datatable: any;
  // operation: string;
  
  // warrant: WarrantProductMapping;
  // warrantProd: WarrantProduct = new WarrantProduct();
  // warrantObj:any;
  // ilcId:number;


  constructor(private _inwardCustomerPaymentProductService: InwardCustomerPaymentProductService,
    // private _router: Router, private mappingService: WarrantProductMappingService,
    // private _activatedRoute: ActivatedRoute, private _productService: ProductService,
    //  private chRef: ChangeDetectorRef,private locator:LocationRouter,
     ) {
    //this.locator = new LocationRouter(this._router);
  }

  ngOnInit() {
    this.relatedTaskCurrency = true;

    // this._activatedRoute.params.subscribe(params => {
    //   const decode = JSON.parse(atob(params.navItem));
    //   console.log(">>>>>>>: " + decode);
    //   this.product = decode.product;
    //   this.warrantProd = decode.warrantType;
    //   this.ilcId = decode.warrantId;

    //   console.log("warr",this.warrantProd)
    //   console.log("nav Item",decode)
    //   this.operation = decode.operation;
    //   this._productService.getOne(this.product.id).subscribe(data => {
    //     this.product = data;
    //     console.log("p[roduct data",this.product)
    //   });
    // });


    // this.mappingService.getWarrantProductMappingz(this.product.id, this.warrantProd.id).subscribe(data => {
    //   this.productSection = data;
    //   this.chRef.detectChanges();
    //   const table = $('table');
    //   this.datatable = table.DataTable();
    //   if (this.productSection === undefined) {
    //     this.productSection = [];
    //   }
    // });

    // // this.chRef.detectChanges();
    // // const table = $('#myTable');
    // // this.datatable = table.DataTable({
    // // });

  }

  // sectionOperation(evt) {
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

  // getProduct(id){
  //   let productCode = "";
  //   productCode = this.product.productSubCategory.productCategory.code
  //   switch(productCode){
  //     case'ILC':{

  //     }
  //     break;
  //     case 'ELC':{

  //     }
  //   }

  // }
  // assign(warrant: any) {
  //   console.log(warrant);
  //   this.ngOnInit();
  // }

  // search() {
  //   console.log('searching!!');
  //   this.mappingService.query(this.warrant).subscribe((data => {
  //     this.productSection = data;
  //     console.log(data);
  //     this.chRef.detectChanges();

  //     const table = $('table');
  //     this.datatable = table.DataTable();

  //   }), (err => {
  //     console.log(err);
  //   }));
  // }

}
