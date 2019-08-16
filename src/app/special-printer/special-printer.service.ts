import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from 'src/app/class/global-url';
import { SpecialPrinter } from './special-printer';

@Injectable({
  providedIn: 'root'
})
export class SpecialPrinterService {
  // private baseUrl: String = 'http://localhost:5002';

  // constructor(private http:HttpClient) { }
  // public createSpecialPrinter(adhoc) {
  //   return this.http.post(this.baseUrl + '/api/notificationTypeSetup', adhoc);

  // }
  // public getSpecialPrinters() {
  //   return this.http.get<SpecialPrinter[]>(this.baseUrl + '/api/notificationTypeSetups');
  // }
  // public updateSpecialPrinter(adhoc) {
  //   return this.http.put(this.baseUrl + '/api/notificationTypeSetup', adhoc);
  // }

  // public getSpecialPrinter(id: number) {
  //   return this.http.get<SpecialPrinter>(this.baseUrl + '/api/notificationTypeSetup' + '/' + id);
  // }

 
  // public deleteSpecialPrinter(id: number) {
  //   return this.http.delete(this.baseUrl + '/api/notificationTypeSetup' + '/' + id);
  // }
  // public query(adhoc: SpecialPrinter) {
  //   return this.http.post<SpecialPrinter[]>(this.baseUrl + '/api/search/notificationTypeSetup', adhoc);
  // }
}
