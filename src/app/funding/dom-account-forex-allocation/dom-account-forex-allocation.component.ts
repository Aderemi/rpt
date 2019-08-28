import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Product } from 'src/app/product/product';
// import { ForexRequest } from '../forex-request/forex-request';
// import { ForexRequestService } from '../forex-request/forex-request.service';
// import { ProductService } from 'src/app/product/product.service';

// import { WildcardComponent } from 'src/app/wildcard/components/wildcard/wildcard.component';
// import { DomAccountForexAllocationService } from './dom-account-forex-allocation.service';
// import { DomAccountForexAllocation } from './dom-account-forex-allocation';
// import { Customer } from '../../staticdata/customer/customer';
// import { BranchService } from '../../staticdata/branch/branch.service';
// import { CustomerService } from '../../staticdata/customer/customer.service';
// import { CurrencyService } from '../../staticdata/currency/currency.service';


@Component({
  selector: 'app-dom-account-forex-allocation',
  templateUrl: './dom-account-forex-allocation.component.html',
  styleUrls: ['./dom-account-forex-allocation.component.css']
})
export class DomAccountForexAllocationComponent implements OnInit {

  // domAcctFxAllocation:DomAccountForexAllocation = new DomAccountForexAllocation()
  // customer: any
  // prodCat: String;
  // products: Product[] = []
  // customers: Customer[] = []
  // referenceNumber:any;
  // forexRequests:ForexRequest[] = []
  // requestAmtCurr:any;

  constructor(
    // private domAcctFxAllocationService: DomAccountForexAllocationService,
     private router: Router,
    private decimalPipe: DecimalPipe,
    //  private modalService: NgbModal,
    //  private forexRequestService:ForexRequestService,
    // private branchService:BranchService,
    // private productService: ProductService,
    // private customerService: CustomerService,
    // private currencyService: CurrencyService
    ) {
      // this.prodCat = 'FXS'

     }

  ngOnInit() {
    // this.domAcctFxAllocationService.getReferenceNumber().subscribe(data=>{
    //   console.log(" editorData ",editorData)
    //   this.referenceNumber = data.ref;
    //   this.domAcctFxAllocation.referenceNum = this.referenceNumber;
    //   console.log("ref",this.referenceNumber)
    // })
  }

  // open(event) {
  //   console.log("event", event)
  //   if (event == "Forex Request") {
  //     this.forexRequestService.getForexRequests().subscribe(data=>{
  //       this.forexRequests = data;
  //       const modalRef = this.modalService.open(WildcardComponent, { size: 'lg' });
  //       modalRef.componentInstance.forexRequests = this.forexRequests
  //       modalRef.componentInstance.title = event
  //       modalRef.componentInstance.emitService.subscribe(emittedValue => {
  //         this.domAcctFxAllocation.fxRequestRef =emittedValue.referenceNum
  //         this.domAcctFxAllocation.product = emittedValue
  //         this.domAcctFxAllocation.fundingAccount.accountNumber = emittedValue.fundingAcctNum.accountNumber
  //         this.domAcctFxAllocation.fundingAccount.accountName = emittedValue.fundingAcctNum.accountName
  //         this.domAcctFxAllocation.requestAmtCurr = emittedValue.requestAmountCurr.code
  //         this.domAcctFxAllocation.requestAmt = emittedValue.requestAmount
  //         this.domAcctFxAllocation.homeBranch = emittedValue.homeBranch
  //         this.domAcctFxAllocation.servicingBranch = emittedValue.servicingBranch
  //         this.domAcctFxAllocation.relationshipMgt = emittedValue.relationshipMgt
  //         this.domAcctFxAllocation.status = emittedValue.status
  //       })

  //     })


  //   }

  //  else if (event == "product") {

  //     this.productService.getFilteredProd(this.prodCat).subscribe(data => {
  //       this.products = data;
  //       const modalRef = this.modalService.open(WildcardComponent, { size: 'lg' });
  //       modalRef.componentInstance.prods = this.products
  //       modalRef.componentInstance.title = event
  //       modalRef.componentInstance.emitService.subscribe(emittedValue => {
  //         console.log("emit",emittedValue)
  //         this.domAcctFxAllocation.product = emittedValue
  //         //this.fxRegister.product=emittedValue;
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
  //         //this.emit = emittedValue
  //         this.domAcctFxAllocation.customer = emittedValue;

  //       })
  //     }, (err => {
  //       console.log("Cannot find customer");
  //     }))
  //   }
  // }


}
