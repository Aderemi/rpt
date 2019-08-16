import { Injectable } from '@angular/core';
import { NotificationTemplate } from './notification-template';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from 'src/app/class/global-url';

@Injectable({
  providedIn: 'root'
})
export class NotificationTemplateService {
  private baseUrl: String = 'http://localhost:5002';

  constructor(private http:HttpClient) { }
  public createNotificationTemplate(notificationCat) {
    return this.http.post(this.baseUrl + '/api/notificationTemplate', notificationCat);

  }
  public getNotificationTemplates() {
    return this.http.get<NotificationTemplate[]>(this.baseUrl + '/api/notificationTemplate');
  }
  public updateNotificationTemplate(notificationCat) {
    return this.http.put(this.baseUrl + '/api/notificationTemplate', notificationCat);
  }

  public getNotificationTemplate(id: number) {
    return this.http.get<NotificationTemplate>(this.baseUrl + '/api/notificationTemplate' + '/' + id);
  }

 
  public deleteNotificationTemplate(id: number) {
    return this.http.delete(this.baseUrl + '/api/notificationTemplate' + '/' + id);
  }
  public query(notifiactionType: NotificationTemplate) {
    return this.http.post<NotificationTemplate[]>(this.baseUrl + '/api/search/notificationTemplate', notifiactionType);
  }
}
