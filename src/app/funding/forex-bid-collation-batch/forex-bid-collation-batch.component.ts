import { Component, OnInit } from '@angular/core';
// import { ForexSourceService } from '../forex-source/forex-source.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { ForexSource } from '../forex-source/forex-source';
// import { ForexBidCollationBatch } from './forex-bid-collation-batch';
// import { DecimalPipe } from '@angular/common';
// import { ForexBidCollationBatchService } from './forex-bid-collation-batch.service';

// import { ForexBidCollationBatchRequestService } from '../forex-bid-collation-batch-request/forex-bid-collation-batch-request.service';
// import { ForexBidCollationBatchRequest } from '../forex-bid-collation-batch-request/forex-bid-collation-batch-request';
// import { Commons } from '../../../class/commons';
// import { WorkflowQueue } from '../../../class/workflow-queue';
// import { WorkflowProcessSetupService } from '../../../services/workflow-processsetup.service';
// import { ServerMessagePopUp } from '../../../class/server-message-pop-up';
// import { doesNotReject } from 'assert';
// import { CurrencyService } from '../../staticdata/currency/currency.service';
// import { Currency } from '../../staticdata/currency/currency';

@Component({
  selector: 'app-forex-bid-collation-batch',
  templateUrl: './forex-bid-collation-batch.component.html',
  styleUrls: ['./forex-bid-collation-batch.component.css']
})
export class ForexBidCollationBatchComponent implements OnInit {

  // fxSources: ForexSource[] = [];
  // fxBidCollationBatch: ForexBidCollationBatch = new ForexBidCollationBatch();
  // forexBidCollationBatch: ForexBidCollationBatch = new ForexBidCollationBatch();
  // fxBidCollationBatches: ForexBidCollationBatch[] = [];
  // currencies: Currency[] = [];
  // bidRequestNum: number;
  // referenceNumber: String;
  // latestRequestId: number;
  // bidRequests: ForexBidCollationBatchRequest[] = [];
  // fxBidColId: number;
  // id: number;
  // bidCurrencyCode: String;
  // totalRequestAmtList: any[];
  // operation: String;
  // idGen: any;
  // decode: any;
  // destStep: String;
  // queueType: String;
  // destQueueId: number;
  // setChildren = true;
  // isInTransit = false;
  // rejectSteps: WorkflowQueue[];
  // tempRequestAmt: any;
  // tempHighestExchangeRateAmt: any;
  // tempLowestExchangeRateAmt: any;
  // tempAvgExchangeRateAmt: any;
  // tempBaseForeignCurrEqui:any;
  // tempLocalCurrEqui:any
  // fxBidCollationBatchList: any[] = [];

  constructor(
    // private fxSourceService: ForexSourceService, 
    // private router: Router
    // ,
    // private decimalPipe: DecimalPipe,
    // private fxBidCollatonBatchService: ForexBidCollationBatchService,
    // private fxBidCollatonBatchRequestService: ForexBidCollationBatchRequestService,
    // private activatedRoute: ActivatedRoute,
    // private _setupService: WorkflowProcessSetupService,
    // private _smp: ServerMessagePopUp,
    // private commonService: Commons,
    // private currencyService: CurrencyService
    ) {
    // this.fxBidCollationBatch = new ForexBidCollationBatch();
    // this.operation = '';

  }

  ngOnInit() {
    // this.fxBidCollationBatch.baseForCurrEqui = 'USD';
    // this.fxBidCollationBatch.localCurrEqui = 'NGN';

    // if (this.operation === '') {
    //   this.fxBidCollatonBatchService.getReferenceNumber().subscribe(data => {
    //     this.fxBidCollationBatch.referenceNum = data.ref;
    //     let dataObject: any;
    //     const id = 0;
    //     const desc = '';
    //     dataObject = {
    //       'id': id
    //     };

    //     this.fxBidCollatonBatchService.createID(dataObject).subscribe(data => {
    //       this.idGen = data;
    //       this.fxBidCollationBatch.id = this.idGen.id + 1;

    //     });
    //   });
    // } else {
    //   this.activatedRoute.params.subscribe(params => {

    //     this.operation = this.decode.operation;
    //     console.log(this.decode);
    //     console.log('operation', this.operation);
    //     if (this.operation == 'In Transit') {

    //       this.setChildren = false;
    //       this.destStep = this.decode.product.destStep;
    //       console.log('coddd', this.destStep);
    //       this.queueType = this.decode.product.queueType;
    //       this.destQueueId = this.decode.product.destQueueId;
    //       this.instrumentInTransitInit();
    //     }
    //   }
    //   );
    // }



    // this.getNumBidRequests();
    // this.getForexSource();
    // this.getCurrencies();
  }

  // createFxBidCollationBatch() {
  //   this.fxBidCollationBatch.id = this.fxBidCollationBatch.id;
  //   this.fxBidCollationBatch.totalReqAmt = this.tempRequestAmt;
  //   this.fxBidCollationBatch.highestExchRate = this.tempHighestExchangeRateAmt;
  //   this.fxBidCollationBatch.lowestExchRate = this.tempLowestExchangeRateAmt;
  //   this.fxBidCollationBatch.avgExchRate = this.tempAvgExchangeRateAmt;
  //   this.fxBidCollationBatch.baseForCurrEquiAmt = this.tempBaseForeignCurrEqui
  //   this.fxBidCollationBatch.localCurrEquiAmt = this.tempLocalCurrEqui
    
  //  // this.fxBidCollationBatch.forexBidCollationBatchRequest = 
  //   console.log("fxBCB before submitting",this.fxBidCollationBatch);
    
  //   console.log("fxBCB before submitting",JSON.stringify(this.fxBidCollationBatch));
  //   //console.log("Stringified object",,JSON.parse(this.fxBidCollationBatch));
  //   this.fxBidCollatonBatchService.createFxBidCollationBatch(this.fxBidCollationBatch).subscribe(data => {
  //     console.log('Successful', data);
  //     this._smp.popUpAlertSuccess();

  //     this.router.navigate(['dashboard/baseMenu']);
  //   });
  // }
  // instrumentInTransitInit() {
  //   console.log('***************************************************************');
  //   this.isInTransit = true;
  //   this.fxBidCollationBatch == this.decode.product;
  //   const id = this.decode.product.id;
  //   console.log('Instrument product', id);
  //   this.getQueuesForRejection(id);
  //   this.getFxBidCollationBatchWorkflowByWfId(id);
  //   this.getQueuesForRejection(id);
  //   console.log('getWOrkflowbyId', this.getFxBidCollationBatchWorkflowByWfId(id));

  // }

  // getFxBidCollationBatchWorkflowByWfId(id) {
  //   console.log('get in here', id);
  //   this.fxBidCollatonBatchService.getICPWorkflowByWfId(id).subscribe((data) => {
  //     console.log('ejkcl', data);
  //     this.fxBidCollationBatch = data;
  //     this.fxBidCollatonBatchService.getFxBidCollationBatch(data.id).subscribe(insRRgData => {
  //       this.fxBidCollationBatch = insRRgData;
  //       console.log('dxdfc', this.fxBidCollationBatch);
  //       console.log('instrument reg of inward', insRRgData);
  //       this.setChildren = true;

  //     });

  //     console.log('destStep = ' + this.destStep);
  //     console.log(data);
  //   }), (err => {
  //     console.log(err);
  //   });
  // }
  // setNumOfRequests(event) {
  //   console.log('event', event);
  //   let totalReq = 0;
  //   let requestSize = 0;
  //   let highestRate = 0;
  //   let lowestRate = 0;
  //   let averageRate = 0;
  //   let totalRate = 0;
  //   let temp = 0;
  //   this.fxBidCollationBatch.forexBidCollationBatchRequest = event.bidRequests;
  //   highestRate = event.highestRate;
  //   lowestRate = event.lowestRate;
  //   this.fxBidCollationBatch.forexBidCollationBatchRequest.forEach(e => {
  //     totalReq += e.requestAmount;
  //     totalRate += e.exchRateAmt;
  //     highestRate = e.exchRateAmt;
  //     lowestRate = e.exchRateAmt;
  //   });      

