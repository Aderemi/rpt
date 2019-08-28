import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
// import { InwardCollectionOrderReceivedService } from '../../../inward-collection-order-received/service/inward-collection-order-received.service';
// import { InwardCollectionAmendmentService } from '../../service/inward-collection-amendment.service';
// import { BizProcessQueueEvent } from 'src/app/class/biz-process-queue-event';
// import { WorkflowProcessSetup } from 'src/app/class/workflow-processsetup';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';
// import { LocationRouter } from 'src/app/class/LocationRouter';
// import { WorkflowActionService } from 'src/app/services/workflow-action.service';
// import { InwardCollectionMaster } from '../../../inward-collection-master/class/inward-collection-master';
// import { InwardCollectionAmendment } from '../../class/inward-collection-amendment';
// import { InstrumentRegister } from 'src/app/registration/registration';
// import {Currency } from 'src/app/modules/staticdata/currency/currency';
// import { PickListItem } from 'src/app/modules/staticdata/picklistitem/picklistitem';
// import { WorkflowQueue } from 'src/app/class/workflow-queue';
// import {CurrencyService } from 'src/app/modules/staticdata/currency/currency.service';
// import { WorkflowProcessSetupService } from 'src/app/services/workflow-processsetup.service';
// import { PickListItemService } from 'src/app/modules/staticdata/picklistitem/picklistitem.service';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';
// import { InwardCollectionMasterService } from '../../../inward-collection-master/service/inward-collection-master.service';
import { RegistrationService } from 'src/app/registration/registration.service';

@Component({
  selector: 'app-inward-collection-amendment',
  templateUrl: './inward-collection-amendment.component.html',
  styleUrls: ['./inward-collection-amendment.component.css']
})
export class InwardCollectionAmendmentComponent implements OnInit {

  // inward :InwardCollectionMaster = new InwardCollectionMaster();
  // inwardAmend :InwardCollectionAmendment = new InwardCollectionAmendment();
  // decode : any;
  // name : string;
  // productName : String;
  // warrantRef : String;
  // reference : string;
  // instrumentRegister : InstrumentRegister;
  // destStep: String;
  // queueType: String;
  // destQueueId: number;
  // currencies :Currency[];
  // cancelReasonCode = "INWCNL";
  // responceStatusCode = "ICPRS"
  // cancellationActionCode = "ICPCA"
  // reasons : PickListItem[];
  // cActions : PickListItem[]
  // cResStatus : PickListItem[];
  // productSubCategory : string;
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
  //  view : boolean;

  //  navItem : any;


  constructor( private router:Router, private activatedRoute:ActivatedRoute,
    //  private _smp : ServerMessagePopUp, private  locator :LocationRouter,
    //  private _inwardColAmendServ : InwardCollectionAmendmentService,
    //  private _pickListItemService : PickListItemService,
    //   private registrationService:RegistrationService,
    //  private _setupService: WorkflowProcessSetupService,
    //  private  _masterService : InwardCollectionMasterService,
    //  private actionService: WorkflowActionService,
    //   private _currService :CurrencyService
  ) {

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
//        this.instrumentInTransitInit();
//       }else{
//        this.instrumentRegisterProductInit();
//       }
//     }
//     );
// this._currService.getCurrencies().subscribe((data=>{
//   this.currencies  = data;
// }));
// this.getWfBusinessProcessSetupByCriteria();
//   }




//   createInwardCollectionAmend(){

//   //  this.inward.instrumentRster = this.instrumentRegister;
//     console.log("import before")
//     console.log(this.inwardAmend);
//     this.inwardAmend.master = this.inward;
//     this._inwardColAmendServ.create(this.inwardAmend).subscribe((data=>{
//       this._smp.popUpAlertSuccess();
//       console.log("inward after")
//       console.log(this.inwardAmend);
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
// this.inwardAmend.reference = this.instrumentRegister.reference+this.getExtension();
//   this.productName = this.instrumentRegister.product.description;
//   this.warrantRef = this.instrumentRegister.warrantRef;
//  this.inward.id = this.instrumentRegister.id;
//  this.productSubCategory = this.instrumentRegister.product.productSubCategory.description;

//   if(this.instrumentRegister.customer != null && this.instrumentRegister.customer != undefined){
//     this.name = this.instrumentRegister.customer.fullname;
//   }

// }


// equals(o1, o2) {
//   if(o1 != null && o2 != null){
//     // console.log("-------------------")
//     // console.log(o1.code)
//     // console.log(o2.code)
//     // console.log(o1.code == o2.code)
//     // console.log("-------------------")
//    return  o1.code == o2.code ? true : false;
//   }
//   return false;
// }









// getICPWorkflowByWfId(id) {
//   this._inwardColAmendServ.getICPWorkflowByWfId(id).subscribe((data) => {
//     this.inwardAmend = data;
//     this.inward = this.inwardAmend.master;
//     this.registrationService.getfindOneInstrumentRegisterd(this.inward.id).subscribe(insRRgData=>{
//       this.instrumentRegister = insRRgData;
//       console.log("instrument reg of import");
//       this.setChildren = true;
//       console.log(this.instrumentRegister);
//       this.productName = this.instrumentRegister.product.description;
//     this.warrantRef = this.instrumentRegister.warrantRef;
//     this.productSubCategory = this.instrumentRegister.product.productSubCategory.description;
//     if(this.instrumentRegister.customer != null && this.instrumentRegister.customer != undefined){
//       this.name = this.instrumentRegister.customer.fullname;
//     }
//     });

//   //  this.inward.reference = this.instrumentRegister.reference;

//   console.log(this.inwardAmend.destStep);
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
//   this.inwardAmend.currentQueueId = this.destQueueId;
//   this.inwardAmend.queueType = this.queueType;
//   this._inwardColAmendServ.pushtoworkflow(test).subscribe((data => {
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
//   if (this.inwardAmend.rejectQueueId === null) {

//   }
//   this.inwardAmend = inward;
//   this.inwardAmend.currentQueueId = this.destQueueId;
//   this.inwardAmend.queueType = this.queueType;
//   this._inwardColAmendServ.rejectbacktoworkflow(this.inwardAmend).subscribe((data => {
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

//   this.actionService.getWfBusinessProcessSetupByCriteria("ICOP","Amend").subscribe((data => {

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
//   console.log('customerId=' + this.instrumentRegister.customer.id);
//   //this.test.customerId
//   this.inwardAmend.jobDataId=this.inwardAmend.id;
//   this.inwardAmend.customerId = this.instrumentRegister.customer.id;
//   this._inwardColAmendServ.getAllCalculatedCharge(this.inwardAmend.busProEventId, this.instrumentRegister.customer.id, this.inwardAmend.transactionAmount, this.inwardAmend.id,this.inwardAmend).subscribe((data => {
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
// this._inwardColAmendServ.getOne(id).subscribe(data =>{

//   console.log(data);

//   this.inwardAmend = data;
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
//       if(p[i].serviceRef.code === "Amend"){
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

//   while (s.length < size) s = "0" + s;
//   console.log(s)
//   return s;
}
  }
