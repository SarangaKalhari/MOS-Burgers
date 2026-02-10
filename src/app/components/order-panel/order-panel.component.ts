import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { BillPrintComponent } from '../bill-print/bill-print.component';

@Component({
  selector: 'app-order-panel',
  imports: [],
  templateUrl: './order-panel.component.html',
  styleUrl: './order-panel.component.css'
})
export class OrderPanelComponent implements OnInit{

  cartItems: any[] = [];

  @Output() paymentClick = new EventEmitter<void>();
  
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

removeItem(item: any) {
  this.cartService.removeItem(item.id);
}



  // constructor(public cartService: CartServiceService){}

  proceedPayment(){
    this.paymentClick.emit();
  }

}
