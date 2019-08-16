import { Injectable } from '@angular/core';

import { Warrant } from './warrant';
import { HttpClient } from '@angular/common/http';
// import { WorkflowQueue } from 'src/app/class/workflow-queue';

@Injectable({
  providedIn: 'root'
})
export class WarrantService {

  // private warrant: Warrant;
  // private baseUrl = 'http://localhost:5002/api';

  // constructor(private _http: HttpClient) { }

  // getWarrants() {
  //   return this._http.get<Warrant[]>(this.baseUrl + '/warrants');
  // }

  // createWarrant(warrant: Warrant) {
  //   return this._http.post(this.baseUrl + '/warrant', warrant);
  // }

  // query(warrant: Warrant) {
  //   return this._http.post<Warrant[]>(this.baseUrl + '/search/warrant', warrant);
  // }

  // updateWarrant(warrant: Warrant) {
  //   return this._http.put(this.baseUrl + '/warrant', warrant);
  // }

  // getWarrant(id: Number) {
  //   return this._http.get<Warrant>(this.baseUrl + '/warrant/' + id);
  // }

  // deleteWarrant(id: Number) {
  //   return this._http.delete(this.baseUrl + '/warrant/' + id);
  // }

  // pushtoworkflow(test) {
  //   return this._http.post(this.baseUrl + '/wpushtoworkflow', test);

  // }
  // rejectbacktoworkflow(test) {
  //   return this._http.post(this.baseUrl + '/wrejectbacktoworkflow', test);

  // }

  // getWarrantByWfId(id: number) {
  //   console.log("WOrkflow id",id);
  //   return this._http.get<Warrant>(this.baseUrl + '/getwarrantbywfid/' + id);
  // }

  // getWarrantByRef(ref: String) {
  //   return this._http.get<Warrant>(this.baseUrl + '/warranyz/' + ref);
  // }

  // // getUserWarrant(applicant: Customer){
  // //   return this._http.post<Warrant[]>(this.baseUrl + '/warrant/user', applicant)
  // // }

  
  // getUserWarrant(applicant){
  //   console.log("Applicant" , applicant)
  //   return this._http.get<Warrant[]>(this.baseUrl + '/warrant/name/' + applicant)
  // }
  // /* public getQueuesForRejectionByWfProId(wfid: number[], ) {
  //   return this.http.get<WorkflowQueue[]>(this.baseUrl + 'api/getqueuesforrejectionbywfId' + '/' + wfid);
  // } */

  // setter(warrant: Warrant) {
  //   this.warrant = warrant;
  // }

  // getter() {
  //   return this.warrant;
  // }

  // public getWorkflowTestByWfId(id:number){
  //   return this._http.get<Warrant>(this.baseUrl+'api/getwarrantbywfid'+'/'+id);
  //   }
    
  //   public getQueuesForRejectionByWfProId(wfid:number[],){
  //   return this._http.get<WorkflowQueue[]>(this.baseUrl+'api/getqueuesforrejectionbywfId'+'/'+wfid);
  //   }
    // pushtoworkflow(push){
    //   return this._http.post<Warrant>(this.baseUrl + '/'+)
    // }

}
