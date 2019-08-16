import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { InwardCollectionDetailsInquiry } from '../class/inward-collection-details-inquiry';
// import { GlobalUrl } from 'src/app/class/global-url';

@Injectable({
  providedIn: 'root'
})
export class InwardCollectionDetailsInquiryService {

  constructor(private _http: HttpClient
    // , private url : GlobalUrl
    ) {
   
  }

//  create(inw: InwardCollectionDetailsInquiry){
//    return this._http.post<InwardCollectionDetailsInquiry>(this.url.baseUrl+"/api/submitinwardCollectionDetailsInquirytoworkflow", inw);

//  }
//  getICPWorkflowByWfId(id: number){
//    return this._http.get<InwardCollectionDetailsInquiry>(this.url.baseUrl+"/api/getinwardCollectionDetailsInquiryworkflowbywfid/"+id);
//  }

//  getOne(id: number){
//    return this._http.get<InwardCollectionDetailsInquiry>(this.url.baseUrl+"/api/inwardCollectionDetailsInquiry/"+id);
//  }

//  pushtoworkflow(inw){
//    return this._http.post<InwardCollectionDetailsInquiry>(this.url.baseUrl+"/api/pushinwardCollectionDetailsInquirytoworkflow",inw);
//  }
 
//  rejectbacktoworkflow(inw){
//    return this._http.post<InwardCollectionDetailsInquiry>(this.url.baseUrl+"/api/rejectinwardCollectionDetailsInquirybacktoworkflow",inw);
//  }
}