import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-bs4';

// import { LocationRouter } from '../class/LocationRouter';
// import { Charge } from '../charge/charge';
// import { Product } from '../product/product';
// import { ProductService } from '../product/product.service';
// import { ChargeType } from '../class/charge-type';
// import { RelatedTaskBarServiceService } from '../related-task-bar/related-task-bar-service.service';
// import { ConfirmationDialogService } from '../services/confirmation-dialog.service';
// import { ChargeTypeService } from '../services/charge-type.service';

@Component({
  selector: 'app-assigned-charge',
  templateUrl: './assigned-charge.component.html',
  styleUrls: ['./assigned-charge.component.css']
})
export class AssignedChargeComponent implements OnInit {

  // productCharge : ChargeType[];
  relatedTaskCharge : boolean;
  // datatable: any;
  // product : Product;
  // navItem : any;
  // operation : string;

  // tempCharge :ChargeType[];
  // availableCharge : ChargeType[];
  // productAssignedCharge : ChargeType[];
  // productUnassignedCharge : ChargeType[];


  constructor(
    // private _activatedRoute : ActivatedRoute, private _productService : ProductService, private  locator :LocationRouter,
    // private _router : Router, private chRef: ChangeDetectorRef, private confirmationDialogService : ConfirmationDialogService,
    // private _observer : RelatedTaskBarServiceService, private refChargeService : ChargeTypeService
    ) {
      // this.availableCharge = new Array();
      // this.productAssignedCharge = new Array();
      // this.productUnassignedCharge = new Array();
     }

  ngOnInit() {
    this.relatedTaskCharge = true;
    // this.tempCharge = [];
    // this._activatedRoute.params.subscribe(params=>{
    //   let decode =  JSON.parse(atob(params.navItem)); 
    //   this.product = decode.product;
    //   this.operation = decode.operation;
    //   console.log(this.product)
    //   this._productService.getOne(this.product.id).subscribe(data=>{
    //     this.product = data;
    //     console.log(this.product)
    
    //     this.productAssignedCharge = this.product.charge;
    //     this.getCharges();
     
         
    //       this.navItem = {
    //         'operation' : this.operation,
    //         'product' : this.product
//           }
//         //  this._observer.setProduct(this.navItem);
    
       
// console.log(this.productCharge)
//       });
//      });
    
 

  }

//   getCharges(){
//     this.refChargeService.getChargeTypes().subscribe((data=>{
//       this.availableCharge = data;
//       console.log("Available charges:");
//       console.log(this.availableCharge);
    

// ;
//      this.currencyDiffernce(this.availableCharge, this.productAssignedCharge);

//     }),(err=>{
//     }));
//   }
//   chargeOperation(evt){
//     evt.preventDefault();
//    switch(evt.path[0].innerText){
//      case 'Add':{

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
//       console.log(this.product)
//       this.navItem = {
//        'operation' : this.operation,
//        'product' : this.product
//      }
 

//      this.locator.getLocation(this.product.productSubCategory.productCategory.code, this.navItem);
//     }

//    }

//   }

//   assignSelectedCharge(){
//     console.log("assigned clicked");
//     this.ngOnInit();
//   }
//   operationClose(){
//  //   this.ngOnInit();
//   }


//   currencyDiffernce(available : ChargeType[], assigned : ChargeType[]){
//     this.productUnassignedCharge.splice(0, this.productUnassignedCharge.length)
//     for(let i = 0; i < available.length; i++){
//       let checker = false;
//       for(let j = 0; j < assigned.length; j++){
//         if(available[i].id == assigned[j].id){
//           checker = true;
//           break;
//         }
//       }
//       if(!checker){
//       this.productUnassignedCharge.push(available[i]);
//       }
//     }
//   }

//   saveAssignedChargetoDB(){
    
//     //  console.log("this is a function i the child compoment")
//     // this.product.currency.concat(this.tempCurrency)
//     // this.product.currency = this.product.currency.concat(this.tempCurrency) using concat
//     this.product.charge = [...this.product.charge, ...this.tempCharge]; // using the spread operator
//     ;
//       console.log(this.product);
//       this._productService.update(this.product).subscribe(data=>{
//         // do the emit
//         ;
//         this.productAssignedCharge =  this.product.charge;
//         let navItem = {
//           'operation' : this.operation,
//           'product' : data.body
//         }
//         this._observer.setProduct(navItem);
//         console.log(data.body);
//      //   this.ngOnInit();
        
//       });
//   }

//   toggleCheckBox(event, cc){
   
//     event.target.checked ? this.addToAssign(cc) : this.removeFromAssign(cc);
// }

// addToAssign(uc){
// ;
//   this.tempCharge.push(uc);
//   console.log("Assigning : ============================>>> ",this.tempCharge)
//  // let ind = this.productUnassignedCurrency.indexOf(uc);
//  // this.productUnassignedCurrency.splice(ind,1);
// }

// removeFromAssign(ac){

// //  this.productUnassignedCurrency.push(ac);
//   let ind = this.tempCharge.indexOf(ac);
//   this.tempCharge.splice(ind,1);
//   console.log("Unssigning : ============XXXXXXXXXXXXXXXXXXXXXXXXXXXx================>>> ",this.tempCharge)
// }

// dDialog(cc) {
  
//   this.confirmationDialogService.confirm('Confirm delete', `Do you really want to delete ${cc.description}?`)
//     .then((confirmed) => {

//       if (confirmed) {
//         this.deleteAssignedCharge(cc);
        
    
//       }
//      // console.log('User confirmed:', confirmed);
//     })
//     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
// }

// deleteAssignedCharge(cc){
  
//   let ind = this.product.charge.indexOf(cc);

//   this.product.charge.splice(ind,1);
//        console.log(this.product);
//        this._productService.update(this.product).subscribe(data=>{
//          // do the emit
         
//          this.productAssignedCharge =  this.product.charge;
//          let navItem = {
//            'operation' : this.operation,
//            'product' : data.body
//          }
//  //        this._observer.setProduct(navItem);
//          console.log(data.body);
//       //   this.ngOnInit();
         
//        });
//   }


}
