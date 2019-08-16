import { Injectable } from '@angular/core';
import { InwardCollectionAdjustment } from '../class/inward-collection-adjustment';

import { HttpClient, HttpParams } from '@angular/common/http';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';
// import { GlobalUrl } from 'src/app/class/global-url';

@Injectable({
  providedIn: 'root'
})
export class InwardCollectionAdjustmentService {

  constructor(private _http: HttpClient,
    //  private url : GlobalUrl
     ) { }




  // create(inw){
  //   return this._http.post<InwardCollectionAdjustment>(this.url.baseUrl+"/api/submitinwardCollectionAdjustmenttoworkflow", inw);
  // }
  // getICPWorkflowByWfId(id: number){
  //   return this._http.get<InwardCollectionAdjustment>(this.url.baseUrl+"/api/getinwardCollectionAdjustmentworkflowbywfid/"+id);
  // }
 
  // getOne(id: number){
  //   return this._http.get<InwardCollectionAdjustment>(this.url.baseUrl+"/api/inwardCollectionAdjustment/"+id);
  // }
 
  // pushtoworkflow(inw){
  //   return this._http.post<InwardCollectionAdjustment>(this.url.baseUrl+"/api/pushinwardCollectionAdjustmenttoworkflow",inw);
  // }
  
  // rejectbacktoworkflow(inw){
  //   return this._http.post<InwardCollectionAdjustment>(this.url.baseUrl+"/api/rejectinwardCollectionAdjustmentbacktoworkflow",inw);
  // }


  // public getAllCalculatedCharge(busProEventId, customerId,transactionAmount,transactionId,test) {
  
  //   let params = new HttpParams();
  //   return this._http.post<CalculatedChargeInfo[]>(this.url.baseUrl + '/api/getallInwardCollectionAdjustmentcalculatedChargeInfo',test); 
  // }
}