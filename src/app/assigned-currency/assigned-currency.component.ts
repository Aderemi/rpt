import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-bs4';
// import { LocationRouter } from '../class/LocationRouter';
// import {Currency } from '../modules/staticdata/currency/currency';;
// import { Product } from '../product/product';
// import { ProductService } from '../product/product.service';
// import { RelatedTaskBarServiceService } from '../related-task-bar/related-task-bar-service.service';
// import { CurrencyService } from '../modules/staticdata/currency/currency.service';
// import { ConfirmationDialogService } from '../services/confirmation-dialog.service';

@Component({
  selector: 'app-assigned-currency',
  templateUrl: './assigned-currency.component.html',
  styleUrls: ['./assigned-currency.component.css']
})
export class AssignedCurrencyComponent implements OnInit {
  // productCurrency :Currency[];
  relatedTaskCurrency : boolean;
  // datatable: any;
  // product : Product;
  // navItem : any;
  // operation : string;

  // availableCurrency :Currency[];
  // productAssignedCurrency :Currency[];
  // productUnassignedCurrency :Currency[];
  // tempCurrency :Currency[];
  


  constructor(
    private _activatedRoute : ActivatedRoute,
    //  private _productService : ProductService, private  locator :LocationRouter,
    // private chRef: ChangeDetectorRef, private refCurrencyService : CurrencyService, private confirmationDialogService : ConfirmationDialogService,
    //  private _observer : RelatedTaskBarServiceService
     ) { 
      // this.availableCurrency = new Array();
      // this.productAssignedCurrency = new Array();
      // this.productUnassignedCurrency = new Array();
  
    }

  ngOnInit() {
    this.relatedTaskCurrency = true;
//     this.tempCurrency = [];

//     this._activatedRoute.params.subscribe(params=>{
//       let decode =  JSON.parse(atob(params.navItem)); 
//       this.product = decode.product;
//       this.operation = decode.operation;
//       console.log(this.product)
//       this._productService.getOne(this.product.id).subscribe(data=>{
//         this.product = data;
//         console.log(this.product)
//           this.productAssignedCurrency =  this.product.currency;        
//          this.getCurrencies();
//           console.log(this.productCurrency)
      
//             this.navItem = {
//               'operation' : this.operation,
//               'product' : this.product
//             }
//           //  this._observer.setProduct(this.navItem);
        

//       });
//      });


//   }





//   //get all the currency
// getCurrencies(){
//   this.refCurrencyService.getCurrencies().subscribe((data=>{
//     this.availableCurrency = data;
    
//    if(this.product.currency == undefined){
//       this.productAssignedCurrency =[];
//    }else{
//     this.productAssignedCurrency =  this.product.currency;
//    }
//    this.currencyDiffernce(this.availableCurrency, this.productAssignedCurrency);
//   }),(err=>{
//   }));
}

//   currencyOperation(evt){
//     evt.preventDefault();
//    switch(evt.path[0].innerText){
//      case 'Add':{
//       this.tempCurrency = [];
//       break;
//      }
//      case 'Modify':{
  
//       break;
       
//      }
//      case 'Cancel':{
//        break;
//      }
//      case 'View':{     
//        break;
//      }
//      default : {
//        console.log(this.product)
//        this.navItem = {
//         'operation' : this.operation,
//         'product' : this.product
//       }
//       console.log(this.navItem);
//       this._productService.setRelatedTaskFlag(true);
//       this.locator.getLocation(this.product.productSubCategory.productCategory.code, this.navItem);
//      }

//    }

//   }

//   assignSelectedCurrency(){
//     console.log("assigned clicked");
//     this.ngOnInit();

//   }

//   operationClose(){
//     this.ngOnInit();
//   }
//   currencyDiffernce(available :Currency[], assigned :Currency[]){
//     this.productUnassignedCurrency.splice(0, this.productUnassignedCurrency.length)
//     for(let i = 0; i < available.length; i++){
//       let checker = false;
//       for(let j = 0; j < assigned.length; j++){
//         if(available[i].id == assigned[j].id){
//           checker = true;
//           break;
//         }
//       }
//       if(!checker){
//       this.productUnassignedCurrency.push(available[i]);
//       }
//     }
//   }
//   saveAssignedCurrencytoDB(){
    
//     //  console.log("this is a function i the child compoment")
//     // this.product.currency.concat(this.tempCurrency)
//     // this.product.currency = this.product.currency.concat(this.tempCurrency) using concat
//     this.product.currency = [...this.product.currency, ...this.tempCurrency]; // using the spread operator
    
//       console.log(this.product);
//       this._productService.update(this.product).subscribe(data=>{
//         // do the emit
        
//         this.productAssignedCurrency =  this.product.currency;
//         let navItem = {
//           'operation' : this.operation,
//           'product' : data.body
//         }
//         this._observer.setProduct(navItem);
//         console.log(data.body);
//         this.ngOnInit();
        
//       });
//   }

//   toggleCheckBox(event, cc){
   
//     event.target.checked ? this.addToAssign(cc) : this.removeFromAssign(cc);
// }
// addToAssign(uc){

//   this.tempCurrency.push(uc);
//  // let ind = this.productUnassignedCurrency.indexOf(uc);
//  // this.productUnassignedCurrency.splice(ind,1);
// }

// removeFromAssign(ac){

// //  this.productUnassignedCurrency.push(ac);
//   let ind = this.tempCurrency.indexOf(ac);
//   this.tempCurrency.splice(ind,1);
// }

// dDialog(cc) {
//   this.confirmationDialogService.confirm('Confirm delete', `Do you really want to delete ${cc.description}?`)
//     .then((confirmed) => {
//       console.log("VVVVVVVVVVVVVVVVVVVVVVVV:____________________________-------------------- ",confirmed);
//       if (confirmed) {
        
//         this.deleteAssignedCurrency(cc);
        
    
//       }
//      // console.log('User confirmed:', confirmed);
//     })
//     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
// }


//  deleteAssignedCurrency(cc){
   
//  let ind = this.product.currency.indexOf(cc);
//  this.product.currency.splice(ind,1);
//       console.log(this.product);
//       this._productService.update(this.product).subscribe(data=>{
//         // do the emit
        
//         this.productAssignedCurrency =  this.product.currency;
//         let navItem = {
//           'operation' : this.operation,
//           'product' : data.body
//         }
//       //  this._observer.setProduct(navItem);
        
//         console.log(data.body);
//         this.ngOnInit();
        
//       });
//  }

}
