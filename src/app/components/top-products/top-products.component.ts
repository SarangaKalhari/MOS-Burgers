import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-products',
  imports: [CommonModule],
  templateUrl: './top-products.component.html',
  styleUrl: './top-products.component.css'
})
export class TopProductsComponent {

  @Input() selectedTime!: string;
  
  products: any[] = [];


  constructor(private http: HttpClient){ }

  ngOnInit() {
    this.getDailyTopProducts(); // fetch data on component init
  }

  getDailyTopProducts() {
    this.http.get<any[]>('http://localhost:8080/order-item/top/daily')
      .subscribe(data => {
        this.products = data;
        console.log(this.products);
      });
  }

  // ✅ trackBy function for *ngFor
  trackByCode(index: number, product: any): string {
    return product.itemCode; // must be unique for each product
  }

}