  //   //Assigning the total amount to the base curr equivalent amount
  //   let baseEqui = totalReq * 360
    

  //   if (this.fxBidCollationBatch.forexBidCollationBatchRequest.length > 1) {
  //     this.fxBidCollationBatch.forexBidCollationBatchRequest.forEach(f => {
  //       temp = f.exchRateAmt;

  //       if (temp > highestRate) {
  //         highestRate = temp;
  //       } else if (temp < lowestRate) {
  //         lowestRate = temp;
  //       }
  //     });
  //   }

  //   requestSize = this.fxBidCollationBatch.forexBidCollationBatchRequest.length;
  //   this.fxBidCollationBatch.totalReqAmt = this.decimalPipe.transform(totalReq, '1.2');
  //   this.tempRequestAmt = this.commonService.formatNumber(this.fxBidCollationBatch.totalReqAmt)
  
  //   this.fxBidCollationBatch.numOfRequests = requestSize;
  //   averageRate = totalRate / requestSize;
  //   this.fxBidCollationBatch.avgExchRate = this.decimalPipe.transform(averageRate, '1.2');
  //   this.tempAvgExchangeRateAmt = this.commonService.formatNumber(this.fxBidCollationBatch.avgExchRate)
  //   this.fxBidCollationBatch.lowestExchRate = this.decimalPipe.transform(lowestRate, '1.2');
  //   this.tempLowestExchangeRateAmt = this.commonService.formatNumber(this.fxBidCollationBatch.lowestExchRate)
  //   this.fxBidCollationBatch.highestExchRate = this.decimalPipe.transform(highestRate, '1.2');
  //   this.tempHighestExchangeRateAmt = this.commonService.formatNumber(this.fxBidCollationBatch.highestExchRate)
  //   this.fxBidCollationBatch.baseForCurrEquiAmt = this.fxBidCollationBatch.totalReqAmt
   
  //   console.log("baseEqui", baseEqui, "vhj ",this.fxBidCollationBatch.baseForCurrEquiAmt);
  //   this.tempBaseForeignCurrEqui = this.commonService.formatNumber(this.fxBidCollationBatch.baseForCurrEquiAmt)
    
  //   this.fxBidCollationBatch.localCurrEquiAmt = baseEqui
  //   this.fxBidCollationBatch.localCurrEquiAmt = this.decimalPipe.transform(this.fxBidCollationBatch.localCurrEquiAmt, '1.2')
  //   this.tempLocalCurrEqui = this.commonService.formatNumber(this.fxBidCollationBatch.localCurrEquiAmt);
   
  //   console.log('hgjhbljk', this.fxBidCollationBatch.totalReqAmt);


  // }

  // getForexSource() {
  //   this.fxSourceService.getFxSources().subscribe(data => {
  //     this.fxSources = data;
  //   });
  // }

  // transformTotalRequestAmount() {
  //   this.fxBidCollationBatch.totalReqAmt = this.decimalPipe.transform(this.fxBidCollationBatch.totalReqAmt, '1.2');
  //   this.tempRequestAmt = this.commonService.formatNumber(this.fxBidCollationBatch.totalReqAmt);

  // }
  // transformHighestExchangeRateAmount() {
  //   this.fxBidCollationBatch.highestExchRate = this.decimalPipe.transform(this.fxBidCollationBatch.highestExchRate, '1.2');
  //   this.tempHighestExchangeRateAmt = this.commonService.formatNumber(this.fxBidCollationBatch.highestExchRate);
  // }
  // transformLowestExchRateAmount() {
  //   this.fxBidCollationBatch.lowestExchRate = this.decimalPipe.transform(this.fxBidCollationBatch.lowestExchRate, '1.2');
  //   this.tempLowestExchangeRateAmt = this.commonService.formatNumber(this.fxBidCollationBatch.lowestExchRate);
  // }

  // transformAverageExchRateAmount() {
  //   this.fxBidCollationBatch.avgExchRate = this.decimalPipe.transform(this.fxBidCollationBatch.avgExchRate, '1.2');
  //   this.tempAvgExchangeRateAmt = this.commonService.formatNumber(this.fxBidCollationBatch.avgExchRate);
  // }
  // // transformBaseCurrAmount() {
  // //   this.fxBidCollationBatch.baseForCurrEquiAmt = this.decimalPipe.transform(this.fxBidCollationBatch.baseForCurrEqui, "1.2")
  // // }
  // // transformLocalCurrAmount() {
  // //   this.fxBidCollationBatch.localCurrEquiAmt = this.decimalPipe.transform(this.fxBidCollationBatch.localCurrEquiAmt, "1.2")
  // // }

  // getBidCurrency(event) {
  //   console.log('event is ', event, 'code is', event.code);
  //   const eventCode = event.code;
  //   this.fxBidCollationBatch.totalReqAmtCurr = eventCode;
  //   this.fxBidCollationBatch.highestExchRateCurr = eventCode;
  //   this.fxBidCollationBatch.avgExchRateCurr = eventCode;
  //   this.fxBidCollationBatch.lowestExchRateCurr = eventCode;
  //   if (eventCode === 'undefined') {
  //     this.bidCurrencyCode = '';
  //   } else {
  //     this.bidCurrencyCode = eventCode;
  //     console.log('bid currency code is ', this.bidCurrencyCode);
  //   }
  // }
  // getCurrencies() {
  //   this.currencyService.getCurrencies().subscribe(data => {
  //     this.currencies = data;
  //   });
  // }
  // // createFxBidCollationBatch() {
  // //   this.fxBidCollationBatch.totalReqAmt = this.tempRequestAmt
  // //   this.fxBidCollationBatch.a
  // //   this.fxBidCollatonBatchService.CreateForexBidCollationBatchInWorkflow(this.fxBidCollationBatch).subscribe(data => {
  // //     console.log('Successful');
  // //   });
  // // }


  // getNumBidRequests() {
  //   this.fxBidCollatonBatchRequestService.getForexBidCollationBatchRequests().subscribe(e => {
  //     this.bidRequestNum = e.length;
  //     console.log('number of bid requests', this.bidRequestNum);
  //   });
  // }

  // equals(o1, o2) {
  //   if (o1 != null && o2 != null) {
  //     return o1.code == o2.code ? true : false;
  //   }
  //   return false;
  // }

  // getQueuesForRejection(id) {
  //   this._setupService.getQueuesForRejectionByWfProId(id).subscribe((data) => {
  //     console.log('HHHHHHHHHH =' + id);
  //     this.rejectSteps = data;
  //   }
  //   );
  // }



  // approve(test) {
  //   console.log('test', test);
  //   this.fxBidCollationBatch.currentQueueId = this.destQueueId;
  //   this.fxBidCollationBatch.queueType = this.queueType;
  //   this.fxBidCollatonBatchService.pushtoworkflow(test).subscribe((data => {
  //     console.log('Prototype Map Created');
  //     this.router.navigate(['dashboard']);

  //   }), (err => {

  //     console.error(err);
  //     (err);
  //   }));


  // }
  // reject(inward) {
  //   if (this.fxBidCollationBatch.rejectQueueId === null) {

  //   }
  //   this.fxBidCollationBatch.currentQueueId = this.destQueueId;
  //   this.fxBidCollationBatch.queueType = this.queueType;
  //   this.fxBidCollatonBatchService.rejectbacktoworkflow(inward).subscribe((data => {
  //     this.router.navigate(['dashboard']);


  //   }), (err => {
  //     console.log(err);
  //     console.error(err);
  //     (err);
  //   }));
  // }
}
