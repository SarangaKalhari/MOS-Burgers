import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CardComponent } from '../../components/card/card.component';
import { OrderPanelComponent } from '../../components/order-panel/order-panel.component';
import { BurgerService } from '../../services/burger.service';
import { ButtonsService } from '../../services/buttons.service';
import { BeveragesService } from '../../services/beverages.service';
import { BillPrintComponent } from '../../components/bill-print/bill-print.component';
import { CartServiceService } from '../../services/cart-service.service';
import { DessertsService } from '../../services/desserts.service';


@Component({
  selector: 'app-burgers',
  imports: [NavBarComponent, SideBarComponent, SearchBarComponent, CardComponent, OrderPanelComponent, BillPrintComponent],
  templateUrl: './burgers.component.html',
  styleUrl: './burgers.component.css'
})
export class BurgersComponent implements OnInit {

  burgers: any[] = [];

  buttons: any[] = [];

  beverages: any[] = [];

  desserts: any[] = [];

  selectedCategory: string = 'burgers';

  visibleItems: any[] = [];

  showBill = false;

  billData: any;

  cartItems: any[] = [];
  total: number = 0;
  // showBill = false;



  constructor(private burgerService: BurgerService, private buttonService: ButtonsService, private beveragesService: BeveragesService, private cartService: CartServiceService, private dessertService: DessertsService) { }


  ngOnInit(): void {
    this.burgerService.getBurgers().subscribe(data => {
      this.burgers =data;
    });
    console.log(this.burgers);

    this.buttons = this.buttonService.getButtons();
    console.log(this.buttons);

    this.beverages = this.beveragesService.getBeverages();
    console.log(this.beverages);

    this.desserts = this.dessertService.getDesserts();
    console.log(this.desserts)

    this.visibleItems = this.burgers;

    console.log('selectedCategory:', this.selectedCategory);
    console.log('visibleItems:', this.visibleItems);

  }


  selectCategory(category: string) {
    this.selectedCategory = category;

    switch (category) {
      case 'burgers':
        this.visibleItems = this.burgers;
        break;

      case 'beverages':
        this.visibleItems = this.beverages;
        break;

      case 'desserts':
        this.visibleItems = this.desserts;
        break;

      default:
        this.visibleItems = [];
    }
  }


  printBill() {
    window.print();
  }


  proceedPayment(){
    this.calculateTotal();
    this.cartItems = this.cartService.getCartItems();
  this.total = this.cartService.getTotal();

  if (this.cartItems.length === 0) {
    alert("Cart is empty");
    return;
  }

  this.showBill = true; 
  }

  calculateTotal(){
    // temporary sample value
    this.total = 2500;
  }

}