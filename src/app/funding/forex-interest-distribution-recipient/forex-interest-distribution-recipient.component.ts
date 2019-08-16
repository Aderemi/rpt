import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
// import { ForexInterestDistributionRecipient } from './forex-interest-distribution-recipient';
// import { ForexInterestDistributionRecipientService } from './forex-interest-distribution-recipient.service';
// import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import { WildcardComponent } from '../../../wildcard/components/wildcard/wildcard.component';
// import { Customer } from '../../staticdata/customer/customer';
// import { AccountService } from '../../staticdata/account/account.service';
// import { CustomerService } from '../../staticdata/customer/customer.service';
// import { Account } from '../../staticdata/account/account';


@Component({
  selector: 'app-forex-interest-distribution-recipient',
  templateUrl: './forex-interest-distribution-recipient.component.html',
  styleUrls: ['./forex-interest-distribution-recipient.component.css']
})
export class ForexInterestDistributionRecipientComponent implements OnInit {
view:number
@Input() forexIntDistribution;

@Output()
emitService: EventEmitter<any> = new EventEmitter();
// fxIntDistRec:ForexInterestDistributionRecipient = new ForexInterestDistributionRecipient();
// fxIntDistRecs:ForexInterestDistributionRecipient[] = []
// fxInterestDistRecipient:ForexInterestDistributionRecipient = new ForexInterestDistributionRecipient()
// fxInterestDistRecipients:ForexInterestDistributionRecipient[] = []
// accounts:Account[]= []
// customers:Customer[]=[]
// fxIntDisRecItems:any[]=[];
// closeResult:String;
// interestReceipientVal: any;

  constructor(
    // private fxIntDistRecService:ForexInterestDistributionRecipientService,
    // private modalService: NgbModal,
    // private accountService:AccountService,
    // private customerService:CustomerService,
    // private activeModal: NgbActiveModal
    ) { 
    this.view = 0;
  }

  ngOnInit() {
  //   console.log("desdf",this.forexIntDistribution)
  //   this.fxInterestDistRecipient.forexInterestDistribution = this.forexIntDistribution
  //   const id = this.fxInterestDistRecipient.forexInterestDistribution.id;
  //   console.log("idid",id)
  //   // this.fxIntDistRecService.getForexBidCollationBatchRequestsById(id).subscribe(data=>{
  //   //   this.fxInterestDistRecipients = data;
  //   //   console.log("ffdd", this.fxInterestDistRecipients)
  //   // })

  // }
  // equals(o1, o2) {
  //   if (o1 != null && o2 != null) {

  //     return o1.code == o2.code ? true : false;
  //   }
  //   return false;
  // }

  // set(event:any,selectedfxDisRec){
  //   this.fxIntDistRec = selectedfxDisRec;
  // }
  
  // openFx(interestRecipient){
  //   this.modalService.open(interestRecipient,{size:'lg'}).result.then(result=>{
  //     this.createInterestDistributionRecipients();
  //     this.closeResult = `Closed with: ${result}`;

  //     console.log("datta",this.forexIntDistribution)
  //   })
  
  }
// createInterestDistributionRecipients(){
//   this.fxIntDisRecItems.push(this.fxInterestDistRecipient)
//   console.log("List",this.fxIntDisRecItems)
//   //this.forexIntDistribution = this.fxInterestDistRecipient
//   this.interestReceipientVal = this.emitService.next(this.fxInterestDistRecipient)

//   this.ngOnInit();
//   this.fxInterestDistRecipient = new ForexInterestDistributionRecipient()


// }
//   open(event) {
//     console.log("event", event)
//     if (event == "Accounts") {
//       this.accountService.getAccounts().subscribe(data=>{
//         this.accounts = data;
//         const modalRef = this.modalService.open(WildcardComponent );
//         modalRef.componentInstance.accounts = this.accounts
//         modalRef.componentInstance.title = event
//         modalRef.componentInstance.emitService.subscribe(emittedValue => {
//           this.fxInterestDistRecipient.recAcctNum =emittedValue
          
//         })

//       })
      

//     }
//     else if (event == "customer") {
//       this.customerService.getCustomers().subscribe(data => {
//         this.customers = data;
//         const modalRef = this.modalService.open(WildcardComponent);
//         modalRef.componentInstance.custommers = this.customers
//         modalRef.componentInstance.title = event
//         modalRef.componentInstance.emitService.subscribe(emittedValue => {
         
//           this.fxInterestDistRecipient.customer = emittedValue;
        
//         })
//       }, (err => {
//         console.log("Cannot find customer");
//       }))
//     }

//   }

}
