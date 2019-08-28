import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DatePipe, DecimalPipe } from '@angular/common';

// import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

// import { ProductSubCategory } from '../class/product-sub-category';

// import { InstrumentRegister } from '../registration/registration';
// import { ProductCategory } from '../product-category/product-category';
// import { Product } from '../product/product';
// import {Currency } from '../modules/staticdata/currency/currency';;
// import { RegistrationService } from '../registration/registration.service';
// import { ProductService } from '../product/product.service';

// import {CurrencyService } from '../modules/staticdata/currency/currency.service';
// import { LocationRouter } from '../class/LocationRouter';

// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { Customer } from '../modules/staticdata/customer/customer';
// import { CustomerService } from '../modules/staticdata/customer/customer.service';
// import { BranchService } from '../modules/staticdata/branch/branch.service';
// import { Branch } from '../modules/staticdata/branch/branch';
// import { Commons } from '../class/commons';
// import { WildcardComponent } from '../wildcard/components/wildcard/wildcard.component';
// this is instrument registration page the page before giant form
// this is instrument registration page
// this is instrument registration page
// this is instrument registration page
// this is instrument registration page
// this is instrument registration page
// this is instrument registration page
// this is instrument registration page
// this is instrument registration page
// this is instrument registration page
@Component({
  selector: 'app-service-registration',
  templateUrl: './service-registration.component.html',
  styleUrls: ['./service-registration.component.css']
})
export class ServiceRegistrationComponent implements OnInit {

  code: String;
//   customers: Customer[];
//   registration: InstrumentRegister = new InstrumentRegister();

//   navItem: any;
//   productCategory: ProductCategory[] = [];
//   productSubCategory: ProductSubCategory[] = [];
//   pc: ProductCategory;
//   customerFlag = false;
//   products: Product[] = [];
//   product: Product = new Product();
//   currencies:Currency[];
//   customerCode: string;
//   customer: Customer;
//   value: any = null;
//   prodSubCatCode:String;
//   subCat:any;
//   formattedAmount:String;
//   cust:String;
//   custom:String;
//   CustomerCode:Customer = new Customer();
//   branches:Branch[] = [];
//   objs : Object[];
//   prodCat:string

//  tempServiceAmount:string;

  constructor(
    // private router: Router, private registrationService: RegistrationService,
    // private datePipe: DatePipe,
    // private decimalPipe:DecimalPipe,
    // private commonService:Commons,
    // private modalService: NgbModal,
    // private _activatedRoute: ActivatedRoute,
    // private productService: ProductService, private _refCurr:CurrencyService,
    // private _customerService: CustomerService, private  locator :LocationRouter,
    // private customerService:CustomerService,
    // private branchService:BranchService
  ) {

    // this.registration.product = new Product();
    // this.registration.product.productSubCategory = new ProductSubCategory();


    // this.CustomerCode = new Customer();
    // this.registration.customer = new Customer();

  }

  displayCode(){

    // console.log("Code",this.registration.product.productSubCategory.code);
    // this.prodSubCatCode = this.registration.product.productSubCategory.code;
  }
  ngOnInit() {
//     this.registration.operativeTemplate = "Operative";
//     console.log(this.registration);
//     this._activatedRoute.params.subscribe(params => {

//       let decode = JSON.parse(atob(params.navItem));

//       this.registration = decode.instrumentRegister;
//       let cat = this.registration.productCategory;
//       this.prodCat = this.registration.productCategory.code
//       //product category was sent in here through the url........

//       const productCat = new Product();

//       productCat.productSubCategory.productCategory = cat;
//       console.log(cat)
//       this.pc = cat;
//       this.displayCode();
//       this.setProductCatCode();
//       this.registration.productCategory = this.pc;
//       // Searching for Products based on the product category..............
//       // this.productService.getFiltered(productCat).subscribe((editorData => {

//       //   console.log(editorData);
//       //   this.products = editorData;

//       //   //this.product = editorData;
//       //   console.log(editorData);
//       // }), err => {
//       //   console.log('Error selecting all products')
//       // });

//       // //Searching for product sub category based on the category

//       // this.registrationService.getFilter(productCat).subscribe((editorData=>{
//       //   this.productSubCategory = editorData;
//       //   console.log(editorData);

//       // }), err=>{
//       //   console.log('Error selecting product Category')
//       // })

//       this.getProductCurrencies();
//       this.getAllBranches();
//       this.getProductCustomers();
//       //this.customerName();
//       if ( this.registration.operativeTemplate == "General Template" || this.registration.operativeTemplate ==null || this.registration.operativeTemplate == "" )
//       {
//           this.customerFlag = false;
//       }else{
//         this.customerFlag = true;
//       }
//     });




//    // this.subCat = this.registration.product.productSubCategory


//   }

//   getAllBranches(){
//     this.branchService.getBranches().subscribe(editorData=>{
//       this.branches = editorData;
//     })
//   }
//   // transformServiceAmt(){
//   //   this.formattedAmount = this.decimalPipe.transform(this.registration.serviceAmount,'1.2');

//   //   this.registration.serviceAmount= this.formattedAmount;

//   // }

//   customerDiv() {
//     if (this.registration.operativeTemplate == undefined ||
//       this.registration.operativeTemplate == "" ||
//       this.registration.operativeTemplate == "General Template") {
//       this.customerFlag = false;
//       this.customer = undefined;
//     } else {
//       this.customer = new Customer();
//       this.customerCode = "";
//       this.customerFlag = true;
//     }
//   }

//   customerName(){
//     //this.registration.customerNumber = this.custom
//     this.registrationService.getCustomerName(this.registration.customer.customerNumber).subscribe(editorData=>{

//       console.log(this.registration.customerNumber);
//       this.CustomerCode = editorData;
//       console.log(editorData);
//       this.registration.customer = editorData;


//     })

//   }
//   setProductCatCode() {
//     if(this.registration.product != null){
//     this.code = this.registration.product.code;
//     }
//   }

//   wildCard(search){
//    console.log("searrch is ",search)
//     let urlParser = this.router.url;
//     urlParser = urlParser.substring(0,urlParser.lastIndexOf('/'));
//     console.log(urlParser);
//     console.log("this is wildcard", this.registration);
//     this.navItem = {
//       "search" : search,
//       "instrumentRegister" : this.registration,
//       "url" :urlParser,
//       "registration" :this.registration,
//       "type":"registration"
//     }

//     this.router.navigate(['wildcard',btoa(JSON.stringify(this.navItem))]);
//   }
//   getProductCurrencies() {
//     this.currencies = this.registration.product.currency;
//     console.log("currencies bef",this.currencies)
//     this._refCurr.getCurrencies().subscribe((editorData => {
//       this.currencies = editorData;
//       console.log("currencies after", editorData)
//     }), (err => {

//     }));
//   }

//   setCustoemrCode() {
//     console.log(this.customer);

//   }

//   getProductCustomers() {
//     this._customerService.getCustomers().subscribe((editorData => {
//       this.customers = editorData;
//     }), (err => {

//     }));
//   }

//   register(){
//     switch(this.registration.operativeTemplate){
//         case "Operative":
//         this.createOperative();
//         break;
//         default :
//         this.createTemplate();

//     }
//   }

//   createTemplate(){
//     ;
//     console.log("THIS CUSTOMER");
//     console.log(this.registration.customer);
//    // this.registration.product.productSubCategory = this.subCat;
//         let cp = this.registration.copySourceInstrument;
//         // check if the copy source instrument is a template or instrument
//         // check if cp n== null
//         if(cp != null){
//         this.registration.copySourceInstrument = (this.registration.copySourceType != "Previous Instrument") ? cp.obj : cp;
//         }
//     this.navItem = {
//       'operation' : "New",
//       'instrumentRegister' : this.registration
//     }
//     this.locator.getInstrumentLocation(this.registration.product.productSubCategory.productCategory.code, this.navItem);
//   }

//   createOperative() {
// // will soon be picked from product configuration

//    this.registration.incrmt = 1
//    this.registration.width = 4
//    this.registration.lastNo = 1
//    this.registration.delim = "-";

//     console.log("THIS CUSTOMER");

//   //  this.registration.product.productSubCategory = this.subCat;
//     console.log(this.registration.copySourceInstrument);

//     let cp = this.registration.copySourceInstrument;
//     this.registration.copySourceInstrument = null;
//     this.registration.serviceAmount = this.tempServiceAmount;
//     this.registrationService.createRegistration(this.registration).subscribe((editorData => {
//       this.registration = editorData.body;
//       ;

//       // check if cp == null;
//       if (cp != null){
//       this.registration.copySourceInstrument = (this.registration.copySourceType != "Previous Instrument") ? cp.obj : cp;
//       }
//       this.registration.operativeTemplate ="Operative";
//           this.navItem = {
//         'operation' : "New",
//         'instrumentRegister' : this.registration
//       }

//       this.locator.getInstrumentLocation(this.registration.product.productSubCategory.productCategory.code, this.navItem);
//     }), err => {

//       console.log('error creating a registration');
//     })
//   }


//   transformServiceAmt() {

//     if (this.registration.serviceAmount == null || this.registration.serviceAmount == "undefined"){
//       this.registration.serviceAmount = ""
//     }
//     else{
//       this.registration.serviceAmount = this.decimalPipe.transform(this.registration.serviceAmount, '1.2');
//     this.tempServiceAmount = this.commonService.formatNumber(this.registration.serviceAmount)
//     }


//   }

//   getLocation(location: string) {
//     console.log(location);

//     switch (location) {
//       case 'ILC': {
//         break;
//       }
//       case 'ICP': {
//         this.navItem = {
//           'operation': "New",
//           'instrumentRegister': this.registration
//         }

//         this.router.navigate(['inwardcustomerpayment', btoa(JSON.stringify(this.navItem))]);

//         break;
//       }
//       case 'OCP': {
//         this.navItem = {
//           'operation': "New",
//           'instrumentRegister': this.registration
//         }

//         this.router.navigate(['outward', btoa(JSON.stringify(this.navItem))]);

//         break;
//       }

//       case 'OBP': {
//         this.navItem = {
//           'operation': "New",
//           'instrumentRegister': this.registration
//         }

//         this.router.navigate(['outwardBankPayment', btoa(JSON.stringify(this.navItem))]);

//         break;
//       }

//       case 'IBP': {
//         this.navItem = {
//           'operation': "New",
//           'instrumentRegister': this.registration
//         }

//         this.router.navigate(['inwardbankpayment', btoa(JSON.stringify(this.navItem))]);

//         break;
//       }


//     }

//   }



//   equals(o1, o2) {
//     if(o1 != null && o2 != null){
//         return  o1.code == o2.code ? true : false;
//     }
//     return false;
//   }


//   cancel() {
//     this.router.navigate(['register']);
//   }


//   copySource(){
//  console.log(this.registration.copySourceType);
// // get template\


//     switch(this.registration.copySourceType){
//       case "Customer Template":

//       let cusTemp =  {
//         customer : this.registration.customer,
//         className : this.registration.product.productSubCategory.productCategory.code
//       }
//       this.registrationService.customerTemplate(cusTemp).subscribe(editorData=>{
//       this.objs = editorData;
//       });
//       break;
//       case "Previous Instrument":
//       let reg = new InstrumentRegister();
//       reg.product = new Product();
//       reg.product.productSubCategory.productCategory = this.registration.productCategory;

//       //reg.productCategory = this.registration.productCategory;
//       // filter out only instrument in this category this returns array of Instrument register
//       reg.customer = this.customer;

//       reg.effectiveDate = null;
//       this.registrationService.query(reg).subscribe(editorData=>{
//         this.objs = editorData;

//         console.log(this.objs);
//         });


//       break;
//       case "General Template":
//       ;
//      let genTemp =  {
//       className : this.registration.product.productSubCategory.productCategory.code
//      }

//       this.registrationService.generalTemplate(genTemp).subscribe(editorData=>{
//         this.objs = editorData;
//         });
//       break;
//       default :
//       this.objs = [];

//     }
//   }


//   closeResult : string;

//   openProduct(productTemplate){

//     this.modalService.open(productTemplate, { size: 'lg' }).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }

//   openCustomer(customerTemplate){
//       console.log("openeing");
//     this.modalService.open(customerTemplate, { size: 'lg' }).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }


//   selectedProduct = new Product();
//   setSelectedProduct(p){
//     this.selectedProduct = p;

//     this.registration.product = p;
//     this.currencies = p.currency;
//     console.log("product currencies",this.currencies)
//   }


//   selectedCustomer = new Customer;
//   setSelectedCustomer(cu){
//     this.selectedCustomer = cu;
//     this.registration.customer = cu;
//   }



//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return  `with: ${reason}`;
//     }
//   }


//   open(event) {
//     console.log("event", event)
//     if (event == "product") {

//       this.productService.getFilteredProd(this.prodCat).subscribe(editorData => {
//         this.products = editorData;
//         const modalRef = this.modalService.open(WildcardComponent, { size: 'lg' });
//         modalRef.componentInstance.prods = this.products
//         modalRef.componentInstance.title = event
//         modalRef.componentInstance.emitService.subscribe(emittedValue => {
//           console.log("emit",emittedValue)
//           this.registration.product = emittedValue
//           this.currencies = this.registration.product.currency
//           console.log("prod currencies",this.currencies)
//           // this.fxRegister.product=emittedValue;
//         })
//       });

//     }
//     else if (event == "customer") {
//       this.customerService.getCustomers().subscribe(editorData => {
//         this.customers = editorData;
//         const modalRef = this.modalService.open(WildcardComponent, { size: 'lg' });
//         modalRef.componentInstance.custommers = this.customers
//         modalRef.componentInstance.title = event
//         modalRef.componentInstance.emitService.subscribe(emittedValue => {
//           this.registration.customer = emittedValue
//           // this.fxRegister.customer = this.emit;

//         })
//       }, (err => {
//         console.log("Cannot find customer");
//       }))
//     }

  }

}
