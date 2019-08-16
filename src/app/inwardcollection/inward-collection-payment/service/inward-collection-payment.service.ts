import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InwardCollectionPayment } from '../class/inward-collection-payment';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';
// import { GlobalUrl } from 'src/app/class/global-url';

@Injectable({
  providedIn: 'root'
})
export class InwardCollectionPaymentService {

  constructor(private _http: HttpClient, 
    // private url : GlobalUrl
    ) { }


  // createImportLetterCreditAmend(inwardPay){
  //   return this._http.post<any>(this.url.baseUrl+"/api/inwardCollectionPayment",inwardPay, {observe : 'response'});
  // }
  


  // create(inw){
  //   return this._http.post<InwardCollectionPayment>(this.url.baseUrl+"/api/submitinwardCollectionPaymenttoworkflow", inw);
  // }
  // getICPWorkflowByWfId(id: number){
  //   return this._http.get<InwardCollectionPayment>(this.url.baseUrl+"/api/getinwardCollectionPaymentworkflowbywfid/"+id);
  // }
 
  // getOne(id: number){
  //   return this._http.get<InwardCollectionPayment>(this.url.baseUrl+"/api/InwardCollectionPayment/"+id);
  // }
 
  // pushtoworkflow(inw){
  //   return this._http.post<InwardCollectionPayment>(this.url.baseUrl+"/api/pushinwardCollectionPaymenttoworkflow",inw);
  // }
  
  // rejectbacktoworkflow(inw){
  //   return this._http.post<InwardCollectionPayment>(this.url.baseUrl+"/api/rejectinwardCollectionPaymentbacktoworkflow",inw);
  // }

  // public getAllCalculatedCharge(busProEventId, customerId,transactionAmount,transactionId,test) {
  
  //   let params = new HttpParams();
  //   return this._http.post<CalculatedChargeInfo[]>(this.url.baseUrl + '/api/getallInwardCollectionPaymentcalculatedChargeInfo',test); 
  // }

}