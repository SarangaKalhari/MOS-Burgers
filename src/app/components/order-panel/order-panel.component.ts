import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { BillPrintComponent } from '../bill-print/bill-print.component';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-panel.component.html',
  styleUrl: './order-panel.component.css'
})
export class OrderPanelComponent implements OnInit {

  cartItems: any[] = [];
  paymentMethod: string = 'CASH';
  discount: number = 0;
  // category: string
  // paymentClick: any;

  @Output() paymentClick = new EventEmitter<void>();


  constructor(private orderService: OrderService, private cartService: CartServiceService, private http: HttpClient) { }


  addToCart(item: any) {

    const existingItem = this.cartItems.find(
      c => c.itemCode === item.id
    );

    if (existingItem) {
      existingItem.quantity += item.qty;
    } else {
      this.cartItems.push({
        itemCode: item.id,
        title: item.title,
        quantity: item.qty,
        unitPrice: item.price
      });
    }

    console.log(this.cartItems);
  }

  // getTotal() {
  //   return this.cartItems.reduce(
  //     (sum, item) => sum + (item.unitPrice * item.quantity),
  //     0
  //   );
  // }

  checkout() {

    const orderData = {
      paymentMethod: this.paymentMethod,
      discount: this.discount,
      items: this.cartItems.map(item => ({
        itemCode: item.code,
        category: item.category,
        unitPrice: item.price,
        quantity: item.qty,   // ✅ FIX HERE
        totalPrice: item.price * item.qty
      }))
    };

    this.orderService.placeOrder(orderData)
      .subscribe(response => {
        console.log(response);
        alert("Order Placed Successfully!");
        this.cartItems = [];
      });



  }
  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  proceedPayment() {
    this.paymentClick.emit();
    console.log(this.cartItems);
    this.checkout();

  }

  removeItem(item: any) {
    this.cartService.removeItem(item.id);
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + (item.price * item.qty),
      0
    );
  }


}
