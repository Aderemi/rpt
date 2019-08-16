import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from 'src/app/class/global-url';
import { NotificationType } from './notification-type';

@Injectable({
  providedIn: 'root'
})
export class NotificationTypeService {

  
  private baseUrl: String = 'http://localhost:5002';
  constructor(private http:HttpClient) { }
  public createNotificationType(notificationCat) {
    return this.http.post(this.baseUrl + '/api/notificationTypeSetup', notificationCat);

  }
  public getNotificationTypes() {
    return this.http.get<NotificationType[]>(this.baseUrl + '/api/notificationTypeSetups');
  }
  public updateNotificationType(notificationCat) {
    return this.http.put(this.baseUrl + '/api/notificationTypeSetup', notificationCat);
  }

  public getNotificationType(id: number) {
    return this.http.get<NotificationType>(this.baseUrl + '/api/notificationTypeSetup' + '/' + id);
  }

 
  public deleteNotificationType(id: number) {
    return this.http.delete(this.baseUrl + '/api/notificationTypeSetup' + '/' + id);
  }
  public query(notifiactionType: NotificationType) {
    return this.http.post<NotificationType[]>(this.baseUrl + '/api/search/notificationTypeSetup', notifiactionType);
  }
}
