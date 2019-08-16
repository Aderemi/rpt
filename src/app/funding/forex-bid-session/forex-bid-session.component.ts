import { Component, OnInit } from '@angular/core';
// import { ForexSource } from '../forex-source/forex-source';
// import { ForexProduct } from '../forex-product/forex-product';
// import { ForexProductService } from '../forex-product/forex-product.service';
// import { ForexSourceService } from '../forex-source/forex-source.service';
// import { ForexBidSession } from './forex-bid-session';

// import { ForexBidSessionService } from './forex-bid-session.service';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { NotepadComponent } from '../../../notepad/notepad.component';
// import { NotepadService } from '../../../notepad/notepad.service';
// import { Notepad } from '../../../notepad/notepad';
// import { WorkflowQueue } from '../../../class/workflow-queue';
// import { ActivatedRoute, Router } from '@angular/router';
// import { WorkflowProcessSetupService } from '../../../services/workflow-processsetup.service';
// import { ServerMessagePopUp } from '../../../class/server-message-pop-up';
// import { Commons } from '../../../class/commons';
// import { ProductService } from '../../../product/product.service';
// import { Product } from '../../../product/product';
// import { WildcardComponent } from '../../../wildcard/components/wildcard/wildcard.component';
// import { DecimalPipe } from '@angular/common';
// import { templateJitUrl } from '@angular/compiler';
// import { CurrencyService } from '../../staticdata/currency/currency.service';
// import { Currency } from '../../staticdata/currency/currency';

@Component({
  selector: 'app-forex-bid-session',
  templateUrl: './forex-bid-session.component.html',
  styleUrls: ['./forex-bid-session.component.css']
})
export class ForexBidSessionComponent implements OnInit {
  // fxBidSessions: ForexBidSession[] = [];
  // fxSources: ForexSource[] = [];
  // fxProducts: ForexProduct[] = [];
  // fxBidSession: ForexBidSession = new ForexBidSession();
  // currencies: Currency[] = [];
  // closeResult: String;
  // notes: Notepad = new Notepad();
  // text: String;
  // referenceNumber: any;
  // operation: String;
  // idGen: any;
  // decode: any;
  // destStep: String;
  // queueType: String;
  // destQueueId: number;
  // setChildren = true;
  // isInTransit = false;
  // rejectSteps: WorkflowQueue[];
  // prodCat: any
  // products: Product[] = []
  // tempFxBaseCurrRequested: any
  // tempFxBaseCurrAllocated: any
  // tempProposedExchRate: any
  // tempAllocationExchRate: any
  // tempAllocationSellRate: any
  // tempLocalCurrEquiAmt: any
  // sett:Set<any> = new Set();
  constructor(
    // private fxSourceService: ForexSourceService,
    // private fxProductService: ForexProductService,
    // private modalService: NgbModal,
    // private notepadService: NotepadService,
    // private activatedRoute: ActivatedRoute,
    // private _setupService: WorkflowProcessSetupService,
    // private _smp: ServerMessagePopUp,
    // private commonService: Commons,
    // private router: Router,
    // private decimalPipe: DecimalPipe,
    // private productService: ProductService,

    // private currencyService: CurrencyService,
    // private fxBidsessionService: ForexBidSessionService
    ) {
    // this.operation = "";
    // this.prodCat = 'FXS'

  }

