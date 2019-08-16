import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ForexBidCollationBatch } from './forex-bid-collation-batch';
// import { ForexRequest } from '../forex-request/forex-request';
// import { GlobalUrl } from 'src/app/class/global-url';

@Injectable({
  providedIn: 'root'
})
export class ForexBidCollationBatchService {

  constructor(private http:HttpClient
    // ,private url:GlobalUrl
    ) { }

//   createID(id){
//     return this.http.post(this.url.baseUrl+"/api/iDGenerator",id );

//   }
//   createFxBidCollationBatch(fxBidCollationBatch){
//     return this.http.post<any>(this.url.baseUrl+"/api/forexBidCollationBatch",fxBidCollationBatch, {observe : 'response'});

//   }
//   updateToFxBidCollationBatch(fxBidCollationBatch){
//     return this.http.put<any>(this.url.baseUrl+"/api/submitforexBidCollationBatchtoworkflow",fxBidCollationBatch);
//   }
//   updateFxBidCollationBatch(fxBidCollationBatch){
//     return this.http.put<ForexBidCollationBatch>(this.url.baseUrl+"/api/forexBidCollationBatch",fxBidCollationBatch);
//   }
//   getFxBidCollationBatch(id:number){
//     return this.http.get<ForexBidCollationBatch>(this.url.baseUrl+'/api/forexBidCollationBatch'+ '/' +id)
//   }

//   geFxBidRequest(){
//     return this.http.get<ForexRequest[]>(this.url.baseUrl + '/api/activatedForexRequests');
//   }
//   public getFxBidCollationBatches() {
//     return this.http.get<ForexBidCollationBatch[]>(this.url.baseUrl + '/api/forexBidCollationBatches');
//   }
  
//   getReferenceNumber(){

//     return this.http.get<any>(this.url.baseUrl + '/api/referenceNumber');
//   }
//   public query(fxBidCollationBatch: ForexBidCollationBatch) {
//     return this.http.post<ForexBidCollationBatch[]>(this.url.baseUrl + '/api/search/forexSource', fxBidCollationBatch);
//   }

//   public CreateForexBidCollationBatchInWorkflow(fxBidCollBatch:any){
//     return this.http.post(this.url.baseUrl+'/api/submitforexBidCollationBatchtoworkflow',fxBidCollBatch);

//   }
//   getICPWorkflowByWfId(id: number){
//     console.log("service",id)
//    return this.http.get<ForexBidCollationBatch>(this.url.baseUrl+'/api/getforexBidCollationBatchworkflowbywfid' +'/'+id);
//  }

//  pushtoworkflow(inw){
//    return this.http.post<ForexBidCollationBatch>(this.url.baseUrl+"/api/pushforexBidCollationBatchtoworkflow",inw);
//  }
 
//  rejectbacktoworkflow(inw){
//    return this.http.post<ForexBidCollationBatch>(this.url.baseUrl+"/api/rejectforexBidCollationBatchbacktoworkflow",inw);
//  }
}
