import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:8080/order/place';

  constructor(private http: HttpClient) {}

  placeOrder(orderData: any): Observable<any> {
    return this.http.post(this.apiUrl, orderData);
  }

  downloadInvoice(orderId: number): Observable<Blob> {
    return this.http.get(
      `${this.apiUrl}/invoice/${orderId}`,
      { responseType: 'blob' }
    );
  }

  getDailyTopItem(){
    return this.http.get<any>("http://localhost:8080/order-item/top-1/daily");
  }
}
