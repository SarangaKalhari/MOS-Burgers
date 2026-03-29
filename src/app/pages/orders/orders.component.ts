import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { ItemsComponent } from "../../components/items/items.component";
import { FilterComponent } from "../../components/filter/filter.component";
import { BurgerService } from '../../services/burger.service';
import { BeveragesService } from '../../services/beverages.service';
import { DessertsService } from '../../services/desserts.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [SideBarComponent, ItemsComponent, FilterComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  
  allOriginalItems: any[] = [];
  filteredItems: any[] = [];
  

  constructor(
    private burgerService: BurgerService,
    private beverageService: BeveragesService,
    private dessertService: DessertsService
  ) {}

  ngOnInit(): void {
    forkJoin({
      burgers: this.burgerService.getBurgers(),
      beverages: this.beverageService.getBeverages(),
      desserts: this.dessertService.getDesserts(),
      appetizers: this.beverageService.getAppetizers()
    }).subscribe(({ burgers, beverages, desserts }) => {
      // මෙහිදී 'type' එක ලෙස Filter එකේ ඇති values (electronics, fashion) ලබා දෙන්න
      const b = burgers.map(i => ({ ...i, type: 'electronics', status: this.calculateStatus(i.stock) }));
      const bev = beverages.map(i => ({ ...i, type: 'fashion', status: this.calculateStatus(i.stock) }));
      const d = desserts.map(i => ({ ...i, type: 'toys', status: this.calculateStatus(i.stock) }));
      const a = desserts.map(i => ({ ...i, type: 'toys', status: this.calculateStatus(i.stock) }));


      this.allOriginalItems = [...b, ...bev, ...d];
      this.filteredItems = [...this.allOriginalItems];
    });
  }

  onFilterApplied(filterData: any) {
    this.filteredItems = this.allOriginalItems.filter(item => {
      const matchesSearch = filterData.search ? 
        item.title.toLowerCase().includes(filterData.search.toLowerCase()) || 
        item.code.toLowerCase().includes(filterData.search.toLowerCase()) : true;

      const matchesCategory = filterData.category ? item.type === filterData.category : true;

      const matchesStatus = filterData.status ? this.mapStatus(item.status) === filterData.status : true;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }

  calculateStatus(qty: number): string {
    if (qty === 0) return 'Unavailable';
    return qty <= 5 ? 'Low' : 'Available';
  }

  mapStatus(status: string): string {
    if (status === 'Available') return 'instock';
    if (status === 'Low') return 'preorder';
    return 'outofstock';
  }
}