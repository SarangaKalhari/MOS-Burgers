import { Component, Input } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { Item } from '../../model/Item.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {


  addToCart(item: Item) {

    const cartItem = {
      ...item,
      qty: this.qty
    };

    this.cartService.addToCart(cartItem);

    this.qty = 1;
  }

  @Input() items!: Item;
  // @Input() dessert: any;
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
