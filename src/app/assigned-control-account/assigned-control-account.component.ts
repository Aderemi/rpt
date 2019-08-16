import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';


import * as $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-bs4';
// import { CtrlAccRef } from '../class/ctrl-acc-ref';
// import { LocationRouter } from '../class/LocationRouter';
// import { ProductService } from '../product/product.service';
// import { Product } from '../product/product';
// import { ControlAccount } from '../control-account/class/control-account';
// import { CtrlAccRefService } from '../services/ctrl-acc-ref.service';
// import { CtrlAcctRef } from '../ctrl-acct-ref/class/ctrl-acct-ref';
// import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ControlAccountService } from '../control-account/service/control-account.service';


@Component({
  selector: 'app-assigned-control-account',
  templateUrl: './assigned-control-account.component.html',
  styleUrls: ['./assigned-control-account.component.css']
})
export class AssignedControlAccountComponent implements OnInit {

  // ctrlAccRefs : CtrlAccRef[];
  // controlAccounts : ControlAccount[];
  relatedTaskControlAccount : boolean;
  // datatable: any;
  // product : Product;
  // navItem : any;
  // operation : string;



  constructor(
    // private _activatedRoute : ActivatedRoute, private _productService : ProductService, 
    // private _router : Router, private chRef: ChangeDetectorRef,
    // private modalService: NgbModal, private  locator :LocationRouter,
    // private _ctrlActRef : CtrlAccRefService, private _cAService : ControlAccountService
    ) { 
    
    }

  ngOnInit() {
    this.relatedTaskControlAccount = true;
//     this._activatedRoute.params.subscribe(params=>{
//       let decode =  JSON.parse(atob(params.navItem)); 
//       this.product = decode.product;
//       this.operation = decode.operation;
//       console.log(this.product)
//       this._productService.getOne(this.product.id).subscribe(data=>{
//         this.product = data;
//         console.log(this.product)
//         ;
//         this.controlAccounts = this.product.controlAccounts;
//         if(this.controlAccounts == undefined){
//           this.controlAccounts = [];
//         }

// /// fetch the control accts associated to the a product category here....
// let ax = new CtrlAcctRef();

// ax.prodCatCd = this.product.productSubCategory.productCategory.code;
// this.getCtrlAcctRef(ax); 
//       });
//      });

  }



//   getCtrlAcctRef(ctrlActRef){
//     this._ctrlActRef.getFilter(ctrlActRef).subscribe(data=>{
//       this.ctrlAccRefs = data
  
//       console.log(this.ctrlAccRefs);
// ////  run a loop, check if each ctraccref is in control accouunt.... the idea, if not create, if it is continue.
//       for(let i = 0; i < this.ctrlAccRefs.length; i++){
//         let found = false;
//         for(let j = 0; j < this.controlAccounts.length; j++ ){
            
//           if(this.ctrlAccRefs[i].id === this.controlAccounts[j].ctrlAcctRef.id){
//             found = true;
//             break;
            
//           }
//         }
//         if(!found){
//           let v = new ControlAccount();
//           v.ctrlAcctRef = this.ctrlAccRefs[i];
//           v.id = undefined;
//           v.placeHolder = "";
         
//           this.controlAccounts.push(v);
//         }
//       }
    
//       console.log(this.controlAccounts);
   
//     });
//   }
 
//   controlAccountOperation(evt){
//     evt.preventDefault();

//    switch(evt.path[0].innerText){
//      case 'Add':{
//        this.relatedTaskControlAccount = false;
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
//        this.locator.getLocation(this.product.productSubCategory.productCategory.code, this.navItem);
//     }

//    }

//   }

//   operationClose(){
//     this.ngOnInit();
//   }

//   assignSelectedControlAccount(){
//     console.log("assigned clicked");
//     this.ngOnInit();
//   }
//   selCha : ControlAccount;
//   setSelected(cha){
//     this.selCha = cha;
//   }
//   onSave(){
//     this.selCha.effectiveDate =  this.prev.effectiveDate
//     this.selCha.id = this.prev.id;
//     this.selCha.ctrlAcctRef = this.prev.ctrlAcctRef;
//     this.selCha.placeHolder = this.prev.placeHolder;
//     this.selCha.status = this.prev.status;
//     console.clear();
//   //  this.product.controlAccounts = this.controlAccounts;
//     console.log(this.product);
//     let v = {
//       "cca" : this.selCha,
//       "pid" : this.product.id
//     }
//     ;
// this._cAService.update(v).subscribe();
//   }
//   prev : ControlAccount = new ControlAccount();

//   modifyCAcount(cha , modifyControlAccount){
//     // save the previous value in prev
//     // this.selCha = cha;
//     this.prev.effectiveDate = cha.effectiveDate;
//     this.prev.id = cha.id;
//     this.prev.ctrlAcctRef = cha.ctrlAcctRef;
//     this.prev.placeHolder = cha.placeHolder;
//     this.prev.status = cha.status;

//          this.openModifier(modifyControlAccount);
//    }


 
   
//    closeResult : string;
   
//    openModifier(modifyControlAccount){
   
//      this.modalService.open(modifyControlAccount, { size: 'lg' }).result
//      .then((result) => {
       
//        this.onSave();
//        this.closeResult = `Closed with: ${result}`;
       
//      }, (reason) => {
      
//        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//      });
//    }
   
//   private getDismissReason(reason: any): string {
 
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     }
//      else if(reason === "Cross click") {
//      console.log("Cancel clicked");
     
     
//       return  `with: ${reason}`;
//     }
//      else {
//       return  `with: ${reason}`;
//     }
//   }
}