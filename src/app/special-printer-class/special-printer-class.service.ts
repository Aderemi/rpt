import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from 'src/app/class/global-url';
import { SpecialPrinterClass } from './special-printer-class';

@Injectable({
  providedIn: 'root'
})
export class SpecialPrinterClassService {
  private baseUrl: String = 'http://localhost:5002';

  constructor(private http:HttpClient) { }
  public createSpecialPrinterClass(adhoc) {
    return this.http.post(this.baseUrl + '/api/notificationTypeSetup', adhoc);

  }
  public getSpecialPrinterClasses() {
    return this.http.get<SpecialPrinterClass[]>(this.baseUrl + '/api/notificationTypeSetups');
  }
  public updateSpecialPrinterClass(adhoc) {
    return this.http.put(this.baseUrl + '/api/notificationTypeSetup', adhoc);
  }

  public getSpecialPrinterClass(id: number) {
    return this.http.get<SpecialPrinterClass>(this.baseUrl + '/api/notificationTypeSetup' + '/' + id);
  }

 
  public deleteSpecialPrinterClass(id: number) {
    return this.http.delete(this.baseUrl + '/api/notificationTypeSetup' + '/' + id);
  }
  public query(adhoc: SpecialPrinterClass) {
    return this.http.post<SpecialPrinterClass[]>(this.baseUrl + '/api/search/notificationTypeSetup', adhoc);
  }
}
