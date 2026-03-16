import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { CategoryButtonsComponent } from '../../components/category-buttons/category-buttons.component';
import { TimeBtnComponent } from "../../components/time-btn/time-btn.component";

@Component({
  selector: 'app-sales',
  imports: [SideBarComponent, TimeBtnComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

  
  times: string[] = ["Daily", "Weekly", "Monthly"];

  selectedTime: string = "Daily";

  ngOnInit(): void {}

  selectTime(time: string){
    this.selectedTime = time;
  }

}
