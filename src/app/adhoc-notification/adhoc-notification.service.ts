import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from 'src/app/class/global-url';
import { AdhocNotification } from './adhoc-notification';

@Injectable({
  providedIn: 'root'
})
export class AdhocNotificationService {
  private baseUrl: String = 'http://localhost:5002';


  constructor(private http:HttpClient) { }
  public createAdhocNotification(adhoc) {
    return this.http.post(this.baseUrl + '/api/notificationTypeSetup', adhoc);

  }
  public getAdhocNotifications() {
    return this.http.get<AdhocNotification[]>(this.baseUrl + '/api/notificationTypeSetups');
  }
  public updateAdhocNotification(adhoc) {
    return this.http.put(this.baseUrl + '/api/notificationTypeSetup', adhoc);
  }

  public getAdhocNotification(id: number) {
    return this.http.get<AdhocNotification>(this.baseUrl + '/api/notificationTypeSetup' + '/' + id);
  }

 
  public deleteAdHocNotification(id: number) {
    return this.http.delete(this.baseUrl + '/api/notificationTypeSetup' + '/' + id);
  }
  public query(adhoc: AdhocNotification) {
    return this.http.post<AdhocNotification[]>(this.baseUrl + '/api/search/notificationTypeSetup', adhoc);
  }
}
