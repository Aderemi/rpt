import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ForexBidCollationBatchRequest } from './forex-bid-collation-batch-request';
// import { ForexRequest } from '../forex-request/forex-request';

@Injectable({
  providedIn: 'root'
})
export class ForexBidCollationBatchRequestService {

 
  constructor(private http: HttpClient) { }
  //private fxBidCollReq: ForexBidCollationBatchRequest;
  private baseUrl: String = 'http://localhost:5002';

  public createFxBidCollationRequest(fxBidCollReq) {
    
    return this.http.post(this.baseUrl + '/api/forexBidCollationBatchRequest', fxBidCollReq);

  }
  // public getFxBidCollationRequests() {
  //   return this.http.get<ForexRequest[]>(this.baseUrl + '/api/activatedForexRequests');
  // }

  public getForexBidCollationBatchRequestsById(id){
    //console.log("hfdii",id)
    return this.http.get<ForexBidCollationBatchRequest[]>(this.baseUrl +'/api/forexBidCollationBatchRequestsById' + '/' + id)
  }
 
  public getForexBidCollationBatchRequests(){
    return this.http.get<ForexBidCollationBatchRequest[]>(this.baseUrl +'/api/forexBidCollationBatchRequests')
  }
  public getFxBidCollationBatchRequestLatestId(){
    return this.http.get<any>(this.baseUrl +'/api/forexBidCollationBatchRequestsOrderById')

  }
  public getFxBidCollationRequest(id: number) {
    return this.http.get<ForexBidCollationBatchRequest>(this.baseUrl + '/api/forexBidCollationBatchRequest' + '/' + id);
  }
  public deleteFxBidCollationRequest(id: number) {
    return this.http.delete(this.baseUrl + '/api/forexBidCollationBatchRequest' + '/' + id);
  }

  public updateFxBidCollationRequest(bfxBidCollReqranch) {
    return this.http.put(this.baseUrl + '/api/forexBidCollationBatchRequest', bfxBidCollReqranch);
  }
}
