import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../../../class/global-url';
// import { ForexBidSession } from './forex-bid-session';

@Injectable({
  providedIn: 'root'
})
export class ForexBidSessionService {

  constructor(
    // private http:HttpClient
    // ,private url:GlobalUrl
    ) { }

//   public createForexBidSession(fxBidSession){
//     return this.http.post(this.url.baseUrl+'/api/submitforexRequesttoworkflow',fxBidSession);

//   }
//   public getBidSessions(){
//     return this.http.get<ForexBidSession[]>(this.url.baseUrl+'/api/forexRequests');
//   }
//   public updateForexBidSession(fxBidSession){
//     return this.http.put(this.url.baseUrl+'/api/forexRequest',fxBidSession);
//   }

//   public getForexBidSession(id:number){
//     return this.http.get<ForexBidSession>(this.url.baseUrl+'/api/exportLetterOfCredit'+'/'+id);
//   }
//   public deleteForexBidSession(id:number){
//     return this.http.delete(this.url.baseUrl+'/api/forexRequest'+'/'+id);
//   }
//   // public getReferenceNumber(number){
//   //   return this.http.get<ForexBidSession>(this.url.baseUrl+'/api/getReferenceNumber');
//   // }

//   getReferenceNumber(){
//     return this.http.get<any>(this.url.baseUrl + '/api/bidSessionReferenceNumber');
//   }

//   createID(id){
//     return this.http.post(this.url.baseUrl+"/api/iDGenerator",id );

//   }

  
//   public CreateForexBidSessionInWorkflow(fxBidCollBatch){
//     return this.http.post(this.url.baseUrl+'/api/submitforexBidSessiontoworkflow',fxBidCollBatch);

//   }
//   getICPWorkflowByWfId(id: number){
//     console.log("service",id)
//    return this.http.get<ForexBidSession>(this.url.baseUrl+'/api/getforexBidSessionworkflowbywfid' +'/'+id);
//  }

//  pushtoworkflow(inw){
//    return this.http.post<ForexBidSession>(this.url.baseUrl+"/api/pushforexBidSessiontoworkflow",inw);
//  }
 
//  rejectbacktoworkflow(inw){
//    return this.http.post<ForexBidSession>(this.url.baseUrl+"/api/rejectforexBidSessionbacktoworkflow",inw);
//  }
  
}
