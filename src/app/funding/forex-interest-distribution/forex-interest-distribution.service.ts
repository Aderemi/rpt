import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../../../class/global-url';
// import { ForexInterestDistribution } from './forex-interest-distribution';

@Injectable({
  providedIn: 'root'
})
export class ForexInterestDistributionService {

  constructor(private http:HttpClient
    // , private url:GlobalUrl
    ) { }

  // createForexInterestDistribution(fxBidCollationBatch){
  //   console.log("object",fxBidCollationBatch)
  //   return this.http.post<any>(this.url.baseUrl+"/api/forexInterestDistribution",fxBidCollationBatch, {observe : 'response'});

  // }

  // createID(id){
  //   return this.http.post(this.url.baseUrl+"/api/iDGenerator",id );

  // }
  //  public updateForexInterestDistributionInWorkflow(fxIntDistribution){
  //    return this.http.post(this.url.baseUrl+'/api/submitforexInterestDistributiontoworkflow',fxIntDistribution);
 
  //  }
  //  public getForexInterestDistributions(){
  //    return this.http.get<ForexInterestDistribution[]>(this.url.baseUrl+'/api/forexInterestDistributions');
  //  }
  //  public updateForexInterestDistribution(fxRequest){
  //    return this.http.put(this.url.baseUrl+'/api/forexRequest',fxRequest);
  //  }
 
  //  public getForexInterestDistribution(id:number){
  //    return this.http.get<ForexInterestDistribution>(this.url.baseUrl+'/api/forexInterestDistribution'+'/'+id);
  //  }
  //  public deleteForexInterestDistribution(id:number){
  //    return this.http.delete(this.url.baseUrl+'/api/forexInterestDistribution'+'/'+id);
  //  }
 

  //  getICPWorkflowByWfId(id: number){
  //    console.log("service",id)
  //   return this.http.get<ForexInterestDistribution>(this.url.baseUrl+'/api/getforexRequestworkflowbywfid' +'/'+id);
  // }

  // pushtoworkflow(inw){
  //   return this.http.post<ForexInterestDistribution>(this.url.baseUrl+"/api/pushforexRequesttoworkflow",inw);
  // }
  
  // rejectbacktoworkflow(inw){
  //   return this.http.post<ForexInterestDistribution>(this.url.baseUrl+"/api/rejectforexRequestbacktoworkflow",inw);
  // }

  // getReferenceNumber(){

  //   return this.http.get<any>(this.url.baseUrl + '/api/interestDistributionReferenceNumber');
  // }
}
