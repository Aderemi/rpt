import { Component, OnInit } from '@angular/core';
import { InwardCollectionPayment } from '../../class/inward-collection-payment';

import { Router, ActivatedRoute } from '@angular/router';


import { InwardCollectionPaymentService } from '../../service/inward-collection-payment.service';



// import { BizProcessQueueEvent } from 'src/app/class/biz-process-queue-event';
// import { WorkflowProcessSetup } from 'src/app/class/workflow-processsetup';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';

// import { WorkflowActionService } from 'src/app/services/workflow-action.service';
// import { LocationRouter } from 'src/app/class/LocationRouter';
// import { InwardCollectionMaster } from '../../../inward-collection-master/class/inward-collection-master';

// import { WorkflowQueue } from 'src/app/class/workflow-queue';
// import { InstrumentRegister } from 'src/app/registration/registration';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';
// import { RegistrationService } from 'src/app/registration/registration.service';
// import { WorkflowProcessSetupService } from 'src/app/services/workflow-processsetup.service';
// import { InwardCollectionMasterService } from '../../../inward-collection-master/service/inward-collection-master.service';
// import { Currency } from 'src/app/modules/staticdata/currency/currency';
// import { PickListItem } from 'src/app/modules/staticdata/picklistitem/picklistitem';
// import { CurrencyService } from 'src/app/modules/staticdata/currency/currency.service';
// import { PickListItemService } from 'src/app/modules/staticdata/picklistitem/picklistitem.service';

@Component({
  selector: 'app-inward-collection-payment',
  templateUrl: './inward-collection-payment.component.html',
  styleUrls: ['./inward-collection-payment.component.css']
})
export class InwardCollectionPaymentComponent implements OnInit {
//   inward : InwardCollectionMaster = new InwardCollectionMaster();
//   inwardPay :InwardCollectionPayment = new InwardCollectionPayment();
//   decode : any;
//   name : string;
//   productName : String;
//   warrantRef : String;
//   reference : string;
//   instrumentRegister : InstrumentRegister;
//   productSubCategory : string;
//   destStep: String;
//   queueType: String;
//   destQueueId: number;
//   currencies : Currency[];
//   cancelReasonCode = "INWCNL";
//   responceStatusCode = "ICPRS"
//   cancellationActionCode = "ICPCA"
//   reasons : PickListItem[];
//   cActions : PickListItem[]
//   cResStatus : PickListItem[];
//   facilityReferenceFlag :boolean;
//   rejectSteps: WorkflowQueue[];
//   setChildren = true;
//   //
//   isInTransit = false;

//  //-------new workflow
//  Events: BizProcessQueueEvent[];
//  wfSetup: WorkflowProcessSetup;
//  businessProId:number;
//  startQueueId:number;
//  startQueue:string;
//  CalculatedCharges: CalculatedChargeInfo[];

//  navItem : any;

  constructor(
    // private router:Router, private activatedRoute:ActivatedRoute, private  locator :LocationRouter,
    //  private _smp : ServerMessagePopUp, private _inwardPayServ : InwardCollectionPaymentService,
    //  private _pickListItemService : PickListItemService, private registrationService:RegistrationService,
    //   private _setupService: WorkflowProcessSetupService,
    //   private _masterService : InwardCollectionMasterService,
    //   private actionService: WorkflowActionService,
    //   private _currService : CurrencyService
  ) {
    // this.facilityReferenceFlag = true;


 }

 scroll(el: HTMLElement){
  let jboy = el.offsetTop - 55;
  window.scroll({ top: jboy, behavior: "smooth" });
}

