import { Component, OnInit, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


// import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';


import * as $ from 'jquery';
// import 'datatables.net';

// import { SessionStorageService, LocalStorageService } from 'angular-web-storage';
// import { ProductCategory } from '../product-category/product-category';
import { InstrumentRegister } from './registration';
import { RegistrationService } from './registration.service';
// import { ProductCategoryService } from '../product-category/product-category.service';
// import { LocationRouter } from '../class/LocationRouter';
// import { Product } from '../product/product';
// import { ServerMessagePopUp } from '../class/server-message-pop-up';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  key= 'prod_cat';
  genEvent = true;
  elcEvent= false;
  ilcEvent = false;
  // productCategoryCode:ProductCategory;
  instrumentRegister: InstrumentRegister = new InstrumentRegister();
  // productCategory: ProductCategory[];
  // productCategorys: ProductCategory[] = [];
  registrations: InstrumentRegister[];
  error: InstrumentRegister;
  erx = "";
  trigger: number;
  alertMessage: string;
  alertType: string;
  codeError = "";
  swiftBicError = "";
  nameError = "";
  localCurrencyError = "";
  baseCurrencyError = "";
  addressError = "";
  countryError = "";
  timeZoneError = "";
  customerFlag = false;
  dataTable;
  view: number;
  navItem : Object;
  modifyFlag : boolean;
  payFlag : boolean;
  adjustFlag : boolean;
  amendFlag : boolean;
  documentFlag : boolean;
  acceptFlag :boolean;
  proceedFlag : boolean;
  repatriateFlag : boolean;
  cancelFlag : boolean;
  activateFlag : boolean;
  detailsFlag : boolean;
  summaryFlag : boolean;
  repaymentFlag : boolean;
  drawdownFlag : boolean;
  search:boolean = true;


  constructor(private chRef: ChangeDetectorRef, 
    // private smp: ServerMessagePopUp, 
    // private _registrationService: RegistrationService, private _router: Router, 
    // private confirmationDialogService: ConfirmationDialogService,
    // private  locator :LocationRouter, private rnd : Renderer2,
    
    // private productCategoryService: ProductCategoryService, private session:SessionStorageService
    ) {
    
      this.navItem = new Object();
   
      // this.instrumentRegister =  new InstrumentRegister();
      // this.instrumentRegister.product = new Product();

      this.modifyFlag = false;
      this.payFlag = false;
      this.adjustFlag  =false;
      this.amendFlag =false ;
      this.documentFlag = false;
      this.acceptFlag = false;
      this.proceedFlag = false;
      this.repatriateFlag = false; 
      this.cancelFlag = false;
      this.activateFlag =false;
      this.detailsFlag = false;
      this.summaryFlag = false;
      this.repaymentFlag = false;
      this.drawdownFlag = false;
     }

  ngOnInit() {
    // this.getProductCategories();
    // this.view = this._registrationService.getView();
    // this.instrumentRegister = this._registrationService.getter();
    // this.trigger = this._registrationService.getTrigger();
    // console.log("Trigger is set to " + this.trigger);
    // this._registrationService.findAllRegistrations().subscribe(data=>{
    //   this.registrations = data;
    //   this.chRef.detectChanges();

    //   const table = $('#myTable');
    //   this.dataTable = table.DataTable()

    // });
  
  }


// selectedInstrumentRegister : InstrumentRegister;

//   setSelectedProduct(instrumentRegister){
    
    
//     this.selectedInstrumentRegister  = instrumentRegister;
// console.log(this.instrumentRegister.product.productSubCategory.description);
//     console.log("the log is", this.selectedInstrumentRegister.product.productSubCategory.code);
//     if(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code=="ELC"){
//       console.log("the log is", this.selectedInstrumentRegister.product.productSubCategory.code)
//       this.modifyFlag = true;
//       this.payFlag = true;
//       this.adjustFlag  =true;
//       this.amendFlag =true ;
//       this.documentFlag = false;
//       this.acceptFlag = true;
//       this.proceedFlag = true;
//       this.repatriateFlag = true; 
//       this.cancelFlag = true;
//       this.activateFlag =true;
//       this.detailsFlag = false;
//       this.summaryFlag = false;
//       this.repaymentFlag = false;
//       this.drawdownFlag = false;
//     }

//    else if(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code=="ILC"){
//       console.log("the log is", this.selectedInstrumentRegister.product.productSubCategory.code)
//       this.modifyFlag = false;
//       this.payFlag = true;
//       this.adjustFlag  =true;
//       this.amendFlag =true ;
//       this.documentFlag = true;
//       this.acceptFlag = false;
//       this.proceedFlag = false;
//       this.repatriateFlag = false; 
//       this.cancelFlag = true;
//       this.activateFlag =true;
//       this.detailsFlag = false;
//       this.summaryFlag = false;
//       this.repaymentFlag = false;
//       this.drawdownFlag = false;
//     }
//     else if(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code=="ICOP"){
//       console.log("the log is", this.selectedInstrumentRegister.product.productSubCategory.code)
//       this.modifyFlag = false;
//       this.payFlag = true;
//       this.adjustFlag  =true;
//       this.amendFlag =true ;
//       this.documentFlag = true;
//       this.acceptFlag = true;
//       this.proceedFlag = false;
//       this.repatriateFlag = false; 
//       this.cancelFlag = true;
//       this.activateFlag =true;
     
//       this.detailsFlag = true;
//       this.summaryFlag = true;
//       this.repaymentFlag = false;
//       this.drawdownFlag = false;
//     }

//     else if(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code=="OCOP"){
//       console.log("the log is", this.selectedInstrumentRegister.product.productSubCategory.code)
//       this.modifyFlag = false;
//       this.payFlag = true;
//       this.adjustFlag  =true;
//       this.amendFlag =true ;
//       this.documentFlag = true;
//       this.acceptFlag = true;
//       this.proceedFlag = true;
//       this.repatriateFlag = true; 
//       this.cancelFlag = true;
//       this.activateFlag =true;
//       this.detailsFlag = true;
//       this.summaryFlag = true;
//       this.repaymentFlag = false;
//       this.drawdownFlag = false;
//     }
//     else if(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code=="ICP"){
//       console.log("the log is", this.selectedInstrumentRegister.product.productSubCategory.code)
//       this.modifyFlag = false;
//       this.payFlag = false;
//       this.adjustFlag  =false;
//       this.amendFlag =false;
//       this.documentFlag = false;
//       this.acceptFlag = false;
//       this.proceedFlag = false;
//       this.repatriateFlag = false; 
//       this.cancelFlag = true;
//       this.activateFlag =false;
//       this.detailsFlag = false;
//       this.summaryFlag = false;
//       this.repaymentFlag = false;
//       this.drawdownFlag = false;
//     }
//     else if(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code=="BFP"){
//       console.log("the log is", this.selectedInstrumentRegister.product.productSubCategory.code)
//       this.modifyFlag = false;
//       this.payFlag = false;
//       this.adjustFlag  =false;
//       this.amendFlag =true;
//       this.documentFlag = false;
//       this.acceptFlag = false;
//       this.proceedFlag = false;
//       this.repatriateFlag = false; 
//       this.cancelFlag = true;
//       this.activateFlag =false;
//       this.detailsFlag = false;
//       this.summaryFlag = false;
//       this.repaymentFlag = true;
//       this.drawdownFlag = true;
//     }




//   }
  
//   getProductCategories() {
//     this.productCategoryService.getAll().subscribe((data) => {
//       console.log(data);
//       this.productCategorys = data;
//     });
//   }


//   customerDiv() {
//     if (this.instrumentRegister.operativeTemplate == undefined || this.instrumentRegister.operativeTemplate == "" || this.instrumentRegister.operativeTemplate == "General Template") {
//       this.customerFlag = false;
//     } else {
//       this.customerFlag = true;
//     }
//   }
// i

//   getInstruments(){
//     console.log("get here",this.instrumentRegister.reference);
//     this._registrationService.query(this.instrumentRegister).subscribe(data=>{
//       console.log(this.instrumentRegister)
//       this.registrations = data;

//       console.log("dfgh",this.registrations)
//     })
//   }
//   processForm() {

    
//   }

//   nextProduct(pc) {
//     this.productCategoryCode = this.instrumentRegister.productCategory;
//     let registration = new InstrumentRegister();
//     registration.productCategory = pc;
//     this.navItem={
//       "instrumentRegister": registration 
//     }
//     this._router.navigate(['registration', btoa(JSON.stringify(this.navItem))])
//   }


//   operation(event) {
//     console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++&&&&&&&&&&&&&&&&&&&&&&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",event.path[0].innerText);
// ;
//     switch (event.path[0].innerText) {
//       case "Add": {

//         // this.trigger = 1;
//         this.view = 1;

//         break;
//       }

//       case "Cancellation":
  
//         {
          
//           this.navItem = {
//             'operation' : "Cancel",
//             'instrumentRegister' : this.selectedInstrumentRegister
//           }
//         this.locator.getCancellationLocation(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
//           break;  
//         }
//       case "Modify":
//         {
      
//         }
//       case "Next":
//         { 
    
//         }
//         case "Amend":
//         { 
//           this.navItem = {
//             'operation' : "Amend",
//             'instrumentRegister' : this.selectedInstrumentRegister
//           }
//         this.locator.getAmendmendmentLocation(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
//         break;
//         }
//         case "Adjustment":
//         { 
//           this.navItem = {
//             'operation' : "Adjust",
//             'instrumentRegister' : this.selectedInstrumentRegister
//           }
//         this.locator.getAdjustmentLocation(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
//         break;
//         }
//         case "Payment":
//         { 
//           this.navItem = {
//             'operation' : "Pay",
//             'instrumentRegister' : this.selectedInstrumentRegister
//           }
//         this.locator.getPaymentLocation(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
//         break;
//         }

//         case "Proceeds":
//         { 
//           this.navItem = {
//             'operation' : "Pay",
//             'instrumentRegister' : this.selectedInstrumentRegister
//           }
//         this.locator.getAssignmentOfProceedsLocation(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
//         break;
//         }

//         case "Repatriation":
//         { 
//           this.navItem = {
//             'operation' : "Repatriation", 
//             'instrumentRegister' : this.selectedInstrumentRegister
//           }
//         this.locator.getRepatriationOfProceedsLocation(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
//         break;
//         }
//       case "Activate":
//         {
  

//         }
//         case "Doc. Delivery":
//         { 
//           this.navItem = {
//             'operation' : "Document",
//             'instrumentRegister' : this.selectedInstrumentRegister
//           }
//         this.locator.getDocumentDeliveryLocation(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
//         break;
//         }

//  case "Adjustment":
//         { 
//           this.navItem = {
//             'operation' : "Adjust",
//             'instrumentRegister' : this.selectedInstrumentRegister
//           }
//         this.locator.getAdjustmentLocation(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
//         break;
//         }
//    case "Amendment":
//         { 
//           this.navItem = {
//             'operation' : "Amend",
//             'instrumentRegister' : this.selectedInstrumentRegister
//           }
//         this.locator.getAmendmentLocation(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
//         break;
//         }
//         case "Acceptance":
//         { 
//           this.navItem = {
//             'operation' : "Accept",
//             'instrumentRegister' : this.selectedInstrumentRegister
//           }
//         this.locator.getAcceptanceLocation(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
//         break;
//         }
//         case "Repayment":
//         { 
//           this.navItem = {
//             'operation' : "Repay",
//             'instrumentRegister' : this.selectedInstrumentRegister
//           }
//         //this.locator.getRepaymentLocation(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
//         break;
//         }
//         case "View":
//         { 
//           this.navItem = {
//             'operation' : "View",
//             'instrumentRegister' : this.selectedInstrumentRegister
//           }
//         this.locator.getViewLocation(this.selectedInstrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
//         break;
//         }

//     }// end of switch
//   }
  
//   createRegistration() {
//     if (this.instrumentRegister.id === undefined) {
//         this.instrumentRegister.status = "Inactive";
//       this._registrationService.createRegistration(this.instrumentRegister).subscribe((registration => {

//         if (registration) {

//           this._registrationService.setTrigger(0);
//         }
//         this._registrationService.setter(new InstrumentRegister());
//         this.ngOnInit();
//         console.log(JSON.stringify(registration) + " response from server");
//         if (registration.status == 200) {
//           this.smp.popUpAlertSuccess();
//         } else {

//         }

//       }),
//         (err => {
//           console.log("Error are as follows");
//           this.erx = "";
//           this.erx += "<div class='pop-upx-div'>";
//           // console.log(err.prototype);
//           for (let i in err.error) {
//             this.erx += "<li class='pop-up'><span class='fa fa-close' style='color : red;'></span> "
//               + err.error[i] +
//               "</li>";
//           }

//           this.erx += "</div>";

//           this.smp.popUpAlertError(this.erx);
//         })
//       )
//     }
//     else {
//       this._registrationService.updateRegistration(this.instrumentRegister).subscribe((registration => {

//         this._registrationService.setTrigger(0);
//         this.ngOnInit();

//       }), err => {
//         console.log(err);
//       });
//     }
//   }


//   public openConfirmationDialog(registration) {
//     this.confirmationDialogService.confirm('Confirm delete', 'Do you really want to delete this registration?')
//       .then((confirmed) => {
//         console.log('User confirmed:' + confirmed);
//         if (confirmed) {
//           console.log("true here");
//           this.deleteRegistration(registration);

//         } else {
//           console.log("here false");
//         }

//       })
//       .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
//   }

//   deleteRegistration(registration) {
//     console.log(registration);
//     this._registrationService.deleteRegistration(registration.id).subscribe((registration) => {
//       this._registrationService.setTrigger(0);
//       this.ngOnInit();
//     }, err => {
//       console.log(err);
//     })

//   }




//   editRegistration(registration) {
//     this._registrationService.setter(registration);
//     this._registrationService.setTrigger(1);
//     this.ngOnInit();

//   }


//   goToForm() {
//     console.log("Create form clicked");
//     this._registrationService.setTrigger(1);
//     this._registrationService.setter(new InstrumentRegister());
//     this.ngOnInit();
//   }


//   eventsButtonEnabler(){
    
  
//   }

//   showOthers(advanceSearch : HTMLElement){
//     this.search = false;    
//     this.rnd.removeClass(advanceSearch, 'collapse');
//     this.rnd.addClass(advanceSearch, 'collapsing')
//     // this.rnd.setStyle(advanceSearch, 'height', '172px')     
//     setTimeout(()=>{
//       this.rnd.removeClass(advanceSearch, 'collapsing')
//       this.rnd.addClass(advanceSearch, 'collapse');
//       this.rnd.addClass(advanceSearch, 'show');
      
//       this.rnd.removeStyle(advanceSearch, 'height')
//     },500)

//     setTimeout(() => {
//       this.rnd.setStyle(advanceSearch, 'height', '172px') 
//     },200)
  
//   }


//   showSearch(advanceSearch: HTMLElement){
//     this.search = true;
//     this.rnd.removeClass(advanceSearch, 'collapse');
//     this.rnd.removeClass(advanceSearch, 'show');
//     this.rnd.addClass(advanceSearch, 'collapsing')
//     setTimeout(()=>{
//       this.rnd.removeClass(advanceSearch, 'collapsing')
//       this.rnd.addClass(advanceSearch, 'collapse')
//     }, 500)
//   }
 
}