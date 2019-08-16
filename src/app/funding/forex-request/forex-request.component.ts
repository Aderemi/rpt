import { Component, OnInit } from '@angular/core';
// import { ForexRequest } from './forex-request';


// import { LocalStorageService, SessionStorageService } from 'angular-web-storage';
import { Router, ActivatedRoute } from '@angular/router';
// import { ForexRequestService } from './forex-request.service';

// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

// import { ForexSourceService } from '../forex-source/forex-source.service';
// import { ForexSource } from '../forex-source/forex-source';
// import { ForexRegistration } from '../forex-registration/forex-registration';
// import { WorkflowQueue } from 'src/app/class/workflow-queue';

// import { ProductCategory } from 'src/app/product-category/product-category';
// import { ProductSubCategory } from 'src/app/class/product-sub-category';
// import { Product } from 'src/app/product/product';
// import { WildcardComponent } from 'src/app/wildcard/components/wildcard/wildcard.component';
// import { Commons } from 'src/app/class/commons';
// import { ForeignExchangeDealsService } from 'src/app/foreign-exchange-deal/foreign-exchange-deals.service';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';
// import { ProductService } from 'src/app/product/product.service';
// import { DecimalPipe } from '@angular/common';
// import { RegistrationService } from 'src/app/registration/registration.service';
// import { WorkflowProcessSetupService } from 'src/app/services/workflow-processsetup.service';
// import { PartyCategoryService } from 'src/app/party-category/party-category.service';
// import { ChecklistService } from 'src/app/checklist/checklist.service';
// import { ChargeService } from 'src/app/charge/charge.service';
// import { ConfirmationDialogService } from 'src/app/components/confirmation-dialog/confirmation-dialog.service';
// import { BizProcessQueueEvent } from 'src/app/class/biz-process-queue-event';
// import { WorkflowProcessSetup } from 'src/app/class/workflow-processsetup';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';
// import { WorkflowActionService } from 'src/app/services/workflow-action.service';
// import { ErrorHandler } from '@angular/router/src/router';
import { HttpErrorResponse } from '@angular/common/http';

