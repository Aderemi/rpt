import { Component, OnInit } from '@angular/core';
import { InwardBankPayment } from '../inward-bank-payment';

// import { LocalStorageService, SessionStorageService } from 'angular-web-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { InwardBankPaymentService } from '../inward-bank-payment.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


// import { CurrencyService } from 'src/app/modules/staticdata/currency/currency.service';
// import { Currency } from 'src/app/modules/staticdata/currency/currency';
// import { InstrumentRegister } from 'src/app/registration/registration';
// import { WorkflowQueue } from 'src/app/class/workflow-queue';
// import { BizProcessQueueEvent } from 'src/app/class/biz-process-queue-event';
// import { WorkflowProcessSetup } from 'src/app/class/workflow-processsetup';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';
// import { WorkflowProcessSetupService } from 'src/app/services/workflow-processsetup.service';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';
// import { RegistrationService } from 'src/app/registration/registration.service';

// import { WorkflowActionService } from 'src/app/services/workflow-action.service';

@Component({
  selector: 'app-inward-bank-payment',
  templateUrl: './inward-bank-payment.component.html',
  styleUrls: ['./inward-bank-payment.component.css']
})
export class InwardBankPaymentComponent implements OnInit {


  // inward :InwardBankPayment = new InwardBankPayment();
  // currencies : Currency[];
  // decode : any;
  // name : string;
  // productName : String;
  // warrantRef : String;
  // instrumentRegister : InstrumentRegister;
  // destStep: String;
  // queueType: String;
  // destQueueId: number;
  // hash : any;
  // rejectSteps: WorkflowQueue[];
  // setChildren = true;
  // // 
  // isInTransit = false;


  //  // NEW WORKFLOW
  //  Events: BizProcessQueueEvent[];
  //  wfSetup: WorkflowProcessSetup;
  //  businessProId:number;
  //  startQueueId:number;
  //  startQueue:string;
  //  CalculatedCharges: CalculatedChargeInfo[];

  constructor(
//     public _localSession: LocalStorageService,public session: SessionStorageService, private router:Router,
//    private  inwardBankPaymentService:InwardBankPaymentService,
//     private activatedRoute:ActivatedRoute,  private actionService: WorkflowActionService, 
//  private registrationService:RegistrationService, 
//    private _setupService: WorkflowProcessSetupService,
//    private _smp : ServerMessagePopUp,
//    private currencyService : CurrencyService

  ) { }

  
 scroll(el: HTMLElement){
  let jboy = el.offsetTop - 55;
  window.scroll({ top: jboy, behavior: "smooth" });
}


