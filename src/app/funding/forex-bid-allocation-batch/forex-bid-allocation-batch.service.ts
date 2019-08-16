import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../../../class/global-url';
// import { ForexBidAllocationBatch } from './forex-bid-allocation-batch';
// import { ForexBidCollationBatchRequest } from '../forex-bid-collation-batch-request/forex-bid-collation-batch-request';

@Injectable({
  providedIn: 'root'
})
export class ForexBidAllocationBatchService {

  constructor(private http:HttpClient
    // ,private url:GlobalUrl
    ) { }

//   createFxBidAllocationBatch(fxBidCollationBatch){
//     return this.http.post(this.url.baseUrl+"/api/forexBidCollationBatch",fxBidCollationBatch);
//   }
//   updateFxBidAllocationBatch(fxBidCollationBatch){
//     return this.http.put<ForexBidAllocationBatch>(this.url.baseUrl+"/api/forexBidCollationBatch",fxBidCollationBatch);
//   }
//   getFxBidAllocationBatch(id:number){
//     return this.http.get<ForexBidAllocationBatch>(this.url.baseUrl+'/api/forexBidCollationBatch'+ '/' +id)
//   }
//   public getForexBidCollationBatchRequestsById(id){
//     //console.log("hfdii",id)
//     return this.http.get<ForexBidCollationBatchRequest[]>(this.url.baseUrl +'/api/forexBidCollationBatchRequestsById' + '/' + id)
//   }
//   public getFxBidAllocationBatches() {
//     return this.http.get<ForexBidAllocationBatch[]>(this.url.baseUrl + '/api/forexBidCollationBatches');
//   }
//   public getFxBidAllocationsByReference(ref:any) {
//     return this.http.get<ForexBidCollationBatchRequest[]>(this.url.baseUrl + '/api/forexBidCollationBatches' +'/'+ref);
//   }
//   public query(fxBidCollationBatch: ForexBidAllocationBatch) {
//     return this.http.post<ForexBidAllocationBatch[]>(this.url.baseUrl + '/api/search/forexSource', fxBidCollationBatch);
//   }
//   getReferenceNumber(){

//     return this.http.get<any>(this.url.baseUrl + '/api/bidAllocationReferenceNumber');
//   }
//   createID(id){
//     return this.http.post(this.url.baseUrl+"/api/iDGenerator",id );

//   }

  
//   public CreateForexBidAllocationBatchInWorkflow(fxBidCollBatch){
//     return this.http.post(this.url.baseUrl+'/api/submitforexBidAllocationBatchtoworkflow',fxBidCollBatch);

//   }
//   getICPWorkflowByWfId(id: number){
//     console.log("service",id)
//    return this.http.get<ForexBidAllocationBatch>(this.url.baseUrl+'/api/getforexBidAllocationBatchworkflowbywfid' +'/'+id);
//  }

//  pushtoworkflow(inw){
//    return this.http.post<ForexBidAllocationBatch>(this.url.baseUrl+"/api/pushforexBidAllocationBatchtoworkflow",inw);
//  }
 
//  rejectbacktoworkflow(inw){
//    return this.http.post<ForexBidAllocationBatch>(this.url.baseUrl+"/api/rejectforexBidAllocationBatchbacktoworkflow",inw);
//  }
  
}
