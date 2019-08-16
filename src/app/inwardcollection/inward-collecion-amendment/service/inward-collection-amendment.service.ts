import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// import { InwardCollectionAmendment } from '../class/inward-collection-amendment';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';
// import { GlobalUrl } from 'src/app/class/global-url';

@Injectable({
  providedIn: 'root'
})
export class InwardCollectionAmendmentService {

  // constructor(private _http: HttpClient, private url : GlobalUrl) { }


  // createImportLetterCreditAmend(inwardAmend){
  //   return this._http.post<any>(this.url.baseUrl+"/api/inwardCollectionAmendment",inwardAmend, {observe : 'response'});
  // }
  


  // create(inw){
  //   return this._http.post<InwardCollectionAmendment>(this.url.baseUrl+"/api/submitinwardCollectionAmendmenttoworkflow", inw);
  // }
  // getICPWorkflowByWfId(id: number){
  //   return this._http.get<InwardCollectionAmendment>(this.url.baseUrl+"/api/getinwardCollectionAmendmentworkflowbywfid/"+id);
  // }
 
  // getOne(id: number){
  //   return this._http.get<InwardCollectionAmendment>(this.url.baseUrl+"/api/inwardCollectionAmendment/"+id);
  // }
 
  // pushtoworkflow(inw){
  //   return this._http.post<InwardCollectionAmendment>(this.url.baseUrl+"/api/pushinwardCollectionAmendmenttoworkflow",inw);
  // }
  
  // rejectbacktoworkflow(inw){
  //   return this._http.post<InwardCollectionAmendment>(this.url.baseUrl+"/api/rejectinwardCollectionAmendmentbacktoworkflow",inw);
  // }

  // public getAllCalculatedCharge(busProEventId, customerId,transactionAmount,transactionId,test) {
  
  //   let params = new HttpParams();
  //   return this._http.post<CalculatedChargeInfo[]>(this.url.baseUrl + '/api/getallInwardCollectionAmendmentcalculatedChargeInfo',test); 
  // }
}