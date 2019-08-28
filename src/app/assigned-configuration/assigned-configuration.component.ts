import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-bs4';
// import { ConfigRef } from '../class/config-ref';
// import { LocationRouter } from '../class/LocationRouter';
// import { Product } from '../product/product';
// import { InwardCustomerPaymentProductService } from '../inward-customer-payment-product/inward-customer-payment-product.service';
// import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-assigned-configuration',
  templateUrl: './assigned-configuration.component.html',
  styleUrls: ['./assigned-configuration.component.css']
})
export class AssignedConfigurationComponent implements OnInit {

  // configRef : ConfigRef[];
  relatedTaskConfiguration : boolean;
  // datatable: any;
  // product : Product;
  // navItem : any;
  // operation : string;

  constructor(
    // private _inwardCustomerPaymentProductService : InwardCustomerPaymentProductService,
    // private _activatedRoute : ActivatedRoute, private _productService : ProductService,
    // private _router : Router, private locator:LocationRouter,
    //  private chRef: ChangeDetectorRef
     ) {
       //this.locator = new LocationRouter(this._router)
     }

  ngOnInit() {
    this.relatedTaskConfiguration = true;
    // this._activatedRoute.params.subscribe(params=>{
    //   let decode =  JSON.parse(atob(params.navItem));
    //   this.product = decode.product;
    //   this.operation = decode.operation;
    //   console.log(this.product)
    //   this._productService.getOne(this.product.id).subscribe(editorData=>{
    //     this.product = editorData;
    //     console.log(this.product)
    //     this.configRef = this.product.configRef;
    //     if(this.configRef == undefined){
    //       this.configRef = [];
    //     }

    //     console.log(this.configRef)
    //   });
    //  });




    //      console.log(this.configRef)

  }


  // configurationOperation(evt){
  //   evt.preventDefault();
  //  switch(evt.path[0].innerText){
  //    case 'Add':{
  //      this.relatedTaskConfiguration = false;
  //     break;
  //    }
  //    case 'Modify':{

  //     break;

  //    }
  //    case 'Cancel':{




  //      break;
  //    }
  //    case 'View':{




  //      break;
  //    }
  //    default : {
  //     console.log(this.product)
  //     this.navItem = {
  //      'operation' : this.operation,
  //      'product' : this.product
  //    }
  //    console.log(this.navItem);
  //    this._productService.setRelatedTaskFlag(true);
  //    this.locator.getLocation(this.product.productSubCategory.productCategory.code, this.navItem);
  //   }

  //  }

  // }



  // operationClose(){
  //   this.ngOnInit();
  // }
  // assignSelectedConfiguration(){
  //   console.log("assigned clicked");
  //   this.ngOnInit();
  // }
}
