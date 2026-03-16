import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getDailyRevenue() {
    return this.http.get<number>("http://localhost:8080/order/revenue/daily");
  }

  getWeeklyRevenue() {
    return this.http.get<number>("http://localhost:8080/order/revenue/weekly");
  }

  getMonthlyRevenue() {
    return this.http.get<number>("http://localhost:8080/order/revenue/monthly");
  }

}
