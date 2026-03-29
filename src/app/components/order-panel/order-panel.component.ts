import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../model/Order.model';
import { OrderItems } from '../../model/OrderItems.model';

// Allowed categories and mapped itemCodes
type CategoryMap = 'CHICKEN' | 'BEVERAGE' | 'DESSERT';
type ItemCodeMap = 'BURGER' | 'BEVERAGES' | 'DESSERTS';

@Component({
  selector: 'app-order-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-panel.component.html',
  styleUrls: ['./order-panel.component.css']
})
export class OrderPanelComponent implements OnInit {

  cartItems: any[] = [];
  paymentMethod: 'CASH' | 'CARD' = 'CASH';
  discount: number = 0;

  @Output() paymentClick = new EventEmitter<void>();

  constructor(
    private orderService: OrderService,
    private cartService: CartServiceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  // Add item to cart
  addToCart(item: any): void {
    const existing = this.cartItems.find(c => c.itemCode === item.itemCode);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.cartItems.push({
        ...item,
        category: item.category?.toUpperCase() as CategoryMap
      });
    }
  }

  // Remove an item from the cart
removeItem(item: any): void {
  this.cartService.removeItem(item.itemCode);
  // Also remove it locally so UI updates immediately
  this.cartItems = this.cartItems.filter(ci => ci.itemCode !== item.itemCode);
}

// Calculate the total price of items in the cart
getTotal(): number {
  return this.cartItems.reduce(
    (total: number, item: any) => total + item.price * item.qty,
    0
  );
}

  // Map category to fixed itemCode
  private mapItemCode(category?: string, defaultCode?: string): ItemCodeMap | string {
    switch(category?.toUpperCase()) {
      case 'CHICKEN': return 'BURGER';
      case 'BEEF': return 'BURGER';
      case 'VEG': return 'BURGER';
      case 'JUICE': return 'BEVERAGES';
      case 'ICE CREAM': return 'DESSERTS';
      case 'GELATO': return 'DESSERTS';
      case 'FAST FOOD': return 'APPETIZERS';
      case 'CHEESE': return 'APPETIZERS';


      default: return defaultCode || 'UNKNOWN';
    }
  }

  // Checkout the order
  checkout(): void {
    const orderData: Order = {
      paymentMethod: this.paymentMethod,
      discount: this.discount,
      items: this.cartItems.map(item => ({
        itemCode: item.code,
        category: this.mapItemCode(item.category, item.itemCode),
        quantity: item.qty,
        unitPrice: item.price
      } as OrderItems))
    };

    console.log('Sending Order:', JSON.stringify(orderData, null, 2));

    this.orderService.placeOrder(orderData).subscribe({
      next: res => {
        console.log(res);
        alert('Order Placed Successfully!');

        // ----- Refresh Order Panel -----
        this.cartItems = [];               // clear local cart
        this.discount = 0;                 // reset discount if needed
        this.paymentMethod = 'CASH';       // reset payment method if needed
        this.cartService.clearCart();      // clear cart in service so UI updates everywhere
      },
      error: err => {
        console.error('ERROR:', err);
        console.error('BACKEND:', err.error?.message);

        // ----- Refresh Order Panel -----
        this.cartItems = [];               // clear local cart
        this.discount = 0;                 // reset discount if needed
        this.paymentMethod = 'CASH';       // reset payment method if needed
        this.cartService.clearCart();      // clear cart in service so UI updates everywhere
      }
    });
  }

  // Trigger payment
  proceedPayment() {
    this.paymentClick.emit();
    this.checkout();
  }

  // // Remove item from cart 
  // removeItem(item: any) { this.cartService.removeItem(item.itemCode); } 
  // // Calculate total 
  // getTotal(): number { return this.cartItems.reduce( (total, item) => total + item.unitPrice * item.quantity, 0 ); }

}

// Cart item interface
// export interface CartItem {
//   itemCode: string;
//   title: string;
//   quantity: number;
//   unitPrice: number;
//   category?: CategoryMap;
//   image?: string;
// }