  ngOnInit() {

   
    // console.log("+++++++++++++++++++++++++++++++++++++++++=")
    // this.activatedRoute.params.subscribe(params=>{
    //    this.decode = JSON.parse(atob(params.navItem));
    //   console.log("this is the decoded object");
      
     
  //  //   this.instrumentRegister = decode;
  //   //  console.log(decode.product)
  //     const operation = this.decode.operation;
  //     console.log(this.decode);
  //     if(operation == "In Transit"){
  //       this.setChildren = false;
  //       this.destStep = this.decode.product.destStep;
  //       this.queueType = this.decode.product.queueType;
  //       this.destQueueId = this.decode.product.destQueueId;
  //     this.instrumentInTransitInit();
  //     }else{
  //       this.instrumentRegisterProductInit();
  //     }
    }
//     );


//     this.currencyService.getCurrencies().subscribe((data=>{
//       this.currencies = data;
//       console.log(data);
    
//     }),(err=>{
 
//     }));

//     this.currencyService.getCurrencies().subscribe((data=>{
//       this.currencies = data;
//       console.log(data);
    
//     }),(err=>{
 
//     }));

//   }

//   createInwardBankPayment(){
 
//     //  this.inward.instrumentRegister = this.instrumentRegister;
//       console.log("inward before")
//       console.log(this.inward);
//       this.inwardBankPaymentService.create(this.inward).subscribe((data=>{
//         this._smp.popUpAlertSuccess();
//         console.log("inward after")
//         console.log(this.inward);
//         this.router.navigate(['dashboard'])
//         console.log(data);
//       }), (err=>{
//         console.log(err);
//         this._smp.popUpAlertError("Unable to save");
  
//       }))
      
//     }

//     // for operation in transit

// instrumentInTransitInit(){
//   this.isInTransit= true;
//  // this.inward == this.decode.product;
//   let id = this.decode.product.id;
//  // this.inward = this._localSession.get("transitProduct");
//  console.log(id)
//   this.getQueuesForRejection(id);
//   this.getICPWorkflowByWfId(id)
//   this.getQueuesForRejection(id);

// }



// instrumentRegisterProductInit(){
//   this.instrumentRegister = this.decode.instrumentRegister;
//  //  this.instrumentRegister = this._localSession.get("instrumentRegister").body;

//    console.log("This is instrument register: ");

//   console.log(this.instrumentRegister);
//   this.inward.id = this.instrumentRegister.id;

//   this.inward.refNumber = this.instrumentRegister.reference;
//   this.productName = this.instrumentRegister.product.description;
//   this.warrantRef = this.instrumentRegister.warrantRef;
//   this.inward.id = this.instrumentRegister.id;
//   if(this.instrumentRegister.customer != null && this.instrumentRegister.customer != undefined){
//     this.name = this.instrumentRegister.customer[0].name;
//   }

//   // workflow
//   this.currencies = this.instrumentRegister.product.currency;

  
//   this.getWfBusinessProcessSetupByCriteria();
// }

// equals(o1, o2) {
//   if(o1 != null && o2 != null){

//    return  o1.code == o2.code ? true : false;
//   }
//   return false;
// }


// getICPWorkflowByWfId(id) {
//   this.inwardBankPaymentService.getICPWorkflowByWfId(id).subscribe((data) => {
//     this.inward = data;
//     this.registrationService.getfindOneInstrumentRegisterd(data.id).subscribe(insRRgData=>{
//       this.instrumentRegister = insRRgData;
//       console.log("instrument reg of inward");
//       this.setChildren = true;
//       console.log(this.instrumentRegister);
//       this.productName = this.instrumentRegister.product.description;
//     this.warrantRef = this.instrumentRegister.warrantRef;
//     if(this.instrumentRegister.customer != null && this.instrumentRegister.customer != undefined){
//       this.name = this.instrumentRegister.customer[0].name;
//     }
//     });
  
//   //  this.inward.reference = this.instrumentRegister.reference;

//   console.log(this.inward.destStep);
//   console.log("destStep = " + this.destStep);
//     console.log(data);
//   }),(err=>{
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



// approve(test) {
//   this.inward.currentQueueId = this.destQueueId;
//   this.inward.queueType = this.queueType;
//   this.inwardBankPaymentService.pushtoworkflow(test).subscribe((data => {
//     console.log('Prototype Map Created');
//     this.router.navigate(['dashboard']);
//    // this.gotoDashboard();
//   }), (err => {
//     // console.log('Could not create a Template');
//     console.log(err);
//     console.error(err);
//     (err)
//   }));


// }
// reject(inward) {
//   if (this.inward.rejectQueueId === null) {

//   }
//   this.inward.currentQueueId = this.destQueueId;
//   this.inward.queueType = this.queueType;
//   this.inwardBankPaymentService.rejectbacktoworkflow(inward).subscribe((data => {
//     this.router.navigate(['dashboard']);
//   }), (err => {
//     console.log(err);
//     console.error(err);
//     (err)
//   }));
// }
// //--new workflow
// getWfBusinessProcessSetupByCriteria()
// {
  
//   this.actionService.getWfBusinessProcessSetupByCriteria("IBP","Issue").subscribe((data => {
    
//     this.wfSetup = data;
//     this.businessProId = this.wfSetup.id;
//     this.startQueue = this.wfSetup.startQueue;
//     console.log('nnnnnn ='+this.startQueue);
//     this.startQueueId = this.wfSetup.startQueueId;
//    this.getAllBusinessprocessEventByBusProcIdAndQueueId();
//     }), (err => {

//     }));
// }
// getAllBusinessprocessEventByBusProcIdAndQueueId() {
  
//   this.actionService.getAllBusinessProcessEvents(this.startQueueId, this.businessProId).subscribe((data => {
//   this.Events = data;

//   }), (err => {

//   }));
// }
// getCalculatedCharges() {
//   console.log('Queuid = ' + this.startQueueId);
//   console.log('customerId=' + this.instrumentRegister.customer[0].id);
//   //this.test.customerId
//   this.inward.jobDataId=this.inward.id;
//   this.inwardBankPaymentService.getAllCalculatedCharge(this.inward.busProEventId, this.instrumentRegister.customer[0].id, this.inward.transactionAmount, this.inward.id,this.inward).subscribe((data => {
//     this.CalculatedCharges = data;
//   }), (err => {

//   }));
// }
// UpdateCharge(id)
// {
//  // this.router.navigate(['/calculated-charge-info', id]);
//   this.router.navigate(['/calculated-charge-info'], { queryParams: { id: id, destStep: this.startQueue, queueType: 'Input', destQueueId: this.startQueueId, businessProId: this.businessProId } });

//  // this.actionService.updatedData(this.chargeSetup);
//   //this.router.navigate(['/charge-tier']);
// }
}