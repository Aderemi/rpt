import { Component, OnInit, Input,OnChanges} from '@angular/core';
// import { ForexAllocation } from './forex-allocation';
// import { ForexSourceService } from '../forex-source/forex-source.service';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
// import { ForexAllocationService } from './forex-allocation.service';
// import { ForexBidAllocationBatch } from '../forex-bid-allocation-batch/forex-bid-allocation-batch';
// import { ForexBidCollationBatch } from '../forex-bid-collation-batch/forex-bid-collation-batch';
// import { ForexBidCollationBatchService } from '../forex-bid-collation-batch/forex-bid-collation-batch.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ForexBidCollationBatchRequest } from '../forex-bid-collation-batch-request/forex-bid-collation-batch-request';
// import { CurrencyService } from '../../staticdata/currency/currency.service';

@Component({
  selector: 'app-forex-allocation',
  templateUrl: './forex-allocation.component.html',
  styleUrls: ['./forex-allocation.component.css']
})
export class ForexAllocationComponent implements OnInit,OnChanges {
  @Input()
  fxBidAllocationBatch;
  @Input()
  totalRequestedAmount;
  @Input()
  // forexAllocations:ForexBidCollationBatchRequest[]= [];
  // fxAllocation: ForexAllocation = new ForexAllocation();
  // selectedAllocation:ForexAllocation = new ForexAllocation();
  // fxAllocations: ForexAllocation[] = [];
  view: number
  // selectedFxAllocation: any
  // fxCollationBatches: ForexBidCollationBatch[] = []
  constructor(
    // private fxSourceService: ForexSourceService, private router: Router,
    // private decimalPipe: DecimalPipe,
    // private fxAllocationService: ForexAllocationService,
    // private modalService: NgbModal,
    // private fxBidCollationBatchService: ForexBidCollationBatchService,
    // private currencyService: CurrencyService
    ) {
    this.view = 0;
  }
  ngOnInit() {
    console.log("obj",this.fxBidAllocationBatch)
    //this.getAllFxAllocations()
  }

  ngOnChanges(event){
    // this.fxAllocations = event.fxBidAllocationBatch.currentValue; 
    // console.log("event",event)
  }

//   setForex(event:any,selectedAllocation){
//     this.selectedAllocation = selectedAllocation;
//     console.log("fxAllocation",this.fxAllocation)
//   }
//   open(content, event){
//     if (event == "bidRequest"){
//       this.fxAllocation = this.selectedAllocation;
//       this.modalService.open(content, { size: 'lg' });

//     }

//   }
//   createFxAllocation() {
//     this.fxAllocationService.createFxAllocation(this.fxAllocation).subscribe(data => {
//       console.log("Successfuly created")
//     })
//   }
//   updateFxAllocation() {

//     this.fxAllocationService.updateBidAllocation(this.fxAllocation).subscribe(data => {
//       console.log("Successfully updated")
//     })
//   }
//   getFxAllocations() {
//     this.fxAllocationService.getFxAllocations().subscribe(data => {
//       this.fxAllocations = data;
//     })
//   }



// operation(event){
//   switch (event.path[0].innerText) {
//     case 'Add': {
//       console.log("Enter here")
//       this.view = 1;

//     }
//   }
// }

// set(event: any, selectedFxAllocation: any) {
//   this.selectedFxAllocation = selectedFxAllocation;
// }

// equals(o1, o2) {
//   if (o1 != null && o2 != null) {

//     return o1.code == o2.code ? true : false;
//   }
//   return false;
// }
 

}
