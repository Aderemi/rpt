import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ForexRegistration } from './forex-registration';
// import { WildcardComponent } from '../../../wildcard/components/wildcard/wildcard.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import { ProductService } from '../../../product/product.service';
// import { Product } from '../../../product/product';

// import { LocationRouter } from '../../../class/LocationRouter';
// import { ForexRegistrationService } from './forex-registration.service';
// import { ProductSubCategory } from '../../../class/product-sub-category';
// import { ForexRequestService } from '../forex-request/forex-request.service';
// import { ForexRequest } from '../forex-request/forex-request';
// import { DecimalPipe,Location } from '@angular/common';
// import { Commons } from '../../../class/commons';
// import { BranchService } from '../../staticdata/branch/branch.service';
// import { CustomerService } from '../../staticdata/customer/customer.service';
// import { Branch } from '../../staticdata/branch/branch';
// import { Customer } from '../../staticdata/customer/customer';


@Component({
  selector: 'app-forex-registration',
  templateUrl: './forex-registration.component.html',
  styleUrls: ['./forex-registration.component.css']
})
export class ForexRegistrationComponent implements OnInit {

  // fxRegister: ForexRegistration = new ForexRegistration();
  // fxRequest: ForexRequest = new ForexRequest()
  view: number;
  // products: Product[] = []
  // branches: Branch[] = []
  // customers: Customer[] = []
  // navItem: any;
  // prodCode: String;
  // locatorUrl: LocationRouter;
  // prodDescription: String;
  // prodCat: String;
  // prodSubCatCode: any
  // productCode: any
  // product: any
  // customerCode: any
  // customer: any
  // cust;
  // emit
  // productSubCategory: ProductSubCategory[] = [];
  // forexRequests: ForexRequest[] = []
  // selectedFxRequests: any;
  // tempRequestAmt: any
  // fxReg
  // fxRegistrations:ForexRegistration[]=[]
  constructor(
    // private router: Router
    // , private modalService: NgbModal,
    // private branchService: BranchService,
    // private productService: ProductService,
    // private customerService: CustomerService,
    // private fxRequestService: ForexRequestService,
    // private decimalPipe: DecimalPipe,
    // private commonService: Commons,
    // private location:Location,
    
    // private fxREgisterService: ForexRegistrationService
    ) {
    this.view = 0;
    // this.prodCat = 'FXS'
    // this.fxRegister.status = 'Inactive'
  }

  ngOnInit() {
    // this.getBranches();
    // this.getForexRequests();
    // this.fxREgisterService.getFilter(this.prodCat).subscribe((data => {
    //   this.productSubCategory = data;

    // }), err => {
    //   console.log('Error selecting product Category')
    // })


  }


  // open(event) {
  //   console.log("event", event)
  //   if (event == "product") {

  //     this.productService.getFilteredProd(this.prodCat).subscribe(data => {
  //       this.products = data;
  //       const modalRef = this.modalService.open(WildcardComponent, { size: 'lg' });
  //       modalRef.componentInstance.prods = this.products
  //       modalRef.componentInstance.title = event
  //       modalRef.componentInstance.emitService.subscribe(emittedValue => {
  //         console.log("emit",emittedValue)
  //         this.fxReg = emittedValue
  //         this.fxRegister.product=emittedValue;
  //       })
  //     });

  //   }
  //   else if (event == "customer") {
  //     this.customerService.getCustomers().subscribe(data => {
  //       this.customers = data;
  //       const modalRef = this.modalService.open(WildcardComponent, { size: 'lg' });
  //       modalRef.componentInstance.custommers = this.customers
  //       modalRef.componentInstance.title = event
  //       modalRef.componentInstance.emitService.subscribe(emittedValue => {
  //         this.emit = emittedValue
  //         this.fxRegister.customer = this.emit;
        
  //       })
  //     }, (err => {
  //       console.log("Cannot find customer");
  //     }))
  //   }

  // }

  operation(event) {

  //   switch (event.path[0].innerText) {
  //     case 'Add': {
  //       console.log("Enter here")
        this.view = 1;

  //     }
  //     case 'Modify': {

  //     }
  //   }

  }

  // set(select: any) {
  //   this.selectedFxRequests = select
  //   console.log("select Request", this.selectedFxRequests)
  // }

  // transformRequestAmount() {

  //   this.fxRequest.requestAmount = this.decimalPipe.transform(this.fxRequest.requestAmount, '1.2');
  //   this.tempRequestAmt = this.commonService.formatNumber(this.fxRequest.requestAmount)

  // }
  // registerForex() {

  //   this.fxREgisterService.createForexRegistration(this.fxRegister).subscribe(data => {
  //     console.log("data", data)
  //     this.fxRegister = data
  //     console.log("fxReg", this.fxRegister)
  //     this.navItem = {
  //       "operation": "new",
  //       "forexRegister": this.fxRegister

  //     }
  //     this.router.navigate(['funding/forexRequest', btoa(JSON.stringify(this.navItem))])

  //   })

  // }

  // close(){
  //   this.location.back()
  // }
  // getRegister(){
  //   this.fxREgisterService.getFxRequests(this.fxRequest).subscribe(data=>{
  //     this.forexRequests = data
  //     console.log("heh",this.forexRequests)
  //   })
  // }
  cancelfx(){
    // this.location.back();
    this.view = 0
  }
  
  // getBranches() {

  //   this.branchService.getBranches().subscribe(data => {
  //     this.branches = data;
  //   })
  // }

  // getForexRequests() {
  //   this.fxRequestService.getForexRequests().subscribe(data => {
  //     this.forexRequests = data
  //   })
  // }


  // equals(o1, o2) {
  //   if (o1 != null && o2 != null) {
      
  //     return o1.code == o2.code ? true : false;
  //   }
  //   return false;
  // }

}