  ngOnInit() {
    
    // if (this.operation === "") {
    //   this.fxBidsessionService.getReferenceNumber().subscribe(data => {
    //     this.fxBidSession.referenceNum = data.ref;
    //     let dataObject: any;
    //     const id = 0;
    //     const desc = "";
    //     dataObject = {
    //       "id": id
    //     }

    //     this.fxBidsessionService.createID(dataObject).subscribe(data => {
    //       this.idGen = data;
    //       this.fxBidSession.id = this.idGen.id + 1;
    //       console.log("Successful", this.fxBidSession.id);
    //       console.log("Success", this.fxBidSession);
    //     })
    //   })
    // }
    // else {
    //   this.activatedRoute.params.subscribe(params => {

    //     this.operation = this.decode.operation;
    //     console.log(this.decode);
    //     console.log("operation", this.operation);
    //     if (this.operation == "In Transit") {

    //       this.setChildren = false;
    //       this.destStep = this.decode.product.destStep;
    //       console.log("coddd", this.destStep)
    //       this.queueType = this.decode.product.queueType;
    //       this.destQueueId = this.decode.product.destQueueId;
    //       this.instrumentInTransitInit();
    //     }
    //   }
    //   );
    // }
    // this.getCurrencies();
    // this.getFxProducts();
    // this.getFxSources();
    // console.log("forex products", this.fxProducts)
  }
  // transformFxBaseCurrRequested() {
  //   this.fxBidSession.totalBaseFxCurrReqAmt = this.decimalPipe.transform(this.fxBidSession.totalBaseFxCurrReqAmt, '1.2')
  //   this.tempFxBaseCurrRequested = this.commonService.formatNumber(this.fxBidSession.totalBaseFxCurrReqAmt)
  // }
  // transformFxBaseCurrAllocated() {
  //   this.fxBidSession.totalBaseFxCurrAllocatedAmt = this.decimalPipe.transform(this.fxBidSession.totalBaseFxCurrAllocatedAmt, '1.2')
  //   this.tempFxBaseCurrAllocated = this.commonService.formatNumber(this.fxBidSession.totalBaseFxCurrAllocatedAmt)
  // }
  // transformProposedExchRate() {
  //   this.fxBidSession.proposedRate = this.decimalPipe.transform(this.fxBidSession.proposedRate, '1.2')
  //   this.tempProposedExchRate = this.commonService.formatNumber(this.fxBidSession.proposedRate)
  // }
  // transformAllocationExchRate() {
  //   //Convert the allocated amount to the local currency selected. Calculation is done by multiplying the fx allocated amount by the allocation exchange rate

  //   if (null == this.fxBidSession.totalBaseFxCurrAllocatedAmt) {
  //     this.fxBidSession.localCurrAmt = 0;
  //     this.fxBidSession.localCurr = this.fxBidSession.allocationExchRate
  //   }
  //   else {
  //     let numberArr: any[];
  //     numberArr = this.fxBidSession.totalBaseFxCurrAllocatedAmt.split(",")
  //     let newTotalAllocatedAmt: any = "";
  //     numberArr.forEach(e => {
  //       newTotalAllocatedAmt += e;
  //     })
  //     this.fxBidSession.localCurr = this.fxBidSession.allocationExchRate
  //     this.fxBidSession.localCurrAmt = (this.fxBidSession.allocationExchRateAmt * newTotalAllocatedAmt)

  //     console.log("calculated", this.fxBidSession.localCurrAmt)

  //   }
  //   this.fxBidSession.allocationExchRateAmt = this.decimalPipe.transform(this.fxBidSession.allocationExchRateAmt, '1.2')
  //   this.tempAllocationExchRate = this.commonService.formatNumber(this.fxBidSession.allocationExchRateAmt)
  //   this.transformLocalEquiCurr();
  // }
  // transformAllocationSellRate() {
  //   this.fxBidSession.sellRateAmt = this.decimalPipe.transform(this.fxBidSession.sellRateAmt, '1.2')
  //   this.tempAllocationSellRate = this.commonService.formatNumber(this.fxBidSession.sellRateAmt)
  // }
  // transformLocalEquiCurr() {
  //   this.fxBidSession.localCurrAmt = this.decimalPipe.transform(this.fxBidSession.localCurrAmt, '1.2')
  //   this.tempLocalCurrEquiAmt = this.commonService.formatNumber(this.fxBidSession.localCurrAmt)
  // }
  // getRequestCurr(event) {
  //   this.fxBidSession.totalBaseFxCurrAllocated = event.code;
  //   console.log("fxid", this.fxBidSession.totalBaseFxCurrAllocated)
  // }
  // getExchRateCurr(event) {
  //   this.fxBidSession.allocationExchRate = event.code;
  //   this.fxBidSession.sellRate = event.code;
  //   this.fxBidSession.localCurrEquiRate = event.code;
  // }

  // createBidSession() {
  //   this.fxBidSession.allocationExchRateAmt = this.tempAllocationExchRate;
  //   this.fxBidSession.totalBaseFxCurrReqAmt = this.tempFxBaseCurrRequested
  //   this.fxBidSession.totalBaseFxCurrAllocatedAmt = this.tempFxBaseCurrAllocated
  //   this.fxBidSession.proposedRate = this.tempProposedExchRate
  //   this.fxBidSession.localCurrAmt = this.tempLocalCurrEquiAmt
  //   this.fxBidSession.sellRateAmt = this.tempAllocationSellRate
  //   this.fxBidsessionService.CreateForexBidSessionInWorkflow(this.fxBidSession).subscribe((data => {

  //     this._smp.popUpAlertSuccess();
  //     console.log("Successful",data)
  //     this.router.navigate(['dashboard'])
  //     console.log(data);
  //   }), (err => {
  //     console.log(err);
  //     this._smp.popUpAlertError("Unable to save");

