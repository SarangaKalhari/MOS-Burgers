import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { CardComponent } from "../../components/card/card.component";
import { Burger } from '../../model/Burger.model';
import { Beverages } from '../../model/Beverages.model';
import { Desserts } from '../../model/Desserts.model';
import { BurgerService } from '../../services/burger.service';
import { BeveragesService } from '../../services/beverages.service';
import { DessertsService } from '../../services/desserts.service';
import { debounceTime, Subject } from 'rxjs';
import { OrderPanelComponent } from '../../components/order-panel/order-panel.component';

@Component({
  selector: 'app-search-page',
  imports: [SearchBarComponent, SideBarComponent, CardComponent, OrderPanelComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnInit {

  allItems: any[] = [];
  burger: Burger[] = [];
  beverages: Beverages[] = [];
  desserts: Desserts[] = [];
  visibleItems: any[] = [];
  searchText: string = '';  // For binding the search bar input
  searchSubject = new Subject<string>();

  constructor(
    private burgerService: BurgerService,
    private beverageService: BeveragesService,
    private dessertService: DessertsService
    // private orderService: OrderPanelComponent
  ) {}

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

    // Debounce search input and filter items
    this.searchSubject.pipe(debounceTime(300)).subscribe(text => {
      this.filterItems(text);
    });
  }

  mergeItems() {
    this.allItems = [
      ...this.burger,
      ...this.beverages,
      ...this.desserts
    ];

    console.log("All items are: ", this.allItems);
    this.visibleItems = [...this.allItems]; // Default show all items
  }

  
}