import { Injectable } from '@angular/core';
import { InwardBankPayment } from './inward-bank-payment';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { GlobalUrl } from 'src/app/class/global-url';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';

@Injectable({
  providedIn: 'root'
})
export class InwardBankPaymentService {

  constructor(private _http: HttpClient,
    //  private url : GlobalUrl
     ) {
   
  }

//  create(inw: InwardBankPayment){
//    return this._http.post<InwardBankPayment>(this.url.baseUrl+"/api/submitinwardBankPaymenttoworkflow", inw);
//  }
//  getICPWorkflowByWfId(id: number){
//    return this._http.get<InwardBankPayment>(this.url.baseUrl+"/api/getinwardBankPaymentworkflowbywfid/"+id);
//  }

//  getOne(id: number){
//    return this._http.get<InwardBankPayment>(this.url.baseUrl+"/api/inwardBankPayment/"+id);
//  }

//  pushtoworkflow(inw){
//    return this._http.post<InwardBankPayment>(this.url.baseUrl+"/api/pushinwardBankPaymenttoworkflow",inw);
//  }
 
//  rejectbacktoworkflow(inw){
//    return this._http.post<InwardBankPayment>(this.url.baseUrl+"/api/rejectinwardBankPaymentbacktoworkflow",inw);
//  }


//  public getAllCalculatedCharge(busProEventId, customerId,transactionAmount,transactionId,test) {
  
//   let params = new HttpParams();
//   return this._http.post<CalculatedChargeInfo[]>(this.url.baseUrl + '/api/getallInwardBankPaymentcalculatedChargeInfo',test); 
// }
}