// import { CustomerService } from '../../staticdata/customer/customer.service';
// import { Currency } from '../../staticdata/currency/currency';
// import { AccountService } from '../../staticdata/account/account.service';
// import { Customer } from '../../staticdata/customer/customer';
// import { Account } from '../../staticdata/account/account';
// import { CurrencyService } from '../../staticdata/currency/currency.service';
// import { WarrantService } from '../../warrant/warrant/warrant.service';
// import { Warrant } from '../../warrant/warrant/warrant';
// import { RuleSetModel } from '../../rules/model/rule-set.model';
// import { BizProcessQueueEventValidationRule } from 'src/app/class/biz-process-queue-event-validation-rule';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-forex-request',
  templateUrl: './forex-request.component.html',
  styleUrls: ['./forex-request.component.css']
})
export class ForexRequestComponent implements OnInit {
  // fxRequest: ForexRequest = new ForexRequest();
  // currencies: Currency[];
  // decode: any;
  // name: string;
  // productName: String;
  // warrantRef: String;
  // fxRegister: ForexRegistration = new ForexRegistration();
  // destStep: String;
  // queueType: String;
  // destQueueId: number;
  // hash: any;
  // rejectSteps: WorkflowQueue[];
  // setChildren = true;
  // isTolerance: boolean;
  // isOtherApplicableRule: boolean;
  // prodSubCat: String;
  // customers: Customer[] = [];
  // customer: Customer = new Customer();
  // customerNumber: String;
  // code: String;
  // prodSubCatCode: String;
  // subCat: any;
  // productCategory: ProductCategory[] = [];
  // productSubCategory: ProductSubCategory[] = [];
  // products: Product[] = [];
  // pc: ProductCategory;
  enableFields: boolean;
  isNotEmpty: boolean;
  showButton: boolean;
  showInstrumentRegister: boolean;
  formattedLCAmount: String;
  cust: String;
  navItem: any;
  drafts: boolean;
  days: boolean;
  url: string;
  closeResult: String;
  isCustomerRate: boolean;
  tempLocalCurrAmt: String;
  tempBaseCurr: String;
  tempTentativeAmt: String;
  tempExchRate: String;
  tempRequestAmt: String;
  tempTradeInst: String;
  // forexSource: ForexSource[] = [];
  // accountName: String;
  // customerName: any
  // fxSource: any;
  // allocatedAmt: any = 0;
  // warrants: Warrant[] = []
  // accounts: Account[] = []
  // emit: Account
  // 
  isInTransit = false;
  // Events: BizProcessQueueEvent[];
  // wfSetup: WorkflowProcessSetup;
  // businessProId: number;
  // startQueueId: number;
  // startQueue: String;
  // CalculatedCharges: CalculatedChargeInfo[];
  // error:HttpErrorResponse;
  // responses:any[];
  // eventId;
  // queueId;
  // ruleSets:BizProcessQueueEventValidationRule[]=[]
  // ruleSetName:any[]=[]
  // rules:any[]=[]
  // pushRule:any[]=[];
  constructor(
    // public local: LocalStorageService,
    // private commonService: Commons,
    // public session: SessionStorageService,
    // private router: Router, private fxService: ForeignExchangeDealsService,
    // private fxRequestService: ForexRequestService,
    // private activatedRoute: ActivatedRoute,
    // private _smp: ServerMessagePopUp,
    // private productService: ProductService,
    // private _customerService: CustomerService,
    // private decimalPipe: DecimalPipe,
    // private instrumentRegService: RegistrationService,
    // private _setupService: WorkflowProcessSetupService,
    // private modalService: NgbModal,
    // private registrationService: RegistrationService,
    // private accountService: AccountService,
    // private partyService: PartyCategoryService,
    // private checklistService: ChecklistService,
    // private chargeService: ChargeService,
    // private currencyService: CurrencyService,
    // private forexSourceService: ForexSourceService,
    // private warrantService: WarrantService,
    // private actionService:WorkflowActionService,
    // private confirmationDialogService: ConfirmationDialogService
    ) {
    // this.fxRequest.effectiveDate = new Date();
    // this.fxRequest = new ForexRequest();

    // this.fxRegister = new ForexRegistration();
    // // this.fxRegister.product.product = new Product();
    // // this.fxRegister.product.product.productSubCategory = new ProductSubCategory();
    this.isNotEmpty = false;


  }

  ngOnInit() {

    // this.url = this.router.url.split('#')[0];

    // console.log("+++++++++++++++++++++++++++++++++++++++++=")
    // console.log("Enter here", this.isNotEmpty)
    // this.activatedRoute.params.subscribe(params => {
    //   this.decode = JSON.parse(atob(params.navItem));
    //   console.log("this is the decoded object", this.decode);
    //   this.fxRegister = this.decode.forexRegister;
    //   const operation = this.decode.operation;
    //   console.log(this.decode);
    //   console.log("Fx Register object", this.fxRegister);
    //   console.log("operation", operation);
    //   if (operation == "In Transit") {

    //     this.setChildren = false;
    //     this.destStep = this.decode.product.destStep;
    //     console.log("coddd", this.destStep)
    //     this.queueType = this.decode.product.queueType;
    //     this.destQueueId = this.decode.product.destQueueId;
    //     this.instrumentInTransitInit();
    //   } else {
    //     this.instrumentRegisterProductInit();
    //     this.getForexSources();
    //   }
    // }
    // );
    // this.currencyService.getCurrencies().subscribe((data => {
    //   this.currencies = data;
    //   console.log("Currencies", data);
    // }), (err => {

    // }));

    // this.getWfBusinessProcessSetupByCriteria();
  }

  // instrumentInTransitInit() {
  //   console.log("***************************************************************")
  //   this.isInTransit = true;
  //   this.fxRequest == this.decode.product;
  //   console.log("forex Request", this.fxRequest)
  //   let id = this.decode.product.id;
  //   console.log("Instrument product", id);
  //   this.getQueuesForRejection(id);
  //   this.getICPWorkflowByWfId(id)
  //   this.getQueuesForRejection(id);
  //   console.log("getWOrkflowbyId", this.getICPWorkflowByWfId(id));

  // }



  // createForexRequests()  {

  //   this.fxRequest.tradeInstrumentAmt = this.tempTradeInst;
  //   this.fxRequest.tentLocalCurrEquiAmt = this.tempTentativeAmt;
  //   this.fxRequest.localCurrEquiAmt = this.tempLocalCurrAmt;
  //   this.fxRequest.baseForCurrEquiRateAmt = this.tempBaseCurr
  //   this.fxRequest.requestAmount = this.tempRequestAmt
  //   this.fxRequest.exchRateAmt = this.tempExchRate
  //   this.fxRequest.allocatedAmt = this.allocatedAmt;
  //   this.fxRequest.allocatedAmtCurr = this.fxRequest.requestAmountCurr

  //   this.fxRequest.pendingAmt = (this.fxRequest.requestAmount - this.fxRequest.allocatedAmt);
  //   this.fxRequest.pendingAmtCurr = this.fxRequest.requestAmountCurr
  //   this.fxRequest.ruleSet = this.pushRule

  //   console.log("pusbdjnf",this.pushRule, " ruleseejff",this.fxRequest.ruleSet)
  //   console.log("objectvhdbndjkm",this.fxRequest)

  //   // this.ruleSets.forEach(e=>{
  //   //   this.pushRule.push(e.ruleSetGroupName)
  //   // })
  //   // console.log("entity",this.fxRequest,"rules ",this.pushRule)
  //   this.fxRequestService.createForexRequest(this.fxRequest).subscribe((data => {
    
  //     console.log("ruleSet",this.ruleSetName )
  //     this._smp.popUpAlertSuccess();

  //     this.router.navigate(['dashboard/baseMenu'])
  //     console.log(data);
  //   }), (err => {
  //     console.log(err);
  //     this.responses = err.error.responses;
  //     console.log( this.responses);
  //     let msg:string = " ";
  //     if (this.responses != null){
  //       this.responses.forEach(e=>{
  //         msg +=e.msg + " ";
  //         this._smp.popUpRules(msg);
  //       })
  
  //     }
      
  //     //this._smp.popUpAlertError("Unable to save");

  //   }))

  // }

  // enableCustomerRate() {
  //   console.log("hjek", this.isCustomerRate)
  //   if ("Bank_Rate" === this.fxRequest.exchTypeRate || "undefined" === this.fxRequest.exchTypeRate) {
  //     this.isCustomerRate = false;
  //   }
  //   else {
  //     this.isCustomerRate = true;
  //   }

  // }

  // getExchRateCurr(event) {
  //   console.log("event is", event)
  //   if (event == null) {
  //     this.fxRequest.tentLocalCurrEqui = String[""];
  //   }
  //   else {
  //     this.fxRequest.tentLocalCurrEqui = event.code;
  //   }
  // }
  // calculateExch() {

  // }
  // transformLocalCurrAmount() {
  //   this.fxRequest.localCurrEquiAmt = this.decimalPipe.transform(this.fxRequest.localCurrEquiAmt, '1.2');
  //   this.tempLocalCurrAmt = this.commonService.formatNumber(this.fxRequest.localCurrEquiAmt)

  // }
  // transformBaseCurrAmount() {
  //   this.fxRequest.baseForCurrEquiRateAmt = this.decimalPipe.transform(this.fxRequest.baseForCurrEquiRateAmt, '1.2');
  //   this.tempBaseCurr = this.commonService.formatNumber(this.fxRequest.baseForCurrEquiRateAmt)
  // }
  // transformTentativeLocalCurrency() {

