import { Component, OnInit } from '@angular/core';
// import { InwardCollectionOrderReceived } from '../../../inward-collection-order-received/class/inward-collection-order-received';
// import { InwardCollectionDocumentsDelivery } from '../../class/inward-collection-documents-delivery';
import { Router, ActivatedRoute } from '@angular/router';
// import { InwardCollectionOrderReceivedService } from '../../../inward-collection-order-received/service/inward-collection-order-received.service';
// import { InwardCollectionDocumentsDeliveryService } from '../../service/inward-collection-documents-delivery.service';
// import { LocationRouter } from 'src/app/class/LocationRouter';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';
// import { WorkflowProcessSetup } from 'src/app/class/workflow-processsetup';
// import { BizProcessQueueEvent } from 'src/app/class/biz-process-queue-event';
// import { WorkflowActionService } from 'src/app/services/workflow-action.service';

// import { InwardCollectionMaster } from '../../../inward-collection-master/class/inward-collection-master';
// import { InstrumentRegister } from 'src/app/registration/registration';

// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';

// import { RegistrationService } from 'src/app/registration/registration.service';
// import { WorkflowProcessSetupService } from 'src/app/services/workflow-processsetup.service';
// import { InwardCollectionMasterService } from '../../../inward-collection-master/service/inward-collection-master.service';

// import { WorkflowQueue } from 'src/app/class/workflow-queue';
// import { CurrencyService } from 'src/app/modules/staticdata/currency/currency.service';
// import { BankService } from 'src/app/modules/staticdata/bank/bank.service';
// import { CustomerService } from 'src/app/modules/staticdata/customer/customer.service';
// import { PickListItemService } from 'src/app/modules/staticdata/picklistitem/picklistitem.service';
// import { Currency } from 'src/app/modules/staticdata/currency/currency';
// import { PickListItem } from 'src/app/modules/staticdata/picklistitem/picklistitem';

// import { Bank } from 'src/app/modules/staticdata/bank/bank';
// import { Customer } from 'src/app/modules/staticdata/customer/customer';

@Component({
  selector: 'app-inward-collection-documents-delivery',
  templateUrl: './inward-collection-documents-delivery.component.html',
  styleUrls: ['./inward-collection-documents-delivery.component.css']
})
export class InwardCollectionDocumentsDeliveryComponent implements OnInit {
//   inward :InwardCollectionMaster = new InwardCollectionMaster();
//   inwardDocument :InwardCollectionDocumentsDelivery = new InwardCollectionDocumentsDelivery();
//   decode : any;
//   name : string;
//   productName : String;
//   warrantRef : String;
//   reference : string;
//   instrumentRegister : InstrumentRegister;
//   destStep: String;
//   productSubCategory : string;
//   queueType: String;
//   destQueueId: number;
//   currencies : Currency[];
//   cancelReasonCode = "INWCNL";
//   responceStatusCode = "ICPRS"
//   cancellationActionCode = "ICPCA"
//   reasons : PickListItem[];
//   cActions : PickListItem[]
//   cResStatus : PickListItem[];
//   banks :Bank[];
//   customers : Customer[];

//   rejectSteps: WorkflowQueue[];
//   setChildren = true;
//   //
//   isInTransit = false;

//    //-------new workflow
//  Events: BizProcessQueueEvent[];
//  wfSetup: WorkflowProcessSetup;
//  businessProId:number;
//  startQueueId:number;
//  startQueue:string;
//  CalculatedCharges: CalculatedChargeInfo[];

//  navItem : any;

  constructor( private router:Router, private activatedRoute:ActivatedRoute,
    //  private  locator :LocationRouter,
    //  private _smp : ServerMessagePopUp, private _inwardColDocumentServ : InwardCollectionDocumentsDeliveryService,
    //  private _pickListItemService : PickListItemService, private registrationService:RegistrationService,
    //  private _setupService: WorkflowProcessSetupService,
    //  private _masterService : InwardCollectionMasterService,
    //  private actionService: WorkflowActionService,
    //  private _currService : CurrencyService,
    //  private _bankService : BankService,
    //  private _customerService : CustomerService
  ) {

 }

 scroll(el: HTMLElement){
  let jboy = el.offsetTop - 55;
  window.scroll({ top: jboy, behavior: "smooth" });
}




  ngOnInit() {
    // console.log("+++++++++++++++++++++++++++++++++++++++++=")
    // this.getWfBusinessProcessSetupByCriteria();
    // this._bankService.getBanks().subscribe((data=>{
    //   this.banks = data;
    // }));
    // this._customerService.getCustomers().subscribe((data=>{
    //   this.customers = data;
    // }));
    // this.activatedRoute.params.subscribe(params=>{
    //    this.decode = JSON.parse(atob(params.navItem));
    //   console.log("this is the decoded object");

    //  this._pickListItemService.getPickListItemByCode(this.cancelReasonCode).subscribe(data=>{
    //   this.reasons = data;
    //  });
    //  this._pickListItemService.getPickListItemByCode(this.cancellationActionCode).subscribe(data=>{
    //   this.cActions = data;
    //  });
    //  this._pickListItemService.getPickListItemByCode(this.responceStatusCode).subscribe(data=>{
    //   this.cResStatus = data;
    //  });


    //   this.instrumentRegister = this.decode.instrumentRegister;
    // //  console.log(decode.product)

    //   const operation = this.decode.operation;
    //   console.log(this.decode);
    //   if(operation == "In Transit"){
    //     this.setChildren = false;
    //     this.destStep = this.decode.product.destStep;
    //     this.queueType = this.decode.product.queueType;
    //     this.destQueueId = this.decode.product.destQueueId;
    //    this.instrumentInTransitInit();
    //   }else{
    //    this.instrumentRegisterProductInit();
      // }
//     // }
//     // );
// // this._currService.getCurrencies().subscribe((data=>{
// //   this.currencies  = data;
// // }));

// this.currencies = this.decode.instrumentRegister.product.currencies;


  }




//   createImportLetterCreditDocument(){

//   //  this.inward.instrumentRster = this.instrumentRegister;
//     console.log("import before")
//     console.log(this.inwardDocument);
//     this.inwardDocument.master = this.inward;
//     this._inwardColDocumentServ.create(this.inwardDocument).subscribe((data=>{
//       this._smp.popUpAlertSuccess();
//       console.log("inward after")
//       console.log(this.inwardDocument);
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
//   //this.getQueuesForRejection(id);




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
// this.inwardDocument.reference = this.instrumentRegister.reference+this.getExtension();
//   this.productName = this.instrumentRegister.product.description;
//   this.warrantRef = this.instrumentRegister.warrantRef;
//  this.inward.id = this.instrumentRegister.id;
//  this.productSubCategory = this.instrumentRegister.product.description;
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
//   this._inwardColDocumentServ.getICPWorkflowByWfId(id).subscribe((data) => {
//     this.inwardDocument = data;
//     this.inward = this.inwardDocument.master;
//     this.registrationService.getfindOneInstrumentRegisterd(this.inward.id).subscribe(insRRgData=>{
//       this.instrumentRegister = insRRgData;
//       console.log("instrument reg of import");
//       this.setChildren = true;
//       console.log(this.instrumentRegister);
//       this.productName = this.instrumentRegister.product.description;
//       this.productSubCategory = this.instrumentRegister.product.description;
//     this.warrantRef = this.instrumentRegister.warrantRef;
//     if(this.instrumentRegister.customer != null && this.instrumentRegister.customer != undefined){
//       this.name = this.instrumentRegister.customer.fullname;
//     }
//     });

//   //  this.inward.reference = this.instrumentRegister.reference;

//   console.log(this.inwardDocument.destStep);
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
//   this.inwardDocument.currentQueueId = this.destQueueId;
//   this.inwardDocument.queueType = this.queueType;
//   this._inwardColDocumentServ.pushtoworkflow(test).subscribe((data => {
//     console.log('Prototype Map Created');
//     this.router.navigate(['dashboard'])
//   }), (err => {
//     // console.log('Could not create a Template');
//     console.log(err);
//     console.error(err);
//     (err)
//   }));


// }
// reject(inward) {
//   if (this.inwardDocument.rejectQueueId === null) {

//   }
//   this.inwardDocument.currentQueueId = this.destQueueId;
//   this.inwardDocument.queueType = this.queueType;
//   this._inwardColDocumentServ.rejectbacktoworkflow(inward).subscribe((data => {
//     this.router.navigate(['dashboard'])
//   }), (err => {
//     console.log(err);
//     console.error(err);
//     (err)
//   }));
// }

// //--new workflow

// getWfBusinessProcessSetupByCriteria()
// {

//   this.actionService.getWfBusinessProcessSetupByCriteria("ICOP","Document").subscribe((data => {

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
//   this.inwardDocument.jobDataId=this.inwardDocument.id;
//   this._inwardColDocumentServ.getAllCalculatedCharge(this.inwardDocument.busProEventId, this.instrumentRegister.customer[0].id, this.inwardDocument.transactionAmount, this.inwardDocument.id,this.inwardDocument).subscribe((data => {
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
// this._inwardColDocumentServ.getOne(id).subscribe(data =>{

//   console.log(data);

//   this.inwardDocument = data;
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
//       if(p[i].serviceRef.code === "Document"){
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