  ngOnInit() {
//     console.log("+++++++++++++++++++++++++++++++++++++++++=")
//     this.activatedRoute.params.subscribe(params=>{
//        this.decode = JSON.parse(atob(params.navItem));
//       console.log("this is the decoded object");

//      this._pickListItemService.getPickListItemByCode(this.cancelReasonCode).subscribe(data=>{
//       this.reasons = data;
//      });
//      this._pickListItemService.getPickListItemByCode(this.cancellationActionCode).subscribe(data=>{
//       this.cActions = data;
//      });
//      this._pickListItemService.getPickListItemByCode(this.responceStatusCode).subscribe(data=>{
//       this.cResStatus = data;
//      });


//       this.instrumentRegister = this.decode.instrumentRegister;
//     //  console.log(decode.product)

//       const operation = this.decode.operation;
//       console.log(this.decode);
//       if(operation == "In Transit"){
//         this.setChildren = false;
//         this.destStep = this.decode.product.destStep;
//         this.queueType = this.decode.product.queueType;
//         this.destQueueId = this.decode.product.destQueueId;
//  //       this.instrumentInTransitInit();
//       }else{
//        this.instrumentRegisterProductInit();
//       }
    }
//     );
// this._currService.getCurrencies().subscribe((data=>{
//   this.currencies  = data;
// }));
// this.getWfBusinessProcessSetupByCriteria();
//   }

//   facilityReferenceFlagCheck(){
//     if(this.inwardPay.paymentOption == "Pay With Bank Finance" || this.inwardPay.paymentOption =="Pay With Bank Syndicate" ){
//       this.facilityReferenceFlag = false;
//     }else {
//       this.facilityReferenceFlag = true;
//     }
//   }


//   createInwardCollectionPay(){

//   //  this.inward.instrumentRegister = this.instrumentRegister;
//     console.log("import before")
//     console.log(this.inwardPay);
//     this.inwardPay.master = this.inward;
//     this._inwardPayServ.create(this.inwardPay).subscribe((data=>{
//       this._smp.popUpAlertSuccess();
//       console.log("inward after")
//       console.log(this.inwardPay);
//       this.router.navigate(['dashboard'])
//       console.log(data);
//     }), (err=>{
//       console.log(err);
//       this._smp.popUpAlertError("Unable to save");

//     }))

//   }

// // for operation in transit

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


// //for new instrument register

// instrumentRegisterProductInit(){
//   this.instrumentRegister = this.decode.instrumentRegister;
//  //  this.instrumentRegister = this._localSession.get("instrumentRegister").body;

//  // GET THE JOB DESCRI[PTION  ID FROM THE WF-JOB ITEM TABLE





//    console.log("This is instrument register: ");

//   console.log(this.instrumentRegister);
//   this.inward.id = this.instrumentRegister.id;


//   // FETCH THE IMPORLETTER OF CREDIT aSSOCIATED WITH THIS ID
//   this._masterService.getMaster(this.inward.id).subscribe((data=>{
//     console.log("this is the inward fetched",data)
//     this.inward = data;
//     console.log("This is the inward editorData from the editorData base",editorData);
//   }),(err=>{
//     console.log("Thios is the error",err);
//   }));

// console.log(this.instrumentRegister);
// this.inwardPay.reference = this.instrumentRegister.reference+this.getExtension();
//   this.productName = this.instrumentRegister.product.description;
//   this.productSubCategory = this.instrumentRegister.product.productSubCategory.description;
//   this.warrantRef = this.instrumentRegister.warrantRef;
//  this.inward.id = this.instrumentRegister.id;

//   if(this.instrumentRegister.customer != null && this.instrumentRegister.customer != undefined){
//     this.name = this.instrumentRegister.customer.fullname;
//   }

// }


// equals(o1, o2) {
//   if(o1 != null && o2 != null){
//    return  o1.code == o2.code ? true : false;
//   }
//   return false;
// }











// getICPWorkflowByWfId(id) {
//   this._inwardPayServ.getICPWorkflowByWfId(id).subscribe((data) => {
//     this.inwardPay = data;
//     this.inward = this.inwardPay.master;
//     this.registrationService.getfindOneInstrumentRegisterd(this.inward.id).subscribe(insRRgData=>{
//       this.instrumentRegister = insRRgData;
//       console.log("instrument reg of import");
//       this.setChildren = true;
//       console.log(this.instrumentRegister);
//       this.productName = this.instrumentRegister.product.description;
//     this.warrantRef = this.instrumentRegister.warrantRef;
//     if(this.instrumentRegister.customer != null && this.instrumentRegister.customer != undefined){
//       this.name = this.instrumentRegister.customer.fullname;
//     }
//     });

//   //  this.inward.reference = this.instrumentRegister.reference;

//   console.log(this.inwardPay.destStep);
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
//   this.inwardPay.currentQueueId = this.destQueueId;
//   this.inwardPay.queueType = this.queueType;
//   this._inwardPayServ.pushtoworkflow(test).subscribe((data => {
//     console.log('Prototype Map Created');
//     //this.initForm();
//    // this.gotoDashboard();
//   }), (err => {
//     // console.log('Could not create a Template');
//     console.log(err);
//     console.error(err);
//     (err)
//   }));


// }
// reject(inward) {
//   if (this.inwardPay.rejectQueueId === null) {

//   }
//   this.inwardPay.currentQueueId = this.destQueueId;
//   this.inwardPay.queueType = this.queueType;
//   this._inwardPayServ.rejectbacktoworkflow(inward).subscribe((data => {
//   //  this.gotoDashboard();
//   }), (err => {
//     console.log(err);
//     console.error(err);
//     (err)
//   }));
// }


// //--new workflow
// getWfBusinessProcessSetupByCriteria()
// {

//   this.actionService.getWfBusinessProcessSetupByCriteria("ICOP","Pay").subscribe((data => {

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
//   this.inwardPay.jobDataId=this.inwardPay.id;
//   this._inwardPayServ.getAllCalculatedCharge(this.inwardPay.busProEventId, this.instrumentRegister.customer[0].id, this.inwardPay.transactionAmount, this.inwardPay.id,this.inwardPay).subscribe((data => {
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

// doView(ref, id){
//   // get from workflow history all event associated to this reference
//   // get use the id of the instrument on its entity class

//   // use the id to call the instrument in case of issue or receive, in the case of --
//   // ammend or accept etc, get the master first and get the id of the master to get the instrument register




//   // call the get history method passi the reference as the parameter

// // get the registration
// this.registrationService.getfindOneInstrumentRegisterd(id).subscribe(data =>{
//   this.instrumentRegister = data;

// });
// this._inwardPayServ.getOne(id).subscribe(data =>{

//   console.log(data);

//   this.inwardPay = data;
// });
//   this.getHistory(ref);

// }

// obj : any;
// getHistory(reference){
//   this._masterService.getWFItem(reference).subscribe((data =>{
//     this.obj = data;
//     console.log("------------------------>>>"+this.obj);
//   }));
// }

// goToEvents(str, obj){

//   console.log(str); // the class name
//   console.log(obj); //
//   switch(str){
//     case 'ImportLetterCredit':
//     this.navItem = {
//       'operation': "View",
//       'id': obj[4],
//       'ref' : obj[3]
//     }

//     this.router.navigate(['importLetterCredit', btoa(JSON.stringify(this.navItem))]);

//     break;
//   }


// }
// goToMaster(){


//   this.navItem = {
//     'operation' : "View",
//     'instrumentRegister' : this.instrumentRegister
//   }
// this.locator.getViewLocation(this.instrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
// }


// getExtension(){
//   let ext = "";
//   ;
//     let p = this.instrumentRegister.product.businessProcess;
//     for(let i = 0; i < p.length; i++){
//       if(p[i].serviceRef.code === "Pay"){
//         ;
//         let nextNo = this.instrumentRegister.lastNo + this.instrumentRegister.incrmt;
//         ext += p[i].surfix+this.instrumentRegister.delim+this.padNumber(nextNo, this.instrumentRegister.width);
//         break;
//       }
//     }
//     return ext;
// }


// padNumber(num, size) {
//   let s = num+"";
//   ;
//   while (s.length < size) s = "0" + s;
//   console.log(s)
//   return s;
// }

  }
