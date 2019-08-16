import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../../../class/global-url';
// import { ForexAllocation } from './forex-allocation';

@Injectable({
  providedIn: 'root'
})
export class ForexAllocationService {

  constructor(
    // private http:HttpClient
    // ,private url:GlobalUrl
    ) { }

  // createFxAllocation(fxBidCollationBatch){
  //   return this.http.post(this.url.baseUrl+"/api/forexBidCollationBatch",fxBidCollationBatch);
  // }
  // updateBidAllocation(fxBidCollationBatch){
  //   return this.http.put<ForexAllocation>(this.url.baseUrl+"/api/forexBidCollationBatch",fxBidCollationBatch);
  // }
  // getFxAllocation(id:number){
  //   return this.http.get<ForexAllocation>(this.url.baseUrl+'/api/forexBidCollationBatch'+ '/' +id)
  // }

  // public getFxAllocations() {
  //   return this.http.get<ForexAllocation[]>(this.url.baseUrl + '/api/forexBidCollationBatches');
  // }

  // public query(fxBidCollationBatch: ForexAllocation) {
  //   return this.http.post<ForexAllocation[]>(this.url.baseUrl + '/api/search/forexSource', fxBidCollationBatch);
  // }
}
