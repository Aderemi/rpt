import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from 'src/app/class/global-url';
import { NotificationCategory } from './notification-category';

@Injectable({
  providedIn: 'root'
})
export class NotificationCategoryService {

  private baseUrl: String = 'http://localhost:5002';

  constructor(private http:HttpClient) { }
  public createNotificationCategory(notificationCat) {
    return this.http.post(this.baseUrl + '/api/notificationCategory', notificationCat);

  }
  public getNotificationCategories() {
    return this.http.get<NotificationCategory[]>(this.baseUrl + '/api/notificationCategories');
  }
  public updateNotificationCategories(notificationCat) {
    return this.http.put(this.baseUrl + '/api/notificationCategory', notificationCat);
  }

  public getNotificationCategory(id: number) {
    return this.http.get<NotificationCategory>(this.baseUrl + '/api/notificationCategory' + '/' + id);
  }

 
  public deleteNotificationCategory(id: number) {
    return this.http.delete(this.baseUrl + '/api/notificationCategory' + '/' + id);
  }
  public query(notificationCategory: NotificationCategory) {
    return this.http.post<NotificationCategory[]>(this.baseUrl + '/api/search/account', notificationCategory);
  }
}
