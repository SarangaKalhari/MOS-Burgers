import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { CategoryButtonsComponent } from '../../components/category-buttons/category-buttons.component';
import { TimeBtnComponent } from "../../components/time-btn/time-btn.component";
import { SalesService } from '../../services/sales.service';
import { RevenueCardComponent } from "../../components/revenue-card/revenue-card.component";
import { OrdersCardComponent } from '../../components/orders-card/orders-card.component';

@Component({
  selector: 'app-sales',
  imports: [SideBarComponent, TimeBtnComponent, RevenueCardComponent, OrdersCardComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {


  times: string[] = ["Daily", "Weekly", "Monthly"];

  selectedTime: string = "Daily";

  total: number = 0;

  orders: number = 0;

  ngOnInit(): void { }

  constructor(private salesService: SalesService) { }

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
        
        
      })
    }

    if (this.selectedTime === "Weekly") {
      this.salesService.getWeeklyRevenue().subscribe(res => {
        this.revenue = res;
        console.log(this.revenue);
      });
    }

    if (this.selectedTime === "Monthly") {
      this.salesService.getMonthlyRevenue().subscribe(res => {
        this.revenue = res;
        console.log(this.revenue);
      });
    }

  }

}
