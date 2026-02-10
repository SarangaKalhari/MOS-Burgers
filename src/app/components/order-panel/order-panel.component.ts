import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-order-panel',
  imports: [],
  templateUrl: './order-panel.component.html',
  styleUrl: './order-panel.component.css'
})
export class OrderPanelComponent implements OnInit{

  cartItems: any[] = [];
  
  constructor(private cartService: CartServiceService) {}

ngOnInit() {
  this.cartService.cart$.subscribe(items => {
    this.cartItems = items;
  });
}

getTotal(): number {
  return this.cartItems.reduce(
    (total, item) => total + (item.price * item.qty),
    0
  );
}

}
