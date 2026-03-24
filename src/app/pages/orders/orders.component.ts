import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { ItemsComponent } from "../../components/items/items.component";

@Component({
  selector: 'app-orders',
  imports: [SideBarComponent, ItemsComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

}
