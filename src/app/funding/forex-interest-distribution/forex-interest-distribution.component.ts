import { Component, OnInit } from '@angular/core';
// import { ForexInterestDistribution } from './forex-interest-distribution';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ForexInterestDistributionService } from './forex-interest-distribution.service';

// import { WorkflowProcessSetupService } from '../../../services/workflow-processsetup.service';
// import { ProductService } from '../../../product/product.service';
// import { ServerMessagePopUp } from '../../../class/server-message-pop-up';
// import { WorkflowQueue } from '../../../class/workflow-queue';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { WildcardComponent } from '../../../wildcard/components/wildcard/wildcard.component';
// import { DecimalPipe } from '@angular/common';
// import { Commons } from '../../../class/commons';
// import { identifierModuleUrl } from '@angular/compiler';
// import { ForexInterestDistributionRecipientService } from '../forex-interest-distribution-recipient/forex-interest-distribution-recipient.service';
// import { ForexInterestDistributionRecipient } from '../forex-interest-distribution-recipient/forex-interest-distribution-recipient';
// import { Currency } from '../../staticdata/currency/currency';
// import { CurrencyService } from '../../staticdata/currency/currency.service';
// import { AccountService } from '../../staticdata/account/account.service';
// import { BankService } from '../../staticdata/bank/bank.service';

@Component({
  selector: 'app-forex-interest-distribution',
  templateUrl: './forex-interest-distribution.component.html',
  styleUrls: ['./forex-interest-distribution.component.css']
})
export class ForexInterestDistributionComponent implements OnInit {

  // decode: any;
  // destStep: String;
  // queueType: String;
  // destQueueId: number;
  // setChildren = true;
  // isInTransit = false;
  // operation:String;
  // rejectSteps: WorkflowQueue[];
  // currencies:Currency[]=[]
  // fxIntDistribution:ForexInterestDistribution = new ForexInterestDistribution();
  // prodCat:String;
  // products:any;
  // banks:any;
  // accounts:any;
  // tempDistAmt:any;
  // tempExchRate:any;
  // tempLocalEquiAmt:any;
  // forexIntDistribution:ForexInterestDistribution = new ForexInterestDistribution()
  // idGen:any;
  // fxListItems:ForexInterestDistributionRecipient[]= []
  // fxIntDistributionRec:ForexInterestDistributionRecipient = new ForexInterestDistributionRecipient()
  constructor(    
    // private activatedRoute: ActivatedRoute,
    // private fxInterestDistribution:ForexInterestDistributionService,
    // private currencyService:CurrencyService,
    // private _setupService: WorkflowProcessSetupService,
    // private _smp: ServerMessagePopUp,
    // private productService: ProductService,
    // private decimalPipe: DecimalPipe,
    // private router: Router,
    // private accountService:AccountService,
    // private commonService: Commons,
    // private bankService:BankService,
    // private modalService: NgbModal,
    // private fxIntDistributionRecService:ForexInterestDistributionRecipientService

    ) {
      // this.operation = "";
      // this.prodCat = "FXS";
   }

