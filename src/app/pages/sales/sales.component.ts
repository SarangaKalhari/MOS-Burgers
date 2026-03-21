import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { CategoryButtonsComponent } from '../../components/category-buttons/category-buttons.component';
import { TimeBtnComponent } from "../../components/time-btn/time-btn.component";
import { SalesService } from '../../services/sales.service';
import { RevenueCardComponent } from "../../components/revenue-card/revenue-card.component";
import { OrdersCardComponent } from '../../components/orders-card/orders-card.component';
import { TopItemCardComponent } from "../../components/top-item-card/top-item-card.component";
import { OrderService } from '../../services/order.service';
import { OrderItems } from '../../model/OrderItems.model';
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { TopProductsComponent } from "../../components/top-products/top-products.component";
import { ChartComponent } from "../../components/chart/chart.component";

@Component({
  selector: 'app-sales',
  imports: [SideBarComponent, TimeBtnComponent, RevenueCardComponent, OrdersCardComponent, TopItemCardComponent, ProductListComponent, TopProductsComponent, ChartComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {


  times: string[] = ["Daily", "Weekly", "Monthly", "Total"];

  selectedTime: string = "Daily";

  total: number = 0;

  orders: number = 0;

  item: any = "";

  ngOnInit(): void { 
    this.salesService.getDailyRevenue().subscribe(res => {
        this.revenue = res;
        console.log(this.revenue);
        
      });

      this.salesService.getDailyOrders().subscribe(data => {
        this.orders = data;
        console.log(this.orders);
        console.log(data);
        
      })

      this.orderService.getDailyTopItem().subscribe(data => {
        this.item =data;
        console.log(this.item);
        console.log(data);
        
      })
  }

  constructor(private salesService: SalesService, private orderService: OrderService) { }

  selectTime(time: string) {
    this.selectedTime = time;
    console.log(this.selectedTime);
    this.loadRevenue();
  }

  revenue: number = 0;

  loadRevenue() {

    if (this.selectedTime === "Daily") {
      this.salesService.getDailyRevenue().subscribe(res => {
        this.revenue = res;
        console.log(this.revenue);
        
      });

      this.salesService.getDailyOrders().subscribe(data => {
        this.orders = data;
        console.log(this.orders);
        console.log(data);
        
      });

      this.orderService.getDailyTopItem().subscribe(data => {
        this.item =data;
        console.log(this.item);
        console.log(data);
        
      });

      this.salesService.getDailyTopProducts().subscribe(data => {
        
      })
    }

    if (this.selectedTime === "Weekly") {
      this.salesService.getWeeklyRevenue().subscribe(res => {
        this.revenue = res;
        console.log(this.revenue);
      });

      this.salesService.getWeeklyOrders().subscribe(data => {
        this.orders = data;
        console.log(this.orders);
        console.log(data);        
      })

      this.orderService.getWeeklyTopItem().subscribe(data => {
        this.item =data;
        console.log(this.item);
        console.log(data);
        
      })
    }

    if (this.selectedTime === "Monthly") {
      this.salesService.getMonthlyRevenue().subscribe(res => {
        this.revenue = res;
        console.log(this.revenue);
      });

      this.salesService.getMonthlyOrders().subscribe(data => {
        this.orders = data;
        console.log(this.orders);
        console.log(data);        
      })

      this.orderService.getMonthlyTopItem().subscribe(data => {
        this.item =data;
        console.log(this.item);
        console.log(data);
        
      })
    }

    if (this.selectedTime === "Total") {
      this.salesService.getTotalRevenue().subscribe(res => {
        this.revenue = res;
        console.log(this.revenue);
      });

      this.salesService.getTotalOrders().subscribe(data => {
        this.orders = data;
        console.log(this.orders);
        console.log(data);        
      })

      this.orderService.getTotalyTopItem().subscribe(data => {
        this.item =data;
        console.log(this.item);
        console.log(data);
        
      })
    }

  }

}
