import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
// import { BusinessProcess } from '../business-process/business-process';

import { Router, ActivatedRoute } from '@angular/router';
// import { ProductService } from '../product/product.service';
// import { Product } from '../product/product';
// import { LocationRouter } from '../class/LocationRouter';
// import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { BusinessProcessService } from '../business-process/business-process.service';
// import { WorkflowProcessSetup } from '../class/workflow-processsetup';
// import { WorkflowProcessSetupService } from 'src/app/services/workflow-processsetup.service';
// import { ServiceRef } from '../service_ref/class/service-ref';
// import { ServiceRefService } from '../service_ref/service/service-ref.service';

@Component({
  selector: 'app-assigned-business-process',
  templateUrl: './assigned-business-process.component.html',
  styleUrls: ['./assigned-business-process.component.css']
})
export class AssignedBusinessProcessComponent implements OnInit {

  selectedRow : Number;
  setClickedRow : Function;
  games : any[];


  // serviceRefs : ServiceRef[];
  // bvusinessProcesses : BusinessProcess[];
  // productBusinessProcess : BusinessProcess[];
  relatedTaskBusinessProcess : boolean;
  // datatable: any;
  // product : Product;
  // navItem : any;
  // operation : string;
  
  // selCha : BusinessProcess;
  // wfProcessSetups : WorkflowProcessSetup[];
  // wfProcessSetup : WorkflowProcessSetup;
  constructor(
    // private _bizProcessService : BusinessProcessService, private serviceRefService : ServiceRefService,
    // private wfProcessSetupService : WorkflowProcessSetupService, private locator : LocationRouter,
    // private _activatedRoute : ActivatedRoute, private _productService : ProductService,  private modalService: NgbModal,
    private _router : Router, private chRef: ChangeDetectorRef) { 
    
      
 
    }

  ngOnInit() {

    this.games = [{
      game : "Deus Ex: Mankind Divided",
      platform: " Xbox One, PS4, PC",
      release : "August 23"
  },
  {
      game : "Amplitude",
      platform: " PS4",
      release : "January 5"
  },
  {
      game : "The Huntsman: Winter's Curse",
      platform: "PS4",
      release : "August 23"
  },
  {
      game : "Resident Evil Zero HD Remaster",
      platform: "Win, PS3, PS4, X360, XBO",
      release : "January 19"
  },
  {
      game : "Lego Marvel's Avengers",
      platform: "Win, X360, XBO, PS3, PS4, PSVita, WiiU, 3DS",
      release : "January 26"
  }];

    this.setClickedRow = function(index){
      this.selectedRow = index;
  }
//     this.selCha = new  BusinessProcess();
    this.relatedTaskBusinessProcess = true;
//     this._activatedRoute.params.subscribe(params=>{
//       let decode =  JSON.parse(atob(params.navItem)); 
//       this.product = decode.product;
//       this.operation = decode.operation;
//       console.log(this.product)
//       this._productService.getOne(this.product.id).subscribe(data=>{
//         this.product = data;
//         console.log(this.product)
//         ;
//         this.productBusinessProcess = this.product.businessProcess;
//         if(this.productBusinessProcess == undefined){
//           this.productBusinessProcess = [];
//         }
// // write the code that gets the service refs from the db and creates an business process objects with place holders

// let ax = new ServiceRef();

// ax.prodCatCd = this.product.productSubCategory.productCategory.code;
// this.getServiceRef(ax); 

//         console.log(this.productBusinessProcess)

//       });
//     });


}


// get the code and create the Business process objets, assign it to 


// getServiceRef(ser_ref){
//   this.serviceRefService.getFilter(ser_ref).subscribe(data=>{
//     this.serviceRefs = data

//     console.log(this.serviceRefs);
//     ;
// ////  run a loop, check if each ctraccref is in control accouunt.... the idea, if not create, if it is continue.
//     for(let i = 0; i < this.serviceRefs.length; i++){
//       let found = false;
//       for(let j = 0; j < this.productBusinessProcess.length; j++ ){
          
//         if(this.serviceRefs[i].id === this.productBusinessProcess[j].serviceRef.id){
//           found = true;
//           break;
//         }
//       }
//       if(!found){
//         let v = new BusinessProcess();
//         v.serviceRef = this.serviceRefs[i];
//         v.id = undefined;
//         this.productBusinessProcess.push(v);
//       }
//     }
//   ;
//     console.log(this.productBusinessProcess);
 
//   });
// }


// businessProcessOperation(evt){
//   evt.preventDefault();
//   switch(evt.path[0].innerText){
//     case 'Add':{
//       this.relatedTaskBusinessProcess = false;
//      break;
//     }
//     case 'Modify':{
 
//      break;
      
//     }
//     case 'Cancel':{

 

    
//       break;
//     }
//     case 'View':{

 

    
//       break;
//     }
//     default : {
//      console.log(this.product)
//      this.navItem = {
//       'operation' : this.operation,
//       'product' : this.product
//     }
//       this.locator.getLocation(this.product.productSubCategory.productCategory.code, this.navItem);
//    }

//   }


// }
// operationClose(){
//   this.ngOnInit();
// }

// assignedSelectedBusinessProcess(){
//   console.log("assigned clicked");
//   this.ngOnInit();
// }


// prev : BusinessProcess = new BusinessProcess();

// //modify biz process
// setSelected(cha){
//   this.selCha = cha;
// }
// descr = " hello";
// modifyBizProcess(cha , modifyBusinessProcess){
//  this.prev.delim = cha.delim;
//  this.prev.id = cha.id;
//  this.prev.incrment = cha.incrment;
//  this.prev.seqnce = cha.seqnce;
//  this.prev.serviceRef = cha.serviceRef;
//  this.prev.surfix = cha.surfix;

// // get the business process for the category by using the category code and service code

// let wfps = new WorkflowProcessSetup();
// wfps.serviceCode = this.prev.serviceRef.code;
// wfps.productCategoryCode = this.prev.serviceRef.prodCatCd;
// this.wfProcessSetups = [];
// this.wfProcessSetupService.getFiltered(wfps).subscribe(data=>{
 
//     //  this.wfProcessSetup = data;
      
//       this.prev.workflowProcessSetup = data;
//       console.log(this.prev);
//       this.descr = this.prev.workflowProcessSetup.templateDesc;
//       this.openModifier(modifyBusinessProcess);
//   }
// );
// }


// closeResult : string;

// openModifier(modifyBusinessProcess){

//   this.modalService.open(modifyBusinessProcess, { size: 'lg' }).result.then((result) => {
//     this.onSave();
//     this.closeResult = `Closed with: ${result}`;
    
//   }, (reason) => {
//     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//   });
// }

// onSave(){
//  //  write to db here

//  this.selCha.incrment = this.prev.incrment;
//  this.selCha.delim = this.prev.delim;
//  this.selCha.id = this.prev.id;

//  this.selCha.seqnce = this.prev.seqnce;
//  this.selCha.serviceRef = this.prev.serviceRef;
//  this.selCha.surfix = this.prev.surfix;
//  this.selCha.workflowProcessSetup = this.prev.workflowProcessSetup;
 
//  console.log(this.selCha)
// let v = {
//   "biz" : this.selCha,
//   "pid" : this.product.id
// }
//  this._bizProcessService.update(v).subscribe(data=>{
//    ;
//   this.selCha = data;
// });
 

// }


// private getDismissReason(reason: any): string {
 
//   console.log(this.prev)
//   console.log(this.selCha)
//   if (reason === ModalDismissReasons.ESC) {
//     return 'by pressing ESC';
//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//     return 'by clicking on a backdrop';
//   } else {
//     return  `with: ${reason}`;
//   }
// }

}
