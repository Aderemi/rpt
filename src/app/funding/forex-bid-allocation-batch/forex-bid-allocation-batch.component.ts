import { Component, OnInit } from '@angular/core';
// import { ForexSourceService } from '../forex-source/forex-source.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';
// import { ForexBidAllocationBatchService } from './forex-bid-allocation-batch.service';
// import { ForexBidAllocationBatch } from './forex-bid-allocation-batch';
// import { ForexAllocationService } from '../forex-allocation/forex-allocation.service';
// import { ForexAllocation } from '../forex-allocation/forex-allocation';
// import { ForexBidCollationBatch } from '../forex-bid-collation-batch/forex-bid-collation-batch';
// import { ForexBidCollationBatchService } from '../forex-bid-collation-batch/forex-bid-collation-batch.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { WildcardComponent } from '../../../wildcard/components/wildcard/wildcard.component';
// import { ForexBidCollationBatchRequest } from '../forex-bid-collation-batch-request/forex-bid-collation-batch-request';
// import { ForexProductService } from '../forex-product/forex-product.service';
// import { ForexProduct } from '../forex-product/forex-product';
// import { ForexSource } from '../forex-source/forex-source';
// import { WorkflowProcessSetupService } from '../../../services/workflow-processsetup.service';
// import { ServerMessagePopUp } from '../../../class/server-message-pop-up';
// import { WorkflowQueue } from '../../../class/workflow-queue';
// import { Commons } from '../../../class/commons';
// import { CurrencyService } from '../../staticdata/currency/currency.service';

@Component({
  selector: 'app-forex-bid-allocation-batch',
  templateUrl: './forex-bid-allocation-batch.component.html',
  styleUrls: ['./forex-bid-allocation-batch.component.css']
})
export class ForexBidAllocationBatchComponent implements OnInit {

  // fxAllocations: ForexAllocation[] = []
  // fxBidAllocationBatch: ForexBidAllocationBatch = new ForexBidAllocationBatch()
  // fxCollationBatches: ForexBidCollationBatch[] = []
  // fxCollationBatchObject: ForexBidCollationBatch = new ForexBidCollationBatch()
  // refId: any;
  // fxAllocationRequests: ForexBidCollationBatchRequest[] = [];
  // forexProducts: ForexProduct[] = []
  // bidCurrencies: String[];
  // forexSources: ForexSource[] = [];
  // operation: String;
  // idGen: any;
  // decode: any;
  // destStep: String;
  // queueType: String;
  // destQueueId: number;
  // setChildren = true;
  // isInTransit = false;
  // rejectSteps: WorkflowQueue[];
  // fxAllocationItems: any[] = []
  // tempTotalRequestAmt:any
  constructor(
    // private fxSourceService: ForexSourceService,
    //  private router: Router,
    // private decimalPipe: DecimalPipe
    // ,
    // private fxBidCollatonBatchService: ForexBidCollationBatchService,
    // private fxAllocationService: ForexAllocationService,
    // private modalService: NgbModal,
    // private fxBidAllocationService: ForexBidAllocationBatchService,
    // private forexProductService: ForexProductService,
    // private forexSourceService: ForexSourceService,
    // private activatedRoute: ActivatedRoute,
    // private _setupService: WorkflowProcessSetupService,
    // private _smp: ServerMessagePopUp,
    // private commonService: Commons,

    // private currencyService: CurrencyService
    ) {
    // this.operation = "";

  }

  // fxBidAllocation: ForexBidAllocationBatch = new ForexBidAllocationBatch()

