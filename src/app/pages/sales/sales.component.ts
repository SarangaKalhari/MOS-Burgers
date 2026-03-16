import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { CategoryButtonsComponent } from '../../components/category-buttons/category-buttons.component';
import { TimeBtnComponent } from "../../components/time-btn/time-btn.component";
import { SalesService } from '../../services/sales.service';
import { RevenueCardComponent } from "../../components/revenue-card/revenue-card.component";

@Component({
  selector: 'app-sales',
  imports: [SideBarComponent, TimeBtnComponent, RevenueCardComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {


  times: string[] = ["Daily", "Weekly", "Monthly"];

  selectedTime: string = "Daily";

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
    }

  }

}
