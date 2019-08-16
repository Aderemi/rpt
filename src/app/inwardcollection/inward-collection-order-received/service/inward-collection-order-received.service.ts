import { Injectable } from '@angular/core';
import { InwardCollectionOrderReceived } from '../class/inward-collection-order-received';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { GlobalUrl } from 'src/app/class/global-url';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';

@Injectable({
  providedIn: 'root'
})
export class InwardCollectionOrderReceivedService {
  constructor(private _http: HttpClient,
    //  private url : GlobalUrl
     ) {
   
  }

//  create(inw){
//    return this._http.post<InwardCollectionOrderReceived>(this.url.baseUrl+"/api/submitinwardCollectionOrderReceivedtoworkflow", inw, { observe: 'response' });

//  }
//  getICPWorkflowByWfId(id: number){
//    return this._http.get<InwardCollectionOrderReceived>(this.url.baseUrl+"/api/getinwardCollectionOrderReceivedworkflowbywfid/"+id);
//  }

//  getOne(id: number){
//    return this._http.get<InwardCollectionOrderReceived>(this.url.baseUrl+"/api/inwardCollectionOrderReceived/"+id);
//  }

//  pushtoworkflow(inw){
//    return this._http.post<InwardCollectionOrderReceived>(this.url.baseUrl+"/api/pushinwardCollectionOrderReceivedtoworkflow",inw);
//  }
 
//  rejectbacktoworkflow(inw){
//    return this._http.post<InwardCollectionOrderReceived>(this.url.baseUrl+"/api/rejectinwardCollectionOrderReceivedbacktoworkflow",inw);
//  }



//  public getAllCalculatedCharge(busProEventId, customerId,transactionAmount,transactionId,test) {
//   let params = new HttpParams();
//   return this._http.post<CalculatedChargeInfo[]>(this.url.baseUrl + '/api/getallInwardCollectionOrderReceivedcalculatedChargeInfo',test); 
// }
// getallInwardCollectionOrderReceivedcalculatedChargeInfo
}