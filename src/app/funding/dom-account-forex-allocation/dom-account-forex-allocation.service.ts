import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomAccountForexAllocation } from './dom-account-forex-allocation';
// import { GlobalUrl } from 'src/app/class/global-url';

@Injectable({
  providedIn: 'root'
})
export class DomAccountForexAllocationService {
  constructor(private http:HttpClient
    // ,private url:GlobalUrl
    ) { }

  // createDomAcctFxAllocation(fxBidCollationBatch){
  //   return this.http.post(this.url.baseUrl+"/api/forexBidCollationBatch",fxBidCollationBatch);
  // }
  // updateDomAcctFxAllocation(fxBidCollationBatch){
  //   return this.http.put<DomAccountForexAllocation>(this.url.baseUrl+"/api/forexBidCollationBatch",fxBidCollationBatch);
  // }
  // getDomAcctFxAllocation(id:number){
  //   return this.http.get<DomAccountForexAllocation>(this.url.baseUrl+'/api/forexBidCollationBatch'+ '/' +id)
  // }

  // public getDomAcctFxAllocations() {
  //   return this.http.get<DomAccountForexAllocation[]>(this.url.baseUrl + '/api/forexBidCollationBatches');
  // }

  // public query(fxBidCollationBatch: DomAccountForexAllocation) {
  //   return this.http.post<DomAccountForexAllocation[]>(this.url.baseUrl + '/api/search/forexSource', fxBidCollationBatch);
  // }

  // getReferenceNumber(){
  //   return this.http.get<any>(this.url.baseUrl + '/api/domAcctAllocationReferenceNumber');
  // }
}