  ngOnInit() {

  //   if (this.operation === "") {
  //     this.fxBidAllocationService.getReferenceNumber().subscribe(editorData => {
  //       this.fxBidAllocation.referenceNum = editorData.ref;
  //       let dataObject: any;
  //       const id = 0;
  //       const desc = "";
  //       dataObject = {
  //         "id": id
  //       }

  //       this.fxBidAllocationService.createID(dataObject).subscribe(editorData => {
  //         this.idGen = editorData;
  //         this.fxBidAllocationBatch.id = this.idGen.id + 1;
  //         console.log("Successful", this.fxBidAllocationBatch.id);
  //         console.log("Success", this.fxBidAllocationBatch);
  //       })
  //     })
  //   }
  //   else {
  //     this.activatedRoute.params.subscribe(params => {

  //       this.operation = this.decode.operation;
  //       console.log(this.decode);
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
  //   this.getForexProducts();
  //   this.getForexSource()
  //   this.getTotalAllocatedAmount()
  //   // this.getTotalRequestedAmount()
  }
  // instrumentInTransitInit() {
  //   console.log("***************************************************************")
  //   this.isInTransit = true;
  //   this.fxBidAllocation == this.decode.product;
  //   let id = this.decode.product.id;
  //   console.log("Instrument product", id);
  //   this.getQueuesForRejection(id);
  //   this.getFxInterestDistributionWorkflowByWfId(id)
  //   this.getQueuesForRejection(id);
  //   console.log("getWOrkflowbyId", this.getFxInterestDistributionWorkflowByWfId(id));

  // }

  // getFxInterestDistributionWorkflowByWfId(id) {
  //   console.log("get in here", id)
  //   this.fxBidAllocationService.getICPWorkflowByWfId(id).subscribe((editorData) => {
  //     console.log("ejkcl", editorData)
  //     this.fxBidAllocation = editorData;
  //     this.fxBidAllocationService.getFxBidAllocationBatch(editorData.id).subscribe(insRRgData => {
  //       this.fxBidAllocation = insRRgData;
  //       console.log("dxdfc", this.fxBidAllocation)
  //       console.log("instrument reg of inward", insRRgData);
  //       this.setChildren = true;

  //     });

  //     console.log("destStep = " + this.destStep);
  //     console.log(editorData);
  //   }), (err => {
  //     console.log(err);
  //   });
  // }

  // equals(o1, o2) {
  //   if (o1 != null && o2 != null) {

  //     return o1.code == o2.code ? true : false;
  //   }
  //   return false;
  // }


  // getQueuesForRejection(id) {
  //   this._setupService.getQueuesForRejectionByWfProId(id).subscribe((editorData) => {
  //     console.log('HHHHHHHHHH =' + id);
  //     this.rejectSteps = editorData;
  //   }
  //   );
  // }



  // approve(test) {
  //   console.log("test", test)
  //   this.fxBidAllocation.currentQueueId = this.destQueueId;
  //   this.fxBidAllocation.queueType = this.queueType;
  //   this.fxBidAllocationService.pushtoworkflow(test).subscribe((editorData => {
  //     console.log('Prototype Map Created');
  //     this.router.navigate(['dashboard'])

  //   }), (err => {

  //     console.error(err);
  //     (err)
  //   }));


  // }
  // reject(inward) {
  //   if (this.fxBidAllocation.rejectQueueId === null) {

  //   }
  //   this.fxBidAllocation.currentQueueId = this.destQueueId;
  //   this.fxBidAllocation.queueType = this.queueType;
  //   this.fxBidAllocationService.rejectbacktoworkflow(inward).subscribe((editorData => {
  //     this.router.navigate(['dashboard'])


  //   }), (err => {
  //     console.log(err);
  //     console.error(err);
  //     (err)
  //   }));
  // }

  // getTotalAllocatedAmount() {
  //   this.fxAllocationService.getFxAllocations().subscribe(editorData => {
  //     this.fxAllocations = editorData;
  //     let totalAllocationAmount = 0;
  //     this.fxAllocations.forEach(e => {
  //       let allocatedAmt = e.allocatedAmt;
  //       totalAllocationAmount += allocatedAmt;
  //     })
  //     this.fxBidAllocationBatch.totalAllocatedAmt = totalAllocationAmount;
  //   })
  // }
  // getForexProducts() {
  //   this.forexProductService.getAllFxProducts().subscribe(editorData => {
  //     this.forexProducts = editorData;
  //     console.log("forex products",this.forexProducts)
  //   })
  // }
  // getForexSource() {
  //   this.forexSourceService.getFxSources().subscribe(editorData => {
  //     this.forexSources = editorData;
  //   })
  // }
  // getFxCurrencies(event) {
  //   if (null === this.fxBidAllocation.product) {
  //     this.bidCurrencies = []
  //   }
  //   else {
  //     this.bidCurrencies = event.product.currency;

  //   }
  //   console.log(event)
  //   //this.bidCurrencies = event.currency.code;
  //   console.log("bid currencies", this.bidCurrencies);
  // }
  // open(event) {
  //   console.log("event", event)
  //   if (event == "Collation Reference") {
  //     this.fxBidCollatonBatchService.getFxBidCollationBatches().subscribe(editorData => {
  //       this.fxCollationBatches = editorData;

  //       const modalRef = this.modalService.open(WildcardComponent, { size: 'lg' });
  //       modalRef.componentInstance.collationRef = this.fxCollationBatches
  //       modalRef.componentInstance.title = event
  //       modalRef.componentInstance.emitService.subscribe(emittedValue => {
  //         this.fxCollationBatchObject = emittedValue
  //         this.fxBidAllocation.bidCollationRef = this.fxCollationBatchObject;
  //         this.fxBidAllocation.totalReqAmtCurr = this.fxCollationBatchObject.totalReqAmtCurr
  //         console.log("BidCollaObje",this.fxCollationBatchObject.referenceNum )
  //         this.refId = this.fxCollationBatchObject.id;
  //         this.fxBidAllocation.bidCurrency = this.fxCollationBatchObject.bidCurrency.code
  //         console.log("hjxkzxcc", this.refId, " hicjdxks", this.fxCollationBatchObject.id);
  //         this.fxBidAllocationService.getForexBidCollationBatchRequestsById(this.refId).subscribe(editorData => {
  //           this.fxAllocationRequests = editorData;
  //           console.log("editorData",editorData)
  //           let requestAmtCurr;
  //          // requestAmtCurr = this.fxAllocationRequests[0].requestAmtCurr.code
  //           // if (requestAmtCurr == null || requestAmtCurr === "undefined") {
  //           //   this.fxBidAllocation.bidCurrency = ""
  //           // }
  //           // else {
  //           //   this.fxBidAllocation.bidCurrency = requestAmtCurr;
  //           // }
  //           console.log("reqCurr", requestAmtCurr)
  //           let totalRequestedAmount = 0;
  //           this.fxAllocationRequests.forEach(e => {
  //             let requestAmount = e.requestAmount;
  //             totalRequestedAmount += requestAmount;

  //             //totalAmtCurr = e.requestAmtCurr.code
  //           })
  //           this.fxBidAllocation.totalReqAmt = this.decimalPipe.transform(totalRequestedAmount, '1.2');
  //           //this.fxBidAllocation.totalReqAmtCurr = requestAmtCurr;
  //           // requestAmtCurr= totalAmtCurr
  //         })
  //       })
  //     })
  //   }

  // }

  // createFxBidAllocationBatch() {
  //   this.fxAllocationItems = this.fxAllocationRequests
  //   this.fxBidAllocation.id =  this.fxBidAllocationBatch.id
  //   this.tempTotalRequestAmt = this.commonService.formatNumber(this.fxBidAllocation.totalReqAmt)
  //   this.fxBidAllocation.totalReqAmt = this.tempTotalRequestAmt;
  //   this.fxBidAllocationService.CreateForexBidAllocationBatchInWorkflow(this.fxBidAllocation).subscribe(editorData=>{
  //     console.log("Successful",editorData)
  //     this._smp.popUpAlertSuccess();

  //     this.router.navigate(['dashboard'])
  //   })
  // }
  // getTotalRequestedAmount() {
  //   this.fxAllocationService.getFxAllocations().subscribe(editorData => {
  //     this.fxAllocations = editorData;
  //     let totalRequestedAmt = 0;
  //     this.fxAllocations.forEach(e => {
  //       let requestedAmt = e.requestAmt
  //       totalRequestedAmt += requestedAmt;
  //     })
  //     this.fxBidAllocationBatch.totalReqAmt = totalRequestedAmt
  //   })
  // }

}
