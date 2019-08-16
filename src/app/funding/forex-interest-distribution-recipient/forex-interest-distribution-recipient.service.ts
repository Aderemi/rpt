import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ForexInterestDistributionRecipient } from './forex-interest-distribution-recipient';

@Injectable({
  providedIn: 'root'
})
export class ForexInterestDistributionRecipientService {
  constructor(private http: HttpClient) { }
  //private fxBidCollReq: ForexBidCollationBatchRequest;
  private baseUrl: String = 'http://localhost:5002';

  public createFxIntDistributionRecipient(fxIntDistRec) {
    return this.http.post(this.baseUrl + '/api/forexInterestDistributionRecipient', fxIntDistRec);

  }
 

  // public getForexBidCollationBatchRequestsById(id){
  //   //console.log("hfdii",id)
  //   return this.http.get<ForexInterestDistributionRecipient[]>(this.baseUrl +'/api/forexInterestDistributionRecipientsById' + '/' + id)
  // }
 
  // public getFxIntDistRecipients(){
  //   return this.http.get<ForexInterestDistributionRecipient[]>(this.baseUrl +'/api/forexInterestDistributionRecipients')
  // }
 
  // public getFxIntDistRecipient(id: number) {
  //   return this.http.get<ForexInterestDistributionRecipient>(this.baseUrl + '/api/forexInterestDistributionRecipient' + '/' + id);
  // }
  // public deleteFxIntDistRecipient(id: number) {
  //   return this.http.delete(this.baseUrl + '/api/forexInterestDistributionRecipient' + '/' + id);
  // }

  // public updateFxIntDistRecipient(fxIntDistRec) {
  //   return this.http.put(this.baseUrl + '/api/forexBidCollationBatchRequest', fxIntDistRec);
  // }
}