  //   this.fxRequest.tentLocalCurrEquiAmt = this.decimalPipe.transform(this.fxRequest.tentLocalCurrEquiAmt, '1.2');
  //   this.tempTentativeAmt = this.commonService.formatNumber(this.fxRequest.tentLocalCurrEquiAmt)
  // }
  // transformExchRate() {
  //   if (null == this.fxRequest.requestAmount) {
  //     this.fxRequest.tentLocalCurrEqui = "NGN";
  //     this.fxRequest.tentLocalCurrEquiAmt = 0;
  //   }
  //   else {
  //     let numberArr: any[];
  //     numberArr = this.fxRequest.requestAmount.split(",")
  //     let newReqAmt: any = "";
  //     numberArr.forEach(e => {
  //       newReqAmt += e;
  //     })
  //     this.fxRequest.tentLocalCurrEqui = "NGN"
  //     this.fxRequest.tentLocalCurrEquiAmt = (this.fxRequest.exchRateAmt * newReqAmt)
  //     console.log("calculated", this.fxRequest.tentLocalCurrEquiAmt)
  //   }

  //   this.fxRequest.exchRateAmt = this.decimalPipe.transform(this.fxRequest.exchRateAmt, '1.2');
  //   this.tempExchRate = this.commonService.formatNumber(this.fxRequest.exchRateAmt)
  //   this.transformTentativeLocalCurrency();
  // }
  // transformRequestAmount() {

  //   this.fxRequest.requestAmount = this.decimalPipe.transform(this.fxRequest.requestAmount, '1.2');
  //   this.tempRequestAmt = this.commonService.formatNumber(this.fxRequest.requestAmount)

  // }
  // transformTradeInstrumentAmount() {
  //   this.fxRequest.tradeInstrumentAmt = this.decimalPipe.transform(this.fxRequest.tradeInstrumentAmt, '1.2');
  //   this.tempTradeInst = this.commonService.formatNumber(this.fxRequest.tradeInstrumentAmt)
  // }

  // // for operation in transit



  // getForexSources() {
  //   this.forexSourceService.getFxSources().subscribe(data => {
  //     this.forexSource = data;
  //     console.log("forex  sources", this.forexSource)
  //   })
  // }

  // displayAccountName() {
  //   console.log("acct", this.fxRequest.fundingAcctNum.accountNumber)
  //   this.accountService.getAccountByAccountNumber(this.fxRequest.fundingAcctNum.accountNumber).subscribe(data => {
      
  //     this.fxRequest.fundingAcctNum = data;
  //     this.fxRequest.fundingAcctNum.accountName = this.fxRequest.fundingAcctNum.accountName
  //     console.log("Account Name", this.accountName);
  //   })
  // }
  // getAccounts() {

  // }
  // //for new instrument register

  // instrumentRegisterProductInit() {
  //   console.log("get in", this.fxRequest)
  //   this.fxRequest.id = this.fxRegister.id;
  //   console.log("fx id", this.fxRequest.id)
  //   //this.fxRequest.warrantRef.id = this.fxRegister.id
  //   this.fxRequest.referenceNum = this.fxRegister.referenceNum;
  //   this.fxRequest.prod = this.fxRegister.product.description;
  //   this.fxRequest.productSubCat = this.fxRegister.product.productSubCategory.description
  //   this.fxRequest.customer = this.fxRegister.customer.fullname
  //   console.log("custommmer", this.fxRequest.customer)

  //   //this.customerName = this.fxRegister.customer.name
  //   console.log("cust", this.fxRequest.customer)
  //   this.fxRequest.homeBranch = this.fxRegister.homeBranch;
  //   this.fxRequest.servicingBranch = this.fxRegister.servicingBranch
  //   this.fxRequest.effectiveDate = this.fxRegister.effectiveDate
  //   this.fxRequest.status = this.fxRegister.status
  //   this.fxRequest.relationshipMgt = this.fxRegister.relatioinshipMgt

  // }

  // open(event) {
  //   if (event == "Warrant Reference") {
  //     console.log("customer", this.fxRegister.customer)
  //     let custt;
  //     custt = this.fxRegister.customer.fullname
  //     this.warrantService.getUserWarrant(custt).subscribe(data => {
  //       this.warrants = data;
  //       console.log("Warrants ", this.warrants)

  //       const modalRef = this.modalService.open(WildcardComponent, { size: 'lg' });
  //       modalRef.componentInstance.warrants = this.warrants
  //       modalRef.componentInstance.title = event
  //       modalRef.componentInstance.emitService.subscribe(emittedValue => {
  //         console.log("emit", emittedValue)
  //         this.fxRequest.warrantRef = emittedValue
  //         this.fxRequest.tradeInstrumentAmt = emittedValue.approvedAmount
  //         this.fxRequest.tradeInstrumentCurr = emittedValue.approvedAmountCcy.code
  //         this.transformTradeInstrumentAmount()
  //         // this.fxRegister.product=emittedValue;
  //       })
  //     })



  //   }
  //   else if (event == "Accounts") {

  //     this.accountService.getAccounts().subscribe(data => {
  //       this.accounts = data;
  //       console.log("Accounts", this.accounts)
  //       const modalRef = this.modalService.open(WildcardComponent, { size: 'lg' });
  //       modalRef.componentInstance.accounts = this.accounts
  //       modalRef.componentInstance.title = event
  //       modalRef.componentInstance.emitService.subscribe(emittedValue => {
  //         // let emit:ReferenceAccount = new ReferenceAccount()
  //         this.emit = emittedValue
  //         this.fxRequest.fundingAcctNum = this.emit
  //         // this.fxRequest.fundingAcctNum.accountName = this.emit.accountName

  //       })

  //     })


  //   }

  // }
  // equals(o1, o2) {
  //   if (o1 != null && o2 != null) {

  //     return o1.code == o2.code ? true : false;
  //   }
  //   return false;
  // }

  // getICPWorkflowByWfId(id) {
  //   console.log("get in here", id)
  //   this.fxRequestService.getICPWorkflowByWfId(id).subscribe((data) => {
  //     console.log("ejkcl", data)


  //     this.fxRequest = data;
  //     this.fxRequest.forexSource.description = data.forexSource.description
  //     console.log("forsource", this.fxRequest.forexSource)
  //     console.log("accccttt", this.fxRequest.fundingAcctNum)

  //     this.enableCustomerRate();

  //     console.log(this.fxRequest)


  //     this.fxRequestService.getForexRequest(data.id).subscribe(insRRgData => {
  //       this.fxRequest = insRRgData;
  //       console.log("dxdfc", this.fxRequest)
  //       console.log("instrument reg of inward", insRRgData);
  //       this.setChildren = true;

  //     });

  //     console.log("destStep = " + this.destStep);
  //     console.log(data);
  //   }), (err => {
  //     console.log(err);
  //   });
  // }



  // getQueuesForRejection(id) {
  //   this._setupService.getQueuesForRejectionByWfProId(id).subscribe((data) => {
  //     console.log('HHHHHHHHHH =' + id);
  //     this.rejectSteps = data;
  //   }
  //   );
  // }

  // getAllBusinessprocessEventByBusProcIdAndQueueId() {

  //   this.actionService.getAllBusinessProcessEvents(this.startQueueId, this.businessProId).subscribe((data => {
  //     this.Events = data;
  //     console.log("event",this.Events)
  //     this.Events.forEach(e=>{
  //       this.eventId= e.id
  //       this.queueId = e.queId
  //     })
  //     console.log("Event id ",this.eventId, " queue id ", this.queueId )
  //     this.getRuleSetsByEventIdAndQueueId(this.eventId,this.queueId);
  //   }), (err => {

  //   }));
  // }

