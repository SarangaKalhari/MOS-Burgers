import { Component, Input } from '@angular/core';
import { BurgerService } from '../../services/burger.service';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {


  addToCart(arg0: any) {
    if (!this.items) return;
    const item = {
      ...this.items,
      qty: this.qty
    };

    this.cartService.addToCart(item);

    // Optional: Reset qty after adding
    this.qty = 1;
  }

  @Input() items: any;
  @Input() dessert: any;
  // @Input() burger: any;
  // @Input() beverages: any;

  constructor(private cartService: CartServiceService) { }


  qty: number = 1;

  increaseQty() {
    this.qty++;
  }

  decreaseQty() {
    if (this.qty > 1) {
      this.qty--;
    }
  }


  // ✅ Add To Cart Function
  cartItems: any[] = [];





}
