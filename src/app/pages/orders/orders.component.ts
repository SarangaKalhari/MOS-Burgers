import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { ItemsComponent } from "../../components/items/items.component";
import { SearchComponent } from "../../components/search/search.component";

@Component({
  selector: 'app-orders',
  imports: [SideBarComponent, ItemsComponent, SearchComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

}