  ngOnInit() {
  //  // let operation:String = new String()
  //   if (this.operation === "" ){
  //     this.fxInterestDistribution.getReferenceNumber().subscribe(data=>{
  //       this.fxIntDistribution.referenceNum = data.ref;
  //       let dataObject:any;
  //       const id = 0;
  //       const desc ="";
  //       dataObject = {
  //         "id":id
  //       }
       
  //       this.fxInterestDistribution.createID(dataObject).subscribe(data => {
  //         this.idGen= data;
  //         this.forexIntDistribution.id = this.idGen.id + 1;
  //         console.log("Successful",this.forexIntDistribution.id);
  //         console.log("Success",this.forexIntDistribution);
  //         console.log("Successful",this.idGen);
        
  //       })
  //     })      
  //   }
  //   else{
  //     this.activatedRoute.params.subscribe(params => {
      
  //       this.operation = this.decode.operation;
  //       console.log(this.decode);
  //       console.log("Fx Register object", this.fxIntDistribution);
  //       console.log("operation", this.operation);
  //       if (this.operation == "In Transit") {
  
  //         this.setChildren = false;
  //         this.destStep = this.decode.product.destStep;
  //         console.log("coddd", this.destStep)
  //         this.queueType = this.decode.product.queueType;
  //         this.destQueueId = this.decode.product.destQueueId;
  //         this.instrumentInTransitInit();
  //       } 
  //     }
  //     );
  //   }
  
  //   this.currencyService.getCurrencies().subscribe((data => {
  //     this.currencies = data;
  //     console.log("Currencies", data);
  //   }), (err => {

  //   }));
  }

//   instrumentInTransitInit() {
//     console.log("***************************************************************")
//     this.isInTransit = true;
//     this.fxIntDistribution == this.decode.product;
//     console.log("forex Request", this.fxIntDistribution)
//     let id = this.decode.product.id;
//     console.log("Instrument product", id);
//     this.getQueuesForRejection(id);
//     this.getFxInterestDistributionWorkflowByWfId(id)
//     this.getQueuesForRejection(id);
//     console.log("getWOrkflowbyId", this.getFxInterestDistributionWorkflowByWfId(id));

//   }

//   transfornTotalDistAmt(){
//     this.fxIntDistribution.totalDistAmt = this.decimalPipe.transform(this.fxIntDistribution.totalDistAmt, '1.2');
//     this.tempDistAmt = this.commonService.formatNumber(this.fxIntDistribution.totalDistAmt)
//   }
// transformLocalCurrencyEquivalence(){
 
//   this.fxIntDistribution.localCurrAquiAmt = this.decimalPipe.transform(this.fxIntDistribution.localCurrAquiAmt, '1.2');
//   this.tempLocalEquiAmt = this.commonService.formatNumber(this.fxIntDistribution.localCurrAquiAmt)
// }
//   transformExchRate() {
//     if (null == this.fxIntDistribution.totalDistAmt) {
//       this.fxIntDistribution.localCurrAquiAmt = 0;
//       this.fxIntDistribution.localCurrEqui = this.fxIntDistribution.exchRateCurr.code
//     }
//     else {
//       let numberArr: any[];
//       numberArr = this.fxIntDistribution.totalDistAmt.split(",")
//       let newTotalDistAmt: any = "";
//       numberArr.forEach(e => {
//         newTotalDistAmt += e;
//       })
//       this.fxIntDistribution.localCurrEqui = this.fxIntDistribution.exchRateCurr.code
//       this.fxIntDistribution.localCurrAquiAmt = (this.fxIntDistribution.exchRate * newTotalDistAmt)

//       console.log("calculated", this.fxIntDistribution.localCurrAquiAmt)
//     }

//     this.fxIntDistribution.exchRate = this.decimalPipe.transform(this.fxIntDistribution.exchRate, '1.2');
//     this.tempExchRate = this.commonService.formatNumber(this.fxIntDistribution.exchRate)
//     this.transformLocalCurrencyEquivalence();
//   }

//   listOfRecipients(event){
//     this.fxListItems.push(event)
//     console.log("fxlist items",this.fxListItems);
//     this.fxIntDistribution.forexInterestDistributionRecipient = this.fxListItems;
//     console.log("obj", this.fxIntDistribution.forexInterestDistributionRecipient)
//   }
//   open(event) {
//     console.log("event", event)
//     if (event == "Accounts") {
//       this.accountService.getAccounts().subscribe(data=>{
//         this.accounts = data;
//         const modalRef = this.modalService.open(WildcardComponent, { size: 'lg' });
//         modalRef.componentInstance.accounts = this.accounts
//         modalRef.componentInstance.title = event
//         modalRef.componentInstance.emitService.subscribe(emittedValue => {
//           this.fxIntDistribution.sourceAccount =emittedValue
          
//         })

//       })
      

//     }

//    else if (event == "product") {
  
//       this.productService.getFilteredProd(this.prodCat).subscribe(data => {
//         this.products = data;
//         const modalRef = this.modalService.open(WildcardComponent, { size: 'lg' });
//         modalRef.componentInstance.prods = this.products
//         modalRef.componentInstance.title = event
//         modalRef.componentInstance.emitService.subscribe(emittedValue => {
//           console.log("emit",emittedValue)
//           this.fxIntDistribution.product = emittedValue
//           //this.fxRegister.product=emittedValue;
//         })
//       });

//     }

//     else if (event == "Banks") {
//       this.bankService.getBanks().subscribe(data => {
//         this.banks = data;
//         const modalRef = this.modalService.open(WildcardComponent, { size: 'lg' });
//         modalRef.componentInstance.banks = this.banks
//         modalRef.componentInstance.title = event
//         modalRef.componentInstance.emitService.subscribe(emittedValue => {
//           //this.emit = emittedValue
//           this.fxIntDistribution.correspondentBank = emittedValue;
        
//         })
//       }, (err => {
//         console.log("Cannot find customer");
//       }))
//     }
//   }
  
//   createForexInterestDistributions() {
//     this.fxIntDistribution.totalDistAmt = this.tempDistAmt
//     this.fxIntDistribution.exchRate = this.tempExchRate
//     this.fxIntDistribution.localCurrAquiAmt = this.tempLocalEquiAmt
//     this.fxIntDistribution.id = this.forexIntDistribution.id
//    // this.forexIntDistribution
//     this.fxIntDistribution.forexInterestDistributionRecipient = this.fxListItems;
//     console.log(" fx Interest Distribution object ",this.fxIntDistribution);

//    // this.fxIntDistributionRec.forexInterestDistribution = this.fxListItems
//     this.fxInterestDistribution.updateForexInterestDistributionInWorkflow(this.fxIntDistribution).subscribe((data => {
//       // this.fxIntDistributionRec.forexInterestDistribution = this.fxIntDistribution;
      
//       this._smp.popUpAlertSuccess();

//       this.router.navigate(['dashboard'])
//       console.log(data);
//     }), (err => {
//       console.log(err);
//       this._smp.popUpAlertError("Unable to save");

//     }))

//   }

//   getFxInterestDistributionWorkflowByWfId(id) {
//     console.log("get in here", id)
//     this.fxInterestDistribution.getICPWorkflowByWfId(id).subscribe((data) => {
//       console.log("ejkcl", data)
//       this.fxIntDistribution = data;
//       this.fxInterestDistribution.getForexInterestDistribution(data.id).subscribe(insRRgData => {
//         this.fxIntDistribution = insRRgData;
//         console.log("dxdfc", this.fxIntDistribution)
//         console.log("instrument reg of inward", insRRgData);
//         this.setChildren = true;

//       });

//       console.log("destStep = " + this.destStep);
//       console.log(data);
//     }), (err => {
//       console.log(err);
//     });
//   }

//   equals(o1, o2) {
//     if (o1 != null && o2 != null) {

//       return o1.code == o2.code ? true : false;
//     }
//     return false;
//   }


//   getQueuesForRejection(id) {
//     this._setupService.getQueuesForRejectionByWfProId(id).subscribe((data) => {
//       console.log('HHHHHHHHHH =' + id);
//       this.rejectSteps = data;
//     }
//     );
//   }



//   approve(test) {
//     console.log("test", test)
//     this.fxIntDistribution.currentQueueId = this.destQueueId;
//     this.fxIntDistribution.queueType = this.queueType;
//     this.fxInterestDistribution.pushtoworkflow(test).subscribe((data => {
//       console.log('Prototype Map Created');
//       this.router.navigate(['dashboard'])
      
//     }), (err => {

//       console.error(err);
//       (err)
//     }));


//   }
//   reject(inward) {
//     if (this.fxIntDistribution.rejectQueueId === null) {

//     }
//     this.fxIntDistribution.currentQueueId = this.destQueueId;
//     this.fxIntDistribution.queueType = this.queueType;
//     this.fxInterestDistribution.rejectbacktoworkflow(inward).subscribe((data => {
//       this.router.navigate(['dashboard'])


//     }), (err => {
//       console.log(err);
//       console.error(err);
//       (err)
//     }));
//   }




}