  // getRuleSetsByEventIdAndQueueId(eventId,queueId){
  //   this.fxRequestService.getAllRuleSets(eventId,queueId).subscribe(data=>{
  //     this.ruleSets = data;
  //     console.log("rule sets ",this.ruleSets)
  //     this.ruleSets.forEach(rules=>{
  //       //this.ruleSetName = rules.ruleSetGroupName
  //       console.log("RULE Name",this.ruleSetName)
  //       this.pushRule.push(rules.ruleSetGroupName)
  //           console.log("entity",this.fxRequest,"rules ",this.pushRule)

  //       this.getRulesByRuleSet(this.ruleSets)
  //     })
  //   })
  // }
  // getRulesByRuleSet(name){
  //   this.fxRequestService.getRules(name).subscribe(data=>{
  //     this.rules = data
  //     console.log("Rules",this.rules)
  //   })
  // }
  // getWfBusinessProcessSetupByCriteria() {
  //   this.actionService.getWfBusinessProcessSetupByCriteria("FXS", "fxRequest").subscribe((data => {
  //     this.wfSetup = data;
  //     this.businessProId = this.wfSetup.id;
  //     this.startQueue = this.wfSetup.startQueue;
  //     console.log('nnnnnn =' + this.startQueue);
  //     this.startQueueId = this.wfSetup.startQueueId;
  //     this.getAllBusinessprocessEventByBusProcIdAndQueueId();
  //   }), (err => {

  //   }));
  // }

  // getCalculatedCharges() {
  //   console.log('Queuid = ' + this.startQueueId);
  //   console.log('customerId=' + this.fxRegister.customer.id);
  //   //this.test.customerId
  //   this.fxRequest.requestAmount = this.commonService.formatNumber(this.fxRequest.requestAmount)
  //   this.fxRequest.tradeInstrumentAmt = this.commonService.formatNumber(this.fxRequest.tradeInstrumentAmt)
  //   this.fxRequest.jobDataId = this.fxRequest.id;
  //   console.log("uhjbjknjk",this.fxRequest)
  //   this.fxRequestService.getAllCalculatedCharge(this.fxRequest.busProEventId, this.fxRegister.customer.id, this.fxRequest.transactionAmount, this.fxRequest.id, this.fxRequest).subscribe((data => {
  //     this.CalculatedCharges = data;
  //   }), (err => {

  //   }));
  // }
  // UpdateCharge(id) {
  //   // this.router.navigate(['/calculated-charge-info', id]);
  //   this.router.navigate(['/calculated-charge-info'], { queryParams: { id: id, destStep: this.startQueue, queueType: 'Input', destQueueId: this.startQueueId, businessProId: this.businessProId } });

  //   // this.actionService.updatedData(this.chargeSetup);
  //   //this.router.navigate(['/charge-tier']);
  // }

  // approve(test) {
  //   console.log("test", test)
  //   this.fxRequest.currentQueueId = this.destQueueId;
  //   this.fxRequest.queueType = this.queueType;
  //   console.log("dwf", this.fxRequest.currentQueueId, " ew", this.fxRequest.queueType)
  //   this.fxRequestService.pushtoworkflow(test).subscribe((data => {
  //     console.log('Prototype Map Created');
  //     this.router.navigate(['dashboard/baseMenu'])
  //     //this.initForm();
  //     // this.gotoDashboard();
  //   }), (err => {
  //     // console.log('Could not create a Template');

  //     console.error(err);
  //     (err)
  //   }));


  // }
  // reject(inward) {
  //   if (this.fxRequest.rejectQueueId === null) {

  //   }
  //   this.fxRequest.currentQueueId = this.destQueueId;
  //   this.fxRequest.queueType = this.queueType;
  //   this.fxRequestService.rejectbacktoworkflow(inward).subscribe((data => {
  //     //  this.gotoDashboard();
  //     this.router.navigate(['dashboard/baseMenu'])


  //   }), (err => {
  //     console.log(err);
  //     console.error(err);
  //     (err)
  //   }));
  // }





}