  //   }))
  // }
  // instrumentInTransitInit() {
  //   console.log("***************************************************************")
  //   this.isInTransit = true;
  //   this.fxBidSession == this.decode.product;
  //   let id = this.decode.product.id;
  //   console.log("Instrument product", id);
  //   this.getQueuesForRejection(id);
  //   this.getFxBidSessionBatchWorkflowByWfId(id)
  //   this.getQueuesForRejection(id);
  //   console.log("getWOrkflowbyId", this.getFxBidSessionBatchWorkflowByWfId(id));

  // }
  // getFxBidSessionBatchWorkflowByWfId(id) {
  //   console.log("get in here", id)
  //   this.fxBidsessionService.getICPWorkflowByWfId(id).subscribe((data) => {
  //     console.log("ejkcl", data)
  //     this.fxBidSession = data;
  //     this.fxBidsessionService.getForexBidSession(data.id).subscribe(insRRgData => {
  //       this.fxBidSession = insRRgData;
  //       console.log("dxdfc", this.fxBidSession)
  //       console.log("instrument reg of inward", insRRgData);
  //       this.setChildren = true;

  //     });

  //     console.log("destStep = " + this.destStep);
  //     console.log(data);
  //   }), (err => {
  //     console.log(err);
  //   });
  // }
  // open(event) {
  //   console.log("event", event)
  //   if (event == "product") {

  //     this.productService.getFilteredProd(this.prodCat).subscribe(data => {
  //       this.products = data;
  //       const modalRef = this.modalService.open(WildcardComponent, { size: 'lg' });
  //       modalRef.componentInstance.prods = this.products
  //       modalRef.componentInstance.title = event
  //       modalRef.componentInstance.emitService.subscribe(emittedValue => {
  //         console.log("emit", emittedValue)
  //         this.fxBidSession.product = emittedValue;
  //       })
  //     });

  //   }
  //   else if (event == "remarks")
  //     this.notepadService.getNote(event).subscribe(data => {
  //       this.notes = data;
  //       const modalRef = this.modalService.open(NotepadComponent);
  //       modalRef.componentInstance.notepad = this.notes;

  //       modalRef.componentInstance.emitService.subscribe(emittedValue => {
  //         this.fxBidSession.remarks = emittedValue
  //       })


  //     })

  // }

  // getFxProducts() {
  //   this.fxProductService.getAllFxProducts().subscribe(data => {
  //     this.fxProducts = data;
  //   })
  // }
  // getFxSources() {
  //   this.fxSourceService.getFxSources().subscribe(data => {
  //     this.fxSources = data;
  //   })
  // }
  // getCurrencies() {
  //   this.currencyService.getCurrencies().subscribe(data => {
  //     this.currencies = data;
  //   })
  // }
  // createFxBidSession() {
  //   this.fxBidsessionService.createForexBidSession(this.fxBidSession).subscribe(data => {
  //     console.log("Successful");
  //   })
  // }

  // getQueuesForRejection(id) {
  //   this._setupService.getQueuesForRejectionByWfProId(id).subscribe((data) => {
  //     console.log('HHHHHHHHHH =' + id);
  //     this.rejectSteps = data;
  //   }
  //   );
  // }



  // approve(test) {
  //   console.log("test", test)
  //   this.fxBidSession.currentQueueId = this.destQueueId;
  //   this.fxBidSession.queueType = this.queueType;
  //   this.fxBidsessionService.pushtoworkflow(test).subscribe((data => {
  //     console.log('Prototype Map Created');
  //     this.router.navigate(['dashboard'])

  //   }), (err => {

  //     console.error(err);
  //     (err)
  //   }));


  // }
  // reject(inward) {
  //   if (this.fxBidSession.rejectQueueId === null) {

  //   }
  //   this.fxBidSession.currentQueueId = this.destQueueId;
  //   this.fxBidSession.queueType = this.queueType;
  //   this.fxBidsessionService.rejectbacktoworkflow(inward).subscribe((data => {
  //     this.router.navigate(['dashboard'])


  //   }), (err => {
  //     console.log(err);
  //     console.error(err);
  //     (err)
  //   }));
  // }
  // equals(o1, o2) {
  //   if (o1 != null && o2 != null) {
  //     // console.log("-------------------")
  //     // console.log(o1.code)
  //     // console.log(o2.code)
  //     // console.log(o1.code == o2.code)
  //     // console.log("-------------------")
  //     return o1.code == o2.code ? true : false;
  //   }
  //   return false;
  // }
}
