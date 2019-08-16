import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { InwardCollectionAcceptance } from '../class/inward-collection-acceptance';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';
// import { GlobalUrl } from 'src/app/class/global-url';

@Injectable({
  providedIn: 'root'
})
export class InwardCollectionAcceptanceService {

  constructor(private _http: HttpClient, 
    // private url : GlobalUrl
    ) { }


  // createImportLetterCreditAmend(inwardAccept){
  //   return this._http.post<any>(this.url.baseUrl+"/api/inwardCollectionAcceptance",inwardAccept, {observe : 'response'});
  // }
  


  // create(inw){
    
  //   return this._http.post<InwardCollectionAcceptance>(this.url.baseUrl+"/api/submitinwardCollectionAcceptancetoworkflow", inw);
  // }
  // getICPWorkflowByWfId(id: number){
  //   return this._http.get<InwardCollectionAcceptance>(this.url.baseUrl+"/api/getinwardCollectionAcceptanceworkflowbywfid/"+id);
  // }
 
  // getOne(id: number){
  //   return this._http.get<InwardCollectionAcceptance>(this.url.baseUrl+"/api/inwardCollectionAcceptance/"+id);
  // }

  // public getAllCalculatedCharge(busProEventId, customerId,transactionAmount,transactionId,test) {
  
  //   let params = new HttpParams();
  //   return this._http.post<CalculatedChargeInfo[]>(this.url.baseUrl + '/api/getallInwardCollectionAmendmentcalculatedChargeInfo',test); 
  // }
 
  // pushtoworkflow(inw){
  //   return this._http.post<InwardCollectionAcceptance>(this.url.baseUrl+"/api/pushinwardCollectionAcceptancetoworkflow",inw);
  // }
  
  // rejectbacktoworkflow(inw){
  //   return this._http.post<InwardCollectionAcceptance>(this.url.baseUrl+"/api/rejectinwardCollectionAcceptancebacktoworkflow",inw);
  // }
}