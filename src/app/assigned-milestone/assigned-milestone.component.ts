import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import * as $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-bs4';
// import { MilestoneRef } from '../class/milestone-ref';
// import { LocationRouter } from '../class/LocationRouter';
// import { Product } from '../product/product';

// import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-assigned-milestone',
  templateUrl: './assigned-milestone.component.html',
  styleUrls: ['./assigned-milestone.component.css']
})
export class AssignedMilestoneComponent implements OnInit {
  // productMilestoneRef : MilestoneRef[];
  relatedTaskMilestone : boolean;
  // datatable: any;
  // product : Product;
  // navItem : any;
  // operation : string;
  
  // milestonesRefs : MilestoneRef[];


  constructor(
    private _activatedRoute : ActivatedRoute, 
    // private _productService : ProductService,
    // private _router : Router,  private  locator :LocationRouter,
    private chRef: ChangeDetectorRef
    ) { 
    
    }

  ngOnInit() {
    this.relatedTaskMilestone = true;
//     this._activatedRoute.params.subscribe(params=>{
//       let decode =  JSON.parse(atob(params.navItem)); 
//       this.product = decode.product;
//       this.operation = decode.operation;
//       console.log(this.product)
//       this._productService.getOne(this.product.id).subscribe(data=>{
//         this.product = data;
//         console.log(this.product)
    
//         this.productMilestoneRef = this.product.milestoneRef;
//         if(this.productMilestoneRef == undefined){
//           this.productMilestoneRef = [];
//         }
      
// console.log(this.productMilestoneRef)
//       });
//      });

  

  }

  
  // milestoneOperation(evt){
  //   evt.preventDefault();
  //  switch(evt.path[0].innerText){
  //    case 'Add':{
  //      this.relatedTaskMilestone = false;
  //     break;
  //    }
  //    case 'Modify':{
  
  //     break;
       
  //    }
  //    case 'Cancel':{

  

     
  //      break;
  //    }
  //    case 'View':{

  

     
  //      break;
  //    }
  //    default : {
       
  //     console.log(this.product)
  //     this.navItem = {
  //      'operation' : this.operation,
  //      'product' : this.product
  //    }
  //      this.locator.getLocation(this.product.productSubCategory.productCategory.code, this.navItem);
  //   }

  //  }

  // }




  // operationClose(){
  //   this.ngOnInit();
  // }

  // assignSelectedMilestone(){
  //   console.log("assigned clicked");
  //   this.ngOnInit();

  // }
}
