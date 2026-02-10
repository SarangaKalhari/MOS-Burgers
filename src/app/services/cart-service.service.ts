import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cartItems: any[] = [];

  private cartSubject = new BehaviorSubject<any[]>([]);

  // ✅ Observable for components
  cart$ = this.cartSubject.asObservable();

  constructor() { }

  addToCart(item: any) {

    const existingItem = this.cartItems.find(
      cartItem => cartItem.id === item.id
    );

    if (existingItem) {
      // If item already exists → increase quantity
      existingItem.qty += item.qty;
    } else {
      // If new item → add to cart
      this.cartItems.push({ ...item });
    }

    // Notify subscribers (Order Panel update)
    this.cartSubject.next(this.cartItems);
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.cartSubject.next(this.cartItems);
  }

  getCartItems(){
    return this.cartItems;
  }

  getTotal(){
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
  }

  clearCart(){
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }


}
