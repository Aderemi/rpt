import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { GlobalUrl } from '../../../class/global-url';
// import { ForexRequest } from './forex-request';
// import { WorkflowTest } from 'src/app/class/workflow-test';
// import { WorkflowQueue } from 'src/app/class/workflow-queue';
// import { CalculatedChargeInfo } from 'src/app/class/calculatedChargeInfo';
// import { BizProcessQueueEventValidationRule } from 'src/app/class/biz-process-queue-event-validation-rule';
// import { RuleModel } from '../../rules/model/rule.model';
// import { Observable } from 'rxjs';
// import { RuleSetModel } from '../../rules/model/rule-set.model';

class RuleSetReq {
  constructor(
    // public ruleset: string[],
  //  public fxrequest: ForexRequest
   ){

   }
  
}

@Injectable({
  providedIn: 'root'
})
export class ForexRequestService {
  
  constructor(
    // private http:HttpClient,
    //  private url:GlobalUrl
     ) { }
  // //private baseUrl:String = 'http://localhost:5002';
  //  public createForexRequest(fxrequest){
  //   return this.http.post(this.url.baseUrl+'/api/submitforexRequesttoworkflow',fxrequest);

  //         //  return this.http.post(this.url.baseUrl+'/api/submitforexRequesttoworkflow',new RuleSetReq(ruleset,fxrequest));

  //   // let rules;
  //   // console.log("ruleset",ruleset)
  //   // ruleset.forEach(e=>{
  //   //   rules = e
  //   //   const params: HttpParams = new HttpParams().set('ruleSet',rules);
  //   //   console.log("fbhdn",rules)
  //   //   return this.http.post(this.url.baseUrl+'/api/submitforexRequesttoworkflow',fxRequest,{params});

  //   // })
  //   // return rules;
    

 
  //  }
  //  public getForexRequests(){
  //    return this.http.get<ForexRequest[]>(this.url.baseUrl+'/api/forexRequests');
  //  }
  //  public updateForexRequest(fxRequest){
  //    return this.http.put(this.url.baseUrl+'/api/forexRequest',fxRequest);
  //  }
 
  //  public getForexRequest(id:number){
  //    return this.http.get<ForexRequest>(this.url.baseUrl+'/api/forexRequest'+'/'+id);
  //  }
  //  public deleteForexRequest(id:number){
  //    return this.http.delete(this.url.baseUrl+'/api/forexRequest'+'/'+id);
  //  }
 

  //  getICPWorkflowByWfId(id: number){
  //    console.log("service",id)
  //   return this.http.get<ForexRequest>(this.url.baseUrl+'/api/getforexRequestworkflowbywfid' +'/'+id);
  // }

  // pushtoworkflow(inw){
  //   return this.http.post<ForexRequest>(this.url.baseUrl+"/api/pushforexRequesttoworkflow",inw);
  // }
  
  // rejectbacktoworkflow(inw){
  //   return this.http.post<ForexRequest>(this.url.baseUrl+"/api/rejectforexRequestbacktoworkflow",inw);
  // }

  // public getWorkflowTestByWfId(id:number){
  //   return this.http.get<ForexRequest>(this.url.baseUrl+'api/getforexRequestworkflowbywfid'+'/'+id);
  //   }
    
  //   public getQueuesForRejectionByWfProId(wfid:number[],){
  //   return this.http.get<WorkflowQueue[]>(this.url.baseUrl+'api/getqueuesforrejectionbywfId'+'/'+wfid);
  //   }

    
  // getAllFXCalculatedCharges(inw){
  //   return this.http.post<ForexRequest>(this.url.baseUrl+"/api/getallfxcalculatedChargeInfo",inw);
  // }

  // public getAllCalculatedCharge(busProEventId, customerId,transactionAmount,transactionId,test) {
 
  //   let params = new HttpParams();
  //   return this.http.post<CalculatedChargeInfo[]>(this.url.baseUrl + '/api/getallForexRequestcalculatedChargeInfo',test);
  //   }


  //   public getAllRuleSets(eventId, queueId){
  //     return this.http.get<BizProcessQueueEventValidationRule[]>(this.url.baseUrl +'/api/businessProcessEventQueue'+'/'+eventId+'/'+queueId);
  //   }

  //   public getRules(name: string){
  //     const params: HttpParams = new HttpParams().set('name',name);
  //     return this.http.get<RuleModel[]>(this.url.baseUrl +'/standard-rules/getrulesetbyName',{params}) 
  //   }
 

}
