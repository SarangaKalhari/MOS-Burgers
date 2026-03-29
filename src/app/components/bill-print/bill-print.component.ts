import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-bill-print',
  imports: [],
  templateUrl: './bill-print.component.html',
  styleUrl: './bill-print.component.css'
})
export class BillPrintComponent {

  //   // @Input() billData: any;
  //   @Output() closeBill = new EventEmitter<void>();


  //   constructor(private cartService: CartServiceService) { }

  //   @Input() billData: any;
  //   @Input() cartItems: any[] = [];
  //   @Input() total: number = 0;

  //   close(){
  //   this.closeBill.emit();
  // }


  //   printBill() {
  //     window.print();
  //     this.cartService.clearCart();

  //         this.closeBill.emit();


  //   }

  @Input() billData: any;
  @Input() cartItems: any[] = [];
  @Input() total: number = 0;

  @Output() closeBill = new EventEmitter<void>();

  constructor(private cartService: CartServiceService) {}

  close(){
    this.closeBill.emit();
  }

  printBill() {
    window.print();
    this.cartService.clearCart();
    this.closeBill.emit();
  }



}
