import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InwardCollectionCancellation } from '../class/inward-collection-cancellation';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';
// import { GlobalUrl } from 'src/app/class/global-url';

@Injectable({
  providedIn: 'root'
})
export class InwardCollectionCancellationService {

  constructor(private _http: HttpClient, 
    // private url : GlobalUrl
    ) { }


  // createImportLetterCreditAmend(inwardCance){
  //   return this._http.post<any>(this.url.baseUrl+"/api/inwardCollectionCancellation",inwardCance, {observe : 'response'});
  // }
  


  // create(inw){
  //   return this._http.post<InwardCollectionCancellation>(this.url.baseUrl+"/api/submitinwardCollectionCancellationtoworkflow", inw);
  // }
  // getICPWorkflowByWfId(id: number){
  //   return this._http.get<InwardCollectionCancellation>(this.url.baseUrl+"/api/getinwardCollectionCancellationworkflowbywfid/"+id);
  // }
 
  // getOne(id: number){
  //   return this._http.get<InwardCollectionCancellation>(this.url.baseUrl+"/api/inwardCollectionCancellation/"+id);
  // }
 
  // pushtoworkflow(inw){
  //   return this._http.post<InwardCollectionCancellation>(this.url.baseUrl+"/api/pushinwardCollectionCancellationtoworkflow",inw);
  // }
  
  // rejectbacktoworkflow(inw){
  //   return this._http.post<InwardCollectionCancellation>(this.url.baseUrl+"/api/rejectinwardCollectionCancellationbacktoworkflow",inw);
  // }
  // public getAllCalculatedCharge(busProEventId, customerId,transactionAmount,transactionId,test) {
  
  //   let params = new HttpParams();
  //   return this._http.post<CalculatedChargeInfo[]>(this.url.baseUrl + '/api/getallInwardCollectionCancellationcalculatedChargeInfo',test); 
  // }
}