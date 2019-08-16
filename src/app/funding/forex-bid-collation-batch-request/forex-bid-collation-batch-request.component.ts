import { Component, OnInit, Input, ViewChild, Output, EventEmitter, OnChanges, SimpleChange, ElementRef } from '@angular/core';
import { ForexBidCollationBatchRequest } from './forex-bid-collation-batch-request';
// import { ForexBidCollationBatchRequestService } from './forex-bid-collation-batch-request.service';

// import { ForexRequest } from '../forex-request/forex-request';
// import { ConfirmationDialogService } from '../../../components/confirmation-dialog/confirmation-dialog.service';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { ForexRequestService } from '../forex-request/forex-request.service';
// import { ForexBidCollationBatch } from '../forex-bid-collation-batch/forex-bid-collation-batch';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';
// import { Title } from '@angular/platform-browser';
// import { Currency } from '../../staticdata/currency/currency';
// import { CurrencyService } from '../../staticdata/currency/currency.service';

@Component({
  selector: 'app-forex-bid-collation-batch-request',
  templateUrl: './forex-bid-collation-batch-request.component.html',
  styleUrls: ['./forex-bid-collation-batch-request.component.css']
})
export class ForexBidCollationBatchRequestComponent implements OnInit {

  @Input() forexBidCollationBatch;
  @Input()
  bidCurrencyCode;

  @Output()
  emitService = new EventEmitter<any>();
  val: any
  // fxReq: ForexBidCollationBatchRequest = new ForexBidCollationBatchRequest();
  // fxBidCollReq: ForexBidCollationBatchRequest = new ForexBidCollationBatchRequest();
  // fxBidCollReqs: ForexBidCollationBatchRequest[] = [];
  // bidRequests: ForexBidCollationBatchRequest[] = [];
  // fxRequests: ForexRequest[] = [];
  // bidRequest: ForexRequest = new ForexRequest();
  // currencies: Currency[] = [];
  // selectedBidReuest: any;
  // selectedRequest: any;
  // closeResult: String;
  // fx: ForexRequest = new ForexRequest();
  // latestRequestId: number;
  // numOfBidRequests: any
  // bidRequestNum: number;
  // requests: any[];
  // fxObject: ForexBidCollationBatchRequest = new ForexBidCollationBatchRequest()
  // stringifyFx: any;
  // totalReqAmt: any;
  // fxBidCollationBatchList: ForexBidCollationBatchRequest[] = []
  // sortedData: any[] = [];
  // //fxList: Set<any> = new Set()
  // alertt = false;
  // fxList:any[];
  constructor(
    // private fxBidCollationRequestService: ForexBidCollationBatchRequestService,
    // private currencyService: CurrencyService,
    // private forexRequestService: ForexRequestService,
    // private _smp: ServerMessagePopUp,
    // private confirmationDialogService: ConfirmationDialogService, private modalService: NgbModal
    ) {
    // this.forexBidCollationBatch = new ForexBidCollationBatch();
    // this.totalReqAmt = 0
  }

  ngOnInit() {
    // this.fxObject.fxBidColBatch = this.forexBidCollationBatch;
    // const id = this.fxObject.fxBidColBatch.id;
    // console.log("jhedksfll", this.fxObject.fxBidColBatch)
    // // console.log("object",this.forexBidCollationBatch)
    // // console.log("object id",this.forexBidCollationBatch.id)
    // // console.log("id ",id)


  }

  // set(event: any, selectedBidReuest: any, selectedList:any[]) {

  //   this.selectedBidReuest = selectedBidReuest;
  //   this.fxList = selectedList;
  //   let index = selectedList.indexOf(selectedBidReuest);
   
  // }

  // //Remove an element from the list of bid request
  // delete(event){
  //   this.fxList.splice(event,1);
  //   this.ngOnInit();
  //   this.bidRequests = this.fxList
  
  //   let bidNum: any = this.emitService.emit({
  //     "bidRequests": this.bidRequests,
  //   });
   
  // }
  // selectFxRequest(event: any, selectedRequest: any) {
  //   this.selectedRequest = selectedRequest;
  //   console.log("Selected fxRequest", this.selectedRequest)
  //   this.fx = this.selectedRequest
  // }

  // createFxBidRequest() {
  //   console.log("enterrr ")
  //   //this.fxBidCollReq.fxBidColBatch = this.forexBidCollationBatch
  //   this.fxBidCollReq.referenceNum = this.fx.referenceNum;
  //   this.fxBidCollReq.requestAmtCurr = this.fx.requestAmountCurr
  //   this.fxBidCollReq.requestAmount = this.fx.requestAmount;
  //   this.fxBidCollReq.customer = this.fx.customer
  //   this.fxBidCollReq.exchRateAmt = this.fx.exchRateAmt
  //   this.fxBidCollReq.pendingAmt = this.fx.pendingAmt
  //   this.fxBidCollReq.allocatedAmt = this.fx.allocatedAmt
  //   this.fxBidCollReq.id = this.fx.id;
  //   if (this.fxBidCollationBatchList.findIndex(f => f.id === this.fxBidCollReq.id) === -1) {

  //     this.fxBidCollationBatchList.push(this.fxBidCollReq);

  //     this.fxBidCollReq = new ForexBidCollationBatchRequest();

  //     this.bidRequests = this.fxBidCollationBatchList
  //     console.log("gwjhehdhj", this.bidRequests)
  //     let bidNum: any = this.emitService.emit({
  //       "bidRequests": this.bidRequests,

  //     });

  //   }
  //   else {
  //     this._smp.popUpRecordAlreadyExist();
  //   }

  // }


  // getFxBidCollationRequest() {
  //   this.fxBidCollationRequestService.getFxBidCollationRequest(this.fxBidCollReq.id).subscribe(data => {
  //     this.fxBidCollReq = data;
  //   })
  // }
  // ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
  //   this.fxBidCollationRequestService.getFxBidCollationRequests().subscribe(data => {
  //     this.fxRequests = data
  //     console.log("fx data",data);
  //   });
  //   let temp = "";
  //   temp = changes.bidCurrencyCode.currentValue;
  //   console.log("temp is", temp)
  //   console.log("fx request code",this.fxRequests.forEach(e=>e.requestAmountCurr.code));
  //   this.sortedData = this.fxRequests.filter(x => x.requestAmountCurr.code === temp);
  //   console.log(this.fxRequests);
  //   console.log(this.sortedData);

  // }

  // reloadFxRequests() {
  //   this.fxBidCollationRequestService.getFxBidCollationRequests().subscribe(data => {
  //     this.fxRequests = data
  //   })
  // }

  // openFxBidRequest(bids) {
  //   console.log("bids",bids)
  //   if (this.bidCurrencyCode == null || this.bidCurrencyCode === "undefined") {
  //     this._smp.popUpSelectBidCurrency()
  //   }
  //   else {
  //     this.modalService.open(bids, { size: 'lg' }).result.then((result) => {
  //       this.createFxBidRequest();

  //       this.closeResult = `Closed with: ${result}`;
  //     }, (reason) => {
  //       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     });
  //   }


  // }

  // getcurrencies() {
  //   this.currencyService.getCurrencies().subscribe(data => {
  //     this.currencies = data;
  //   })
  // }

  // getLatestRequestId() {
  //   this.fxBidCollationRequestService.getFxBidCollationBatchRequestLatestId().subscribe(data => {
  //     this.latestRequestId = data;
  //   })
  // }



  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
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
