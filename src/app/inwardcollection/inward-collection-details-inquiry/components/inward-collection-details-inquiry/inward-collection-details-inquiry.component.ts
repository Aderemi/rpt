import { Component, OnInit } from '@angular/core';
import { InwardCollectionDetailsInquiry } from '../../class/inward-collection-details-inquiry';

import { Router, ActivatedRoute } from '@angular/router';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import { InwardCollectionDetailsInquiryService } from '../../service/inward-collection-details-inquiry.service';
// import {Currency } from 'src/app/modules/staticdata/currency/currency';
// import { InstrumentRegister } from 'src/app/registration/registration';
// import { WorkflowQueue } from 'src/app/class/workflow-queue';
// import { WorkflowProcessSetupService } from 'src/app/services/workflow-processsetup.service';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';
// import {CurrencyService } from 'src/app/modules/staticdata/currency/currency.service';
// import { RegistrationService } from 'src/app/registration/registration.service';

@Component({
  selector: 'app-inward-collection-details-inquiry',
  templateUrl: './inward-collection-details-inquiry.component.html',
  styleUrls: ['./inward-collection-details-inquiry.component.css']
})
export class InwardCollectionDetailsInquiryComponent implements OnInit {
  // inward :InwardCollectionDetailsInquiry = new InwardCollectionDetailsInquiry();
  // currencies :Currency[];
  // decode : any;
  // name : string;
  // productName : String;
  // warrantRef;
  // instrumentRegister : InstrumentRegister;
  // destStep: String;
  // queueType: String;
  // destQueueId: number;
  // productSubCategory;

  // rejectSteps: WorkflowQueue[];
  // setChildren = true;
  // // 
  // isInTransit = false;

  constructor( private router:Router ,  
    //  private activatedRoute:ActivatedRoute, 
    // private modalService:NgbModal, private registrationService:RegistrationService, 

    // private _inwCollDetInqServ : InwardCollectionDetailsInquiryService,
    // private _setupService: WorkflowProcessSetupService,
    // private _smp : ServerMessagePopUp,
    // private currencyService :CurrencyService
) {

// this.inward = new InwardCollectionDetailsInquiry();

 }

 scroll(el: HTMLElement){
  let jboy = el.offsetTop - 55;
  window.scroll({ top: jboy, behavior: "smooth" });
}

  
  ngOnInit() {
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
  //     }else{
  //       this.instrumentRegisterProductInit();
  //     }
  //   }
  //   );


  //   this.currencyService.getCurrencies().subscribe((data=>{
  //     this.currencies = data;
  //     console.log(data);
    
  //   }),(err=>{
 
  //   }));
  }




//   create(){
 
//   //  this.inward.instrumentRegister = this.instrumentRegister;
//     console.log("inward before")
//     console.log(this.inward);
//     this._inwCollDetInqServ.create(this.inward).subscribe((data=>{
//       this._smp.popUpAlertSuccess();
//       console.log("inward after")
//       console.log(this.inward);
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

//    console.log("This is instrument register: ");

//   console.log(this.instrumentRegister);
//   this.inward.id = this.instrumentRegister.id;

//   this.inward.reference = this.instrumentRegister.reference;
//   this.productName = this.instrumentRegister.product.description;

//   this.productSubCategory = this.instrumentRegister.product.productSubCategory.description;
//   this.warrantRef = this.instrumentRegister.warrantRef;
//   if(this.instrumentRegister.customer != null && this.instrumentRegister.customer != undefined){
//     this.name = this.instrumentRegister.customer[0].name;
//   }
// }

// equals(o1:Currency, o2,Currency) {
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
//   this._inwCollDetInqServ.getICPWorkflowByWfId(id).subscribe((data) => {
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
//   this._inwCollDetInqServ.pushtoworkflow(test).subscribe((data => {
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
//   if (this.inward.rejectQueueId === null) {

//   }
//   this.inward.currentQueueId = this.destQueueId;
//   this.inward.queueType = this.queueType;
//   this._inwCollDetInqServ.rejectbacktoworkflow(inward).subscribe((data => {
//   //  this.gotoDashboard();
//   }), (err => {
//     console.log(err);
//     console.error(err);
//     (err)
//   }));
// }
}