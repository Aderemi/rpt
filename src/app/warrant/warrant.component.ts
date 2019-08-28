import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

import { Router, ActivatedRoute } from '@angular/router';
import { Warrant } from './warrant';
import { WarrantService } from './warrant.service';
// import { WarrantProductSectionService } from '../warrant-product-section/warrant-product-section.service';
// import { WarrantProductFieldService } from '../warrant-product-field/warrant-product-field.service';
// import { WarrantProductSection } from '../warrant-product-section/warrant-product-section';
// import { WarrantProductField } from '../warrant-product-field/warrant-product-field';
// import { Currency } from '../../staticdata/currency/currency';
// import { InstrumentRegister } from 'src/app/registration/registration';
// import { WorkflowQueue } from 'src/app/class/workflow-queue';
// import { WorkflowProcessSetup } from 'src/app/class/workflow-processsetup';
// import { BizProcessQueueEvent } from 'src/app/class/biz-process-queue-event';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';
// import { WorkflowProcessSetupService } from 'src/app/services/workflow-processsetup.service';
// import { ChecklistService } from 'src/app/checklist/checklist.service';
//  import { WorkflowActionService } from 'src/app/services/workflow-action.service';
// import { ServerMessagePopUp } from 'src/app/class/server-message-pop-up';
// import { PartyCategoryService } from 'src/app/party-category/party-category.service';
// import { ForeignExchangeDealsService } from 'src/app/foreign-exchange-deal/foreign-exchange-deals.service';
// import { ChargeService } from 'src/app/charge/charge.service';
// import { CurrencyService } from '../../staticdata/currency/currency.service';
// import { Product } from 'src/app/product/product';
// import { Fieldset } from 'primeng/primeng';


@Component({
  selector: 'app-warrant',
  templateUrl: './warrant.component.html',
  styleUrls: ['./warrant.component.css']
})
export class WarrantComponent implements OnInit {

//   warrant: Warrant = new Warrant();
//   currencies: Currency[] =[];
//   decode: any;
//   name: string;
//   productName: String;
//   warrantRef: String;
//   instrumentRegister: InstrumentRegister;
//   destStep: String;
//   queueType: String;
//   destQueueId: number;
//   rejectSteps: WorkflowQueue[];
//   hash: any;
//   setChildren = true;
//   isInTransit = false;
//   zdate: Date;

//   // warrant: Warrant;
//   warrantForm: FormGroup;
//   status: String[] = ['Active', 'InActive', 'Expired'];
//   sections: WarrantProductSection[];
//   keys: String[];
//   fields: WarrantProductField[];
//   purposes = ['Purpose 1', 'Purpose 2'];
//   vals = ['Days', 'Months', 'Years'];
//   prodDescription;
//   Events: BizProcessQueueEvent[];
// wfSetup: WorkflowProcessSetup;
// businessProId:number;
// startQueueId:number;
// startQueue:String;
// CalculatedCharges: CalculatedChargeInfo[];
//   constructor(private _formBuilder: FormBuilder, private _warrantService: WarrantService, private _router: Router,
//     private activatedRoute: ActivatedRoute, private _sectionService: WarrantProductSectionService,
//     private _fieldService: WarrantProductFieldService, private chRef: ChangeDetectorRef, private _smp: ServerMessagePopUp,
//     private _setupService: WorkflowProcessSetupService, private partyService: PartyCategoryService,
//     private checklistService: ChecklistService, private fxService: ForeignExchangeDealsService,
//     private actionService:WorkflowActionService,

//     private chargeService: ChargeService, private currencyService: CurrencyService, private decimalPipe: DecimalPipe) {

//     this.warrantForm = this._formBuilder.group({
//       id: [''],
//       // product: new FormGroup({
//       //   code:new FormControl(''),
//       //   description:new FormControl(''),
//       //   status:new FormControl('')

//       // }),
//       product:[''],
//       prodDesc:[''],
//       applicant: [''],
//       refNum: [''],
//       requestedAmount: [''],
//       approvedAmount: [''],
//       requestedAmountCcy:[''],
//       approvedAmountCcy:[''],
//       customerId:[''],
// 	   customerName:[''],
//       // requestedAmountCcy: new FormGroup({
//       //   code: new FormControl(''),
//       //   description: new FormControl('')
//       // }),
//       // approvedAmountCcy: new FormGroup({
//       //   code:new FormControl(''),
//       //   description: new FormControl('')
//       // }),
//       dateApproved: [''],
//       valPeriod: [''],
//       valPeriodType: [''],
//       expiryDate: [''],
//       purposeCode: [''],
//       chargeAccNo: [''],
//       servicingBranch: [''],
//       homeBranch: [''],
//       relationshipManagement: [''],
//       effectiveDate: [''],
//       product_id: [''],
//       status: [''],
//       field0: [''],
//       field1: [''],
//       field2: [''],
//       field3: [''],
//       field4: [''],
//       field5: [''],
//       field6: [''],
//       field7: [''],
//       field8: [''],
//       field9: [''],
//       field10: [''],
//       field11: [''],
//       field12: [''],
//       field13: [''],
//       field14: [''],
//       field15: [''],
//       field16: [''],
//       field17: [''],
//       field18: [''],
//       field19: [''],
//       field20: [''],
//       field21: [''],
//       field22: [''],
//       field23: [''],
//       field24: [''],
//       field25: [''],
//       field26: [''],
//       field27: [''],
//       field28: [''],
//       field29: [''],
//       field30: [''],
//       field31: [''],
//       field32: [''],
//       field33: [''],
//       field34: [''],
//       field35: [''],
//       field36: [''],
//       field37: [''],
//       field38: [''],
//       field39: [''],
//       field40: [''],
//       field41: [''],
//       field42: [''],
//       field43: [''],
//       field44: [''],
//       field45: [''],
//       field46: [''],
//       field47: [''],
//       field48: [''],
//       field49: [''],
//       field50: ['']
//     });

//   }

  ngOnInit() {

//     this.activatedRoute.params.subscribe(params => {

//       this.decode = JSON.parse(atob(params.navItem));

//       const operation = this.decode.operation;
//       const item = this.decode.product;
//       console.log("item",item)
//       console.log("instr",this.decode.instrumentRegister.product)

//       console.log(operation);
//       if (operation === 'In Transit') {
//         console.log('Yoga!');
//         this.setChildren = false;
//         this.destStep = item.destStep;
//         this.queueType = item.queueType;
//         this.destQueueId = item.destQueueId;
//         this.instrumentInTransitInit();
//       } else {
//         this.instrumentRegisterProductInit();
//         // this.getSectionsAndFields(this.instrumentRegister.product.id);
//       }

//     }
//     );




//     // this.keys = Object.keys(this.sections);
//     // console.log(Object.keys(this.sections));

//     // this.chRef.detectChanges();

//     // this.warrantForm.setValue(this._warrantService.getter());
//     /* this.warrantForm.patchValue({
//       id: this.instrumentRegister.id,
//       product: this.instrumentRegister.product.code,
//       refNum: this.instrumentRegister.reference,
//       homeBranch: this.instrumentRegister.homeBranch,
//       servicingBranch: this.instrumentRegister.servicingBranch,
//       relationshipManagement: this.instrumentRegister.relatioinshipMgt
//     }); */

//     this.currencyService.getCurrencies().subscribe((editorData => {
//       this.currencies = editorData;
//       console.log(editorData);

//     }));

//     this.formValueChanged();
  }


//   getAllBusinessprocessEventByBusProcIdAndQueueId() {

//     this.actionService.getAllBusinessProcessEvents(this.startQueueId, this.businessProId).subscribe((editorData => {
//       this.Events = editorData;

//     }), (err => {

//     }));
//   }
//   getWfBusinessProcessSetupByCriteria() {
//     this.actionService.getWfBusinessProcessSetupByCriteria("Account", "Create").subscribe((editorData => {
//       this.wfSetup = editorData;
//       this.businessProId = this.wfSetup.id;
//       this.startQueue = this.wfSetup.startQueue;
//       console.log('nnnnnn =' + this.startQueue);
//       this.startQueueId = this.wfSetup.startQueueId;
//       this.getAllBusinessprocessEventByBusProcIdAndQueueId();
//     }), (err => {

//     }));
//   }

//   getCalculatedCharges() {
//     console.log('Queuid = ' + this.startQueueId);
//     console.log('customerId=' + this.warrant.applicant.id);
//     //this.test.customerId
//     this.warrant.jobDataId = this.warrant.id;
//     this.actionService.getAllCalculatedCharge(this.warrant.busProEventId, this.warrant.applicant.id, this.warrant.transactionAmount, this.warrant.id, this.warrant).subscribe((editorData => {
//       this.CalculatedCharges = editorData;
//     }), (err => {

//     }));
//   }
//   UpdateCharge(id) {
//     // this.router.navigate(['/calculated-charge-info', id]);
//     this._router.navigate(['/calculated-charge-info'], { queryParams: { id: id, destStep: this.startQueue, queueType: 'Input', destQueueId: this.startQueueId, businessProId: this.businessProId } });

//     // this.actionService.updatedData(this.chargeSetup);
//     //this.router.navigate(['/charge-tier']);
//   }
//   /* transformAmt() {
//     const formattedAmt = this.decimalPipe.transform(amt, '1.2');
//   } */


//   instrumentRegisterProductInit() {
//     this.instrumentRegister = this.decode.instrumentRegister;
//     this.warrant.id = this.instrumentRegister.id;
//     this.warrant.refNum = this.instrumentRegister.reference;
//    // this.productName = this.instrumentRegister.product.description;
//     this.warrant.homeBranch = this.instrumentRegister.homeBranch.name;
//     this.getSectionsAndFields(this.instrumentRegister.product.id);
//     /*  if (this.instrumentRegister.customer != null && this.instrumentRegister.customer !== undefined) {
//        this.name = this.instrumentRegister.customer[0].name;
//      } */
//      let prodObject:Product

//     console.log('instr reg: ' + this.instrumentRegister);
//     this.warrantForm.patchValue({
//       id: this.instrumentRegister.id,
//       product: this.instrumentRegister.product.id,
//       prodDesc:this.instrumentRegister.product.description,
//       //description:this.instrumentRegister.product.description,
//       status:this.instrumentRegister.product.status,
//       //product_id: this.instrumentRegister.product.id,
//       applicant: this.instrumentRegister.customer,
//       refNum: this.instrumentRegister.reference,
//       homeBranch: this.instrumentRegister.homeBranch.name,
//       servicingBranch: this.instrumentRegister.servicingBranch.name,
//       relationshipManagement: this.instrumentRegister.relatioinshipMgt,
//       customerName:this.instrumentRegister.customer.fullname,
//       customerId:this.instrumentRegister.customer.id
//     });
//    // this.prodDescription = this.instrumentRegister.product.description
//     //his.warrantForm.get('product').setValue(this.instrumentRegister.product);
//     console.log("fdc",this.warrantForm.value)
//   }


//   processForm() {
//     this.warrant = this.warrantForm.value;
//     console.log(this.warrant);
//     if (this.warrant.id) {
//       this._warrantService.createWarrant(this.warrantForm.value).subscribe((editorData => {
//         this._smp.popUpAlertSuccess()
//         this._router.navigate(['/dashboard']);
//       }), err => {
//         this._smp.popUpAlertError(err);
//         console.log(err);
//       });
//     } else {
//       this._warrantService.updateWarrant(this.warrant).subscribe((editorData => {
//         this._router.navigate(['/warrant']);
//       }), err => {
//         console.log(err);
//       });
//     }
//   }

//   getSectionsAndFields(id) {
//     this._sectionService.getWarrantProductSectionz(id).subscribe(editorData => {
//       this.sections = editorData;
//       //this.sections.forEach(e=>e.)
//     });
//     this._fieldService.getWarrantProductFieldz(id).subscribe(editorData => {
//       this.fields = editorData;

//       console.log("Fields ",this.fields);
//       this.fields.map((field) => {
//       });
//       // console.log(editorData);
//     });

//   }

//   getWarrant(id) {
//     this._warrantService.getWarrant(id).subscribe((editorData) => {
//     });
//   }

//   instrumentInTransitInit() {
//     this.isInTransit = true;
//     const id = this.decode.product.id;
//     this._warrantService.getWarrant(this.decode.product.jobItemIdentification).subscribe((editorData) => {
//       this.getSectionsAndFields(editorData.product);
//       this.warrantForm.patchValue(editorData);

//     });
//     this.getQueuesForRejection(id);
//     this.getWorkflowByWfId(id);
//   }

//   getWorkflowByWfId(id) {
//     console.log("enter workflow ",id)
//     this._warrantService.getWarrantByWfId(id).subscribe((editorData) => {
//        this.warrant = editorData;

//       this.warrantForm.patchValue(this.warrant);
//     }
//     );
//   }
//   getQueuesForRejection(id) {
//     this._setupService.getQueuesForRejectionByWfProId(id).subscribe((editorData) => {
//       this.rejectSteps = editorData;
//     }
//     );
//   }

//   approve(warrant) {
//     warrant = this.warrant;
//     warrant.currentQueueId = this.destQueueId;
//     warrant.queueType = this.queueType;
//     this._warrantService.pushtoworkflow(warrant).subscribe((editorData => {
//       console.log('Prototype Map Created');
//       this._smp.popUpAlertSuccess();
//       this._router.navigate(['/dashboard/base'])

//     }), (err => {
//       console.log('Could not create a Template');
//       console.log(err);
//     }));


//   }
//   reject(warrant) {
//     if (warrant.rejectQueueId === null) {

//     }
//     warrant.currentQueueId = this.destQueueId;
//     warrant.queueType = this.queueType;
//     this._warrantService.rejectbacktoworkflow(warrant).subscribe((editorData => {
//       // this.gotoDashboard();
//     }), (err => {
//       console.log('Could not create a Template');
//       console.log(err);
//     }));


//   }

//   formValueChanged() {
//     console.log('here');
//     this.warrantForm.get('dateApproved').valueChanges.subscribe(
//       (mode: Date) => {
//         this.zdate = mode;
//         const ydate = new Date(mode);
//         ydate.setDate(ydate.getDate() + 30);
//         const fdate = ydate.toISOString().split('T')[0];
//         this.warrantForm.get('expiryDate').setValue(fdate);
//         // console.log(mode.setDate(mode.getDate() + 30));
//       });
//   }

  /* this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    ); */

}
