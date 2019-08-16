import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../class/global-url';
import { Document } from './document';



@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  document:Document;

  constructor(private http:HttpClient, 
    
    // private url:GlobalUrl
    ) { }

  // //private baseUrl:String = 'http://localhost:5002';
  //  public newDocument(document){
  //    return this.http.post(this.url.baseUrl +'/api/document',document);
 
  //  }
  //  public getDocuments(){
  //    return this.http.get<Document[]>(this.url.baseUrl+'/api/documents');
  //  }
  //  public updateDocument(document){
  //    return this.http.put(this.url.baseUrl+'/api/document',document);
  //  }
 
  //  public getDocument(id:number){
  //    return this.http.get<Document>(this.url.baseUrl+'/api/document'+'/'+id);
  //  }
  //  public deleteDocument(id:number){
  //    return this.http.delete(this.url.baseUrl+'/api/document'+'/'+id);
  //  }
  //  getFilter(document){
  //   return this.http.post<Document[]>(this.url.baseUrl+"/api/documents/filter", document);
  // }

}
