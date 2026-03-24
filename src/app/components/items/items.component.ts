import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { DessertsService } from '../../services/desserts.service';
import { Beverages } from '../../model/Beverages.model';
import { Burger } from '../../model/Burger.model';
import { Desserts } from '../../model/Desserts.model';
import { BeveragesService } from '../../services/beverages.service';
import { BurgerService } from '../../services/burger.service';

@Component({
  selector: 'app-items',
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  allItems: any[] = [];
  burger: Burger[] = [];
  beverages: Beverages[] = [];
  desserts: Desserts[] = [];

  constructor(
    private burgerService: BurgerService,
    private beverageService: BeveragesService,
    private dessertService: DessertsService
    // private orderService: OrderPanelComponent
  ) { }

  ngOnInit(): void {
    // Fetch data for burgers, beverages, and desserts
    this.burgerService.getBurgers().subscribe(burgers => {
      this.burger = burgers;
      this.mergeItems();
    });

    this.beverageService.getBeverages().subscribe(beverages => {
      this.beverages = beverages;
      this.mergeItems();
    });

    this.dessertService.getDesserts().subscribe(desserts => {
      this.desserts = desserts;
      this.mergeItems();
    });


  }

  mergeItems() {
    this.allItems = [
      ...this.burger,
      ...this.beverages,
      ...this.desserts
    ].map(item => ({
      ...item,
      status: this.getItemStatus(item.stock)
    }));

    console.log("All items are: ", this.allItems);
  }

  getItemStatus(qty: number): string {
  if (qty === 0) return 'Unavailable';
  if (qty <= 5) return 'Low';
  return 'Available';
}




}
