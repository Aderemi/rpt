import { Component, OnInit } from '@angular/core';

// import { InwardCollectionMasterService } from '../../../inward-collection-master/service/inward-collection-master.service';
// import { InwardCollectionOrderReceived } from '../../class/inward-collection-order-received';

// import { InstrumentRegister } from 'src/app/registration/registration';
// import { WorkflowQueue } from 'src/app/class/workflow-queue';
// import { Router, ActivatedRoute } from '@angular/router';
// import { ForeignExchangeDealsService } from 'src/app/foreign-exchange-deal/foreign-exchange-deals.service';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';
// import { WorkflowProcessSetup } from 'src/app/class/workflow-processsetup';
// import { BizProcessQueueEvent } from 'src/app/class/biz-process-queue-event';
// import { LocationRouter } from 'src/app/class/LocationRouter';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { RegistrationService } from 'src/app/registration/registration.service';
// import { PartyCategoryService } from 'src/app/party-category/party-category.service';
// import { ChargeService } from 'src/app/charge/charge.service';
// import { ChecklistService } from 'src/app/checklist/checklist.service';
// import { WorkflowActionService } from 'src/app/services/workflow-action.service';
// import { InwardCollectionOrderReceivedService } from '../../service/inward-collection-order-received.service';
// import { WorkflowProcessSetupService } from 'src/app/services/workflow-processsetup.service';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';
// import { TemplateService } from 'src/app/services/template.service';
// import { Currency } from 'src/app/modules/staticdata/currency/currency';
// import { Country } from 'src/app/modules/staticdata/country/country';
// import { CurrencyService } from 'src/app/modules/staticdata/currency/currency.service';
// import { CountryService } from 'src/app/modules/staticdata/country/country.service';

@Component({
  selector: 'app-inward-collection-order-received',
  templateUrl: './inward-collection-order-received.component.html',
  styleUrls: ['./inward-collection-order-received.component.css']
})
export class InwardCollectionOrderReceivedComponent implements OnInit {
  // inward :InwardCollectionOrderReceived ;
  // currencies : Currency[];
  // countries : Country[];
  // decode : any;
  // name : string;
  // productName : String;
  // warrantRef;
  // instrumentRegister : InstrumentRegister;
  // destStep: String;
  // queueType: String;
  // destQueueId: number;
  // productSubCategory;
  // navItem : any;
  // rejectSteps: WorkflowQueue[];
  // setChildren = true;
  // // 
  // view : boolean;
  // isInTransit = false;
  // otherFlag: boolean;
  // //-------new workflow
  // Events: BizProcessQueueEvent[];
  // wfSetup: WorkflowProcessSetup;
  // businessProId:number;
  // startQueueId:number;
  // startQueue:string;
  // CalculatedCharges: CalculatedChargeInfo[];
  // errors = [];
  // errorMsg =[];

  constructor( 
    // private router:Router ,   private fxService:ForeignExchangeDealsService,
    //  private activatedRoute:ActivatedRoute,  private  locator :LocationRouter,
    // private modalService:NgbModal, private registrationService:RegistrationService, private partyService:PartyCategoryService, 
    // private checklistService:ChecklistService,   private chargeService:ChargeService,
    // private actionService: WorkflowActionService, 
    // private _inwCollOrderReceivedServ : InwardCollectionOrderReceivedService,
    // private _setupService: WorkflowProcessSetupService,
    // private _smp : ServerMessagePopUp, private _countryService : CountryService,
    // private currencyService : CurrencyService,
    // private _masterService : InwardCollectionMasterService,
    // private template : TemplateService
) {

// this.inward = new InwardCollectionOrderReceived();


 }

 scroll(el: HTMLElement){
  let jboy = el.offsetTop - 55;
  window.scroll({ top: jboy, behavior: "smooth" });
}
  
  ngOnInit() {
  //   this.otherFlag = true;
  //   console.log("+++++++++++++++++++++++++++++++++++++++++=")
  //   this.activatedRoute.params.subscribe(params=>{
  //      this.decode = JSON.parse(atob(params.navItem));
  //     console.log("this is the decoded object");
      
     
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
  //     }else if(operation == "View"){
  //       this.view = true;
  
  //       this.doView(this.decode.ref, this.decode.id);
  //     }
      
  //     else{
  //       this.instrumentRegisterProductInit();
  //     }
  //   }
  //   );


  //   this.currencyService.getCurrencies().subscribe((data=>{
  //     this.currencies = data;
  //     console.log(data);
    
  //   }),(err=>{
 
  //   }));
    
   
  //   this._countryService.getCountries().subscribe((data=>{
  //     this.countries = data;
  //     console.log(data);
    
  //   }),(err=>{
 
  //   }));

  //     //Work flow ----------!!!!
  
  //     this.getWfBusinessProcessSetupByCriteria();
  }




//   create(){
//     console.log(this.instrumentRegister.operativeTemplate);
//     switch(this.instrumentRegister.operativeTemplate){
//       case "Operative":
      
//       this.createOperative();
//       break;
//       case "General Template":
//       this.createGTemplate();
//       break;
//       case "Customer Template":
//       this.createCTemplate();
//       break;
//     }
 
//   // //  this.inward.instrumentRegister = this.instrumentRegister;
//   //   console.log("inward before")
//   //   console.log(this.inward);
//   //   this._inwCollOrderReceivedServ.create(this.inward).subscribe((data=>{
//   //     this._smp.popUpAlertSuccess();
//   //     console.log("inward after")
//   //     console.log(this.inward);
//   //     this.router.navigate(['dashboard'])
//   //     console.log(data);
//   //   }), (err=>{
//   //     console.log(err);
//   //     this._smp.popUpAlertError("Unable to save");

//   //   }))
    
//   }



// // for operation in transit

// instrumentInTransitInit(){
//   this.isInTransit= true;
//  // this.inward == this.decode.product;
//   let id = this.decode.product.id;
//  // this.inward = this._localSession.get("transitProduct");
//  console.log(id)
//  ;
//   this.getQueuesForRejection(id);
//   this.getICPWorkflowByWfId(id)
//   //this.getQueuesForRejection(id);



//   this.currencies = this.decode.product.currency;
//   this.getWfBusinessProcessSetupByCriteria();
// }


// createImportLetterCreditAdjust(){
//   console.log(this.instrumentRegister.operativeTemplate);
//   switch(this.instrumentRegister.operativeTemplate){
//     case "Operative":
    
//     this.createOperative();
//     break;
//     case "General Template":
//     this.createGTemplate();
//     break;
//     case "Customer Template":
//     this.createCTemplate();
//     break;
//   }
    
//   }



//   createOperative(){
  
//     //  this.inward.instrumentRegister = this.instrumentRegister;
//     console.log("inward before")
//     console.log(this.inward);
//     this._inwCollOrderReceivedServ.create(this.inward).subscribe((data=>{

//       if (data.status === 200) {
//         this._smp.popUpAlertSuccess();
//         this.router.navigate(["dashboard/baseMenu"]);



       
//       } else {

//       }
//       // this._smp.popUpAlertSuccess();
//       // console.log("inward after")
//       // console.log(this.import);
//     //  this.router.navigate(['dashboard'])
//     }),  (err => {
//       console.log('Error are as follows');
//      let erx = '';
//       erx += '<div class=\'pop-upx-div\'>';
//        console.log(err);
//           if(this.errors.length > 0){          
//             this.errors.forEach(e => {
//               let myRow = document.getElementById(e);     
//               console.log(e);      
//             if((myRow as HTMLInputElement) !== null)
//               (myRow as HTMLInputElement).style.borderColor = "#2E3062";   
//               if((myRow as HTMLTextAreaElement) !== null)   
//               (myRow as HTMLTextAreaElement).style.borderColor = "#2E3062";  
//               if((myRow as HTMLSelectElement) !== null)     
//               (myRow as HTMLSelectElement).style.borderColor = "#2E3062";    
//             });
//           }
//     this.errors = [];
//     this.errorMsg = [];
//       for (const i in err.error) {
//         erx += '<li class=\'pop-up\'><span class=\'fa fa-close\' style=\'color : red;\'></span> '
//           + err.error[i] +
//           '</li>';           
//           this.errors.push(i);
          
//           this.errorMsg.push(err.error[i]);
//           let myRow = document.getElementById(i);    
//       if((myRow as HTMLInputElement) !== null)
//           (document.getElementById(i) as HTMLInputElement).style.borderColor = "red";
//           if((myRow as HTMLTextAreaElement) !== null)  {
//             (document.getElementById(i) as HTMLTextAreaElement).style.outline = "none";
//           (document.getElementById(i) as HTMLTextAreaElement).style.borderColor = "red !important";
//           } 
//           if((myRow as HTMLSelectElement) !== null)     
//           (document.getElementById(i) as HTMLSelectElement).style.borderColor = "red"; 
//       }
//       erx += '</div>';
//       this._smp.popUpAlertError(erx);
//     })
//   )
// }

// createGTemplate(){
//   ;
//   let temp = {
//     "template" : this.inward,
//     "className" : "ICOP",
//     "templateName" : this.instrumentRegister.templateName
//   }
//   this.template.creatGTemplate(temp).subscribe(data=>{

//     this.router.navigate(['instrumentRegister'])
//   });
// }

// createCTemplate(){
//   let temp = {
//     "template" : this.inward,
//     "className" : "ICOP",
//     "templateName" : this.instrumentRegister.templateName,
//     "customer" : this.instrumentRegister.customer.id
//   }
//   this.template.creatCTemplate(temp).subscribe(data=>{

//     this.router.navigate(['instrumentRegister'])
//   });
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
// this._inwCollOrderReceivedServ.getOne(id).subscribe(data =>{

//   console.log(data);
  
//   this.inward = data;
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

// goToMaster(){

     
//   this.navItem = {
//     'operation' : "View",
//     'instrumentRegister' : this.instrumentRegister
//   }
// this.locator.getViewLocation(this.instrumentRegister.product.productSubCategory.productCategory.code, this.navItem);
// }




// //for new instrument register

// instrumentRegisterProductInit(){  

//   this.instrumentRegister = this.decode.instrumentRegister;
  
//   if(this.decode.import!=undefined){
//     this.inward = this.decode.instr;
//   }

 

//    console.log("This is instrument register: ");

//   console.log(this.instrumentRegister);
     
  


// if(this.instrumentRegister.copySourceInstrument == null){
//   // we are creating not from a template or previous instrument
//     this.productName = this.instrumentRegister.product.description;
//     this.warrantRef = this.instrumentRegister.warrantRef;
//     this.productSubCategory = this.instrumentRegister.product.productSubCategory.description;
//     this.inward.homeBranch = this.instrumentRegister.homeBranch;
//     this.inward.servicingBranch = this.instrumentRegister.servicingBranch
//     this.inward.effectiveDate = this.instrumentRegister.effectiveDate
//     this.inward.status = this.instrumentRegister.status
//     this.inward.relationshipManagement = this.instrumentRegister.relatioinshipMgt
//     this.inward.collectionAmtCur = this.instrumentRegister.serviceAmountCode;
//     this.inward.collectionAmtFig = this.instrumentRegister.serviceAmount;
    
//   // this.import.warrantRef = this.instrumentRegister.warrantRef;
 
// }else{
//   // we are creating from a template or previous instrument
//   if(this.instrumentRegister.copySourceType == "Previous Instrument"){
//     // at this level, we have Instrument register coming in
  
//   let ins = <InstrumentRegister>this.instrumentRegister.copySourceInstrument;
//   this._inwCollOrderReceivedServ.getOne(ins.id).subscribe(data=>{
    
// this.inward = data;
// this.inward.id = this.instrumentRegister.id;
// this.inward.reference = this.instrumentRegister.reference;
// this.productName = this.instrumentRegister.product.description;
// this.warrantRef = this.instrumentRegister.warrantRef;
// console.log(this.inward);
//   });
// }else{
//   let ins = this.instrumentRegister.copySourceInstrument;
//   console.log(ins);
//  this.inward = <InwardCollectionOrderReceived> ins; 
// }

// }

//   this.inward.id = this.instrumentRegister.id;
//   this.inward.reference = this.instrumentRegister.reference+this.getExtension();
//   this.productName = this.instrumentRegister.product.description;
//   this.warrantRef = this.instrumentRegister.warrantRef;
//   this.productSubCategory = this.instrumentRegister.product.productSubCategory.description;
//     this.name = this.instrumentRegister.customer.fullname;
  
//   if(this.decode.id !=undefined){
//     window.location.href = this.router.url+'#'+this.decode.id;
//   }
 
//   this.inward.reference = this.instrumentRegister.reference+this.getExtension();
//   this.currencies = this.instrumentRegister.product.currency;
// //Work flow ----------!!!!
  
//   this.getWfBusinessProcessSetupByCriteria();



// }

// equals(o1: Currency, o2: Currency) {
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



// wildCard(search, id){

//   let urlParser = this.router.url;
//   urlParser = urlParser.substring(0,urlParser.lastIndexOf('/'));
//   console.log(urlParser);
//   console.log("this is wildcard", this.instrumentRegister);
//   this.navItem = {
//     "search" : search,
//     "instrumentRegister" : this.instrumentRegister,
//     "url" :urlParser,
//     "id": id,
//     "instr" : this.inward,
//     "type" : "ICOP"
//   }

//   this.router.navigate(['wildcard',btoa(JSON.stringify(this.navItem))]);

// }











// getICPWorkflowByWfId(id) {
//   this._inwCollOrderReceivedServ.getICPWorkflowByWfId(id).subscribe((data) => {
//     this.inward = data;
//     this.registrationService.getfindOneInstrumentRegisterd(data.id).subscribe(insRRgData=>{
//       this.instrumentRegister = insRRgData;
//       console.log("instrument reg of inward");
//       this.setChildren = true;
//       console.log(this.instrumentRegister);
//       this.productName = this.instrumentRegister.product.description;
//     this.warrantRef = this.instrumentRegister.warrantRef;
//     if(this.instrumentRegister.customer != null && this.instrumentRegister.customer != undefined){
//       this.name = this.instrumentRegister.customer.fullname;
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
//   this._inwCollOrderReceivedServ.pushtoworkflow(test).subscribe((data => {
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

// applicationRule(){
//   console.log(this.inward.applicationRule);
//    this.otherFlag = this.inward.applicationRule != "Other";
// }

// reject(inward) {
//   if (this.inward.rejectQueueId === null) {

//   }
//   this.inward.currentQueueId = this.destQueueId;
//   this.inward.queueType = this.queueType;
//   this._inwCollOrderReceivedServ.rejectbacktoworkflow(inward).subscribe((data => {
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
  
//   this.actionService.getWfBusinessProcessSetupByCriteria("ICOP","Received").subscribe((data => {
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
//   this.inward.jobDataId=this.inward.id;
//   this._inwCollOrderReceivedServ.getAllCalculatedCharge(this.inward.busProEventId, this.instrumentRegister.customer.id, this.inward.transactionAmount, this.inward.id,this.inward).subscribe((data => {
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



// getExtension(){
//   let ext = "";
  
//     let p = this.instrumentRegister.product.businessProcess;
//     for(let i = 0; i < p.length; i++){
//       if(p[i].serviceRef.code === "Received"){
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