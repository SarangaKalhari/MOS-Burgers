import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillPrintService {

  constructor() { }

  showBill = false;

  billData = {
    customerName: "Saranga",
    date: new Date(),
    orderId: "ORD-101",
    items: [
      { name: "Burger", qty: 2, price: 500 },
      { name: "Pizza", qty: 1, price: 1200 }
    ],
    total: 2200
  };

  proceedPayment() {
    this.showBill = true;
  }
}
