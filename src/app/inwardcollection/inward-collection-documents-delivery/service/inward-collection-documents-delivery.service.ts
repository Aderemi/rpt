import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// import { InwardCollectionDocumentsDelivery } from '../class/inward-collection-documents-delivery';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';
// import { GlobalUrl } from 'src/app/class/global-url';

@Injectable({
  providedIn: 'root'
})
export class InwardCollectionDocumentsDeliveryService {
  
  constructor(private _http: HttpClient,
    //  private url : GlobalUrl
     ) { }


  // createImportLetterCreditAmend(inwardDocument){
  //   return this._http.post<any>(this.url.baseUrl+"/api/inwardCollectionDocumentsDelivery",inwardDocument, {observe : 'response'});
  // }
  


  // create(inw){
  //   return this._http.post<InwardCollectionDocumentsDelivery>(this.url.baseUrl+"/api/submitinwardCollectionDocumentsDeliverytoworkflow", inw);
  // }
  // getICPWorkflowByWfId(id: number){
  //   return this._http.get<InwardCollectionDocumentsDelivery>(this.url.baseUrl+"/api/getinwardCollectionDocumentsDeliveryworkflowbywfid/"+id);
  // }
 
  // getOne(id: number){
  //   return this._http.get<InwardCollectionDocumentsDelivery>(this.url.baseUrl+"/api/inwardCollectionDocumentsDelivery/"+id);
  // }
 
  // pushtoworkflow(inw){
  //   return this._http.post<InwardCollectionDocumentsDelivery>(this.url.baseUrl+"/api/pushinwardCollectionDocumentsDeliverytoworkflow",inw);
  // }
  
  // rejectbacktoworkflow(inw){
  //   return this._http.post<InwardCollectionDocumentsDelivery>(this.url.baseUrl+"/api/rejectinwardCollectionDocumentsDeliverybacktoworkflow",inw);
  // }

  // public getAllCalculatedCharge(busProEventId, customerId,transactionAmount,transactionId,test) {
  
  //   let params = new HttpParams();
  //   return this._http.post<CalculatedChargeInfo[]>(this.url.baseUrl + '/api/getallInwardCollectionDocumentsDeliverycalculatedChargeInfo',test); 
  // }
}