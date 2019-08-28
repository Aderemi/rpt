import { Component, OnInit } from '@angular/core';
import { InwardBankPayment } from '../../../inward-bank-payment/inward-bank-payment';
import { InwardBankPaymentCancellation } from '../../class/inward-bank-payment-cancellation';

import { Router, ActivatedRoute } from '@angular/router';

import { InwardBankPaymentCancellationService } from '../../services/inward-bank-payment-cancellation.service';

import { InwardBankPaymentService } from '../../../inward-bank-payment/inward-bank-payment.service';
// import { Currency } from 'src/app/modules/staticdata/currency/currency';
// import { PickListItem } from 'src/app/modules/staticdata/picklistitem/picklistitem';
// import { PickListItemService } from 'src/app/modules/staticdata/picklistitem/picklistitem.service';
// import { CurrencyService } from 'src/app/modules/staticdata/currency/currency.service';
// import { InstrumentRegister } from 'src/app/registration/registration';
// import { WorkflowQueue } from 'src/app/class/workflow-queue';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';



@Component({
  selector: 'app-inward-bank-payment-cancellation',
  templateUrl: './inward-bank-payment-cancellation.component.html',
  styleUrls: ['./inward-bank-payment-cancellation.component.css']
})
export class InwardBankPaymentCancellationComponent implements OnInit {
  // inward :InwardBankPayment = new InwardBankPayment();
  //   inwardCancel :InwardBankPaymentCancellation = new InwardBankPaymentCancellation();
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

  // rejectSteps: WorkflowQueue[];
  // setChildren = true;
  // //
  // isInTransit = false;

  constructor( private router:Router, private activatedRoute:ActivatedRoute,
    //  private _smp : ServerMessagePopUp, private _inwBankPayCanServ : InwardBankPaymentCancellationService,
    //  private _pickListItemService : PickListItemService,

    //  private _inwardBankPayServ : InwardBankPaymentService, private _currService :CurrencyService
  ) {

 }


 scroll(el: HTMLElement){
  let jboy = el.offsetTop - 55;
  window.scroll({ top: jboy, behavior: "smooth" });
}

cancel(){
  alert("yaay!!!!!u clicked")
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
//     }
//     );
// this._currService.getCurrencies().subscribe((data=>{
//   this.currencies  = data;
// }));

  }




//   createInwardBankPaymentCancel(){

//   //  this.inward.instrumentRegister = this.instrumentRegister;
//     console.log("inward before")
//     console.log(this.inwardCancel);
//     this.inwardCancel.inwardBankPayment = this.inward;
//     this._inwBankPayCanServ.createInwardBankPaymentCancel(this.inwardCancel).subscribe((data=>{
//       this._smp.popUpAlertSuccess();
//       console.log("inward after")
//       console.log(this.inwardCancel);
//       this.router.navigate(['dashboard'])
//       console.log(data);
//     }), (err=>{
//       console.log(err);
//       this._smp.popUpAlertError("Unable to save");

//     }))

//   }

// // for operation in transit
// /*
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
// */

// //for new instrument register

// instrumentRegisterProductInit(){
//   this.instrumentRegister = this.decode.instrumentRegister;
//  //  this.instrumentRegister = this._localSession.get("instrumentRegister").body;

//  // GET THE JOB DESCRI[PTION  ID FROM THE WF-JOB ITEM TABLE





//    console.log("This is instrument register: ");

//   console.log(this.instrumentRegister);
//   this.inward.id = this.instrumentRegister.id;


//   // FETCH THE INWARDCUSTOMERPAYMENT ASSOCIATED WITH THIS ID
//   this._inwardBankPayServ.getOne(this.inward.id).subscribe((data=>{
//     console.log("This is the inward editorData from the editorData base",editorData);
//     this.inward = data;

//     console.log("This is the inward editorData from the editorData base",this.inward);
//   }),(err=>{
//     console.log("Thios is the error",err);
//   }));

// console.log(this.instrumentRegister);
//  this.reference = this.instrumentRegister.reference;
//   this.productName = this.instrumentRegister.product.description;
//   this.warrantRef = this.instrumentRegister.warrantRef;
//  this.inward.id = this.instrumentRegister.id;

//   if(this.instrumentRegister.customer != null && this.instrumentRegister.customer != undefined){
//     this.name = this.instrumentRegister.customer[0].name;
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









/*

getICPWorkflowByWfId(id) {
  this._inwCustPayServ.getICPWorkflowByWfId(id).subscribe((editorData) => {
    this.inward = editorData;
    this.registrationService.getfindOneInstrumentRegisterd(editorData.id).subscribe(insRRgData=>{
      this.instrumentRegister = insRRgData;
      console.log("instrument reg of inward");
      this.setChildren = true;
      console.log(this.instrumentRegister);
      this.productName = this.instrumentRegister.product.description;
    this.warrantRef = this.instrumentRegister.warrantRef;
    if(this.instrumentRegister.customer != null && this.instrumentRegister.customer != undefined){
      this.name = this.instrumentRegister.customer[0].name;
    }
    });

  //  this.inward.reference = this.instrumentRegister.reference;

  console.log(this.inward.destStep);
  console.log("destStep = " + this.destStep);
    console.log(editorData);
  }),(err=>{
    console.log(err);
  });
}
/*


getQueuesForRejection(id) {
  this._setupService.getQueuesForRejectionByWfProId(id).subscribe((editorData) => {
    console.log('HHHHHHHHHH =' + id);
    this.rejectSteps = editorData;
  }
  );
}



approve(test) {
  this.inward.currentQueueId = this.destQueueId;
  this.inward.queueType = this.queueType;
  this._inwCustPayServ.pushtoworkflow(test).subscribe((editorData => {
    console.log('Prototype Map Created');
    //this.initForm();
   // this.gotoDashboard();
  }), (err => {
    // console.log('Could not create a Template');
    console.log(err);
    console.error(err);
    (err)
  }));


}
reject(inward) {
  if (this.inward.rejectQueueId === null) {

  }
  this.inward.currentQueueId = this.destQueueId;
  this.inward.queueType = this.queueType;
  this._inwCustPayServ.rejectbacktoworkflow(inward).subscribe((editorData => {
  //  this.gotoDashboard();
  }), (err => {
    console.log(err);
    console.error(err);
    (err)
  }));
}
*/

}
