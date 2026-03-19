import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  // get revenues
  getDailyRevenue() {
    return this.http.get<number>("http://localhost:8080/order/revenue/daily");
  }

  getWeeklyRevenue() {
    return this.http.get<number>("http://localhost:8080/order/revenue/weekly");
  }

  getMonthlyRevenue() {
    return this.http.get<number>("http://localhost:8080/order/revenue/monthly");
  }

  getTotalRevenue() {
    return this.http.get<number>("http://localhost:8080/order/revenue/total");
  }



  // get orders
  getDailyOrders(){
    return this.http.get<number>("http://localhost:8080/order/orders/daily");
  }

  getWeeklyOrders(){
    return this.http.get<number>("http://localhost:8080/order/orders/weekly");
  }

  getMonthlyOrders(){
    return this.http.get<number>("http://localhost:8080/order/orders/monthly");
  }

  getTotalOrders(){
    return this.http.get<number>("http://localhost:8080/order/orders/total");
  }

  getDailyTopProducts() {
    return this.http.get<any[]>("http://localhost:8080/order-item/top/daily");
  }
}
