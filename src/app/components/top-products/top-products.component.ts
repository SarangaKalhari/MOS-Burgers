import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-top-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit, OnChanges {

  @Input() selectedTime!: string;

  products: any[] = [];

  constructor(private http: HttpClient){ }

  ngOnInit() {
    // initial load
    this.loadTopItems(this.selectedTime || 'Monthly');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedTime'] && changes['selectedTime'].currentValue) {
      this.loadTopItems(changes['selectedTime'].currentValue);
    }
  }

  getDailyTopProducts() {
    this.http.get<any[]>("http://localhost:8080/order-item/top/daily")
      .subscribe(data => this.products = data);
  }

  getWeeklyTopProducts() {
    this.http.get<any[]>('http://localhost:8080/order-item/top/weekly')
      .subscribe(data => this.products = data);
  }

  getMonthlyTopProducts() {
    this.http.get<any[]>('http://localhost:8080/order-item/top/monthly')
      .subscribe(data => this.products = data);
  }

  loadTopItems(selectedTime: string){
    switch(selectedTime){
      case 'Daily':
        this.getDailyTopProducts();
        break;

      case 'Weekly':
        this.getWeeklyTopProducts();
        break;

      case 'Monthly':
        this.getMonthlyTopProducts();
        break;

      default:
        this.getMonthlyTopProducts();
    }
  }

  trackByCode(index: number, product: any): string {
    return product.itemCode;
  }
}