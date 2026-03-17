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
import { CategoryButtonsComponent } from '../../components/category-buttons/category-buttons.component';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../model/item.model';


@Component({
  selector: 'app-burgers',
  imports: [NavBarComponent, SideBarComponent, SearchBarComponent, CardComponent, OrderPanelComponent, BillPrintComponent, CategoryButtonsComponent],
  templateUrl: './burgers.component.html',
  styleUrl: './burgers.component.css'
})
export class BurgersComponent implements OnInit {

  burgers: Item[] = [];

  buttons: any[] = [];
  subCategories: string[] = [];

  beverages: Item[] = [];

  desserts: Item[] = [];

  chickenBurgers: any[] = [];

  selectedCategory: string = 'burger';
  selectedSubCategory: string = 'chicken';

  visibleItems: Item[] = [];

  showBill = false;

  billData: any;

  items: Item[] = [];

  cartItems: any[] = [];
  total: number = 0;
  // showBill = false;



  constructor(private burgerService: BurgerService, private buttonService: ButtonsService, private beveragesService: BeveragesService, private cartService: CartServiceService, private dessertService: DessertsService, private http: HttpClient) { }


  ngOnInit(): void {
    this.burgerService.getBurgers().subscribe(data => {
      this.burgers = data;
      this.visibleItems = [...this.burgers];


      this.burgerService.getBurgerSubCategories().subscribe(data => {
        this.subCategories = data;
        if (data.length > 0) {
          this.selectedSubCategory = data[0];
          this.selectSubCategory(data[0]);
        }

      });
    });


    this.beveragesService.getBeverages().subscribe(data => {
      this.beverages = data;
      console.log(this.visibleItems);
      if (data.length > 0) {
      }
    });

    this.buttonService.getButtons().subscribe(data => {
      this.buttons = data;
    });
    console.log(this.buttons);



    this.dessertService.getDesserts().subscribe(data => {
      this.desserts = data;
    })
    console.log(this.desserts);
    

    // this.visibleItems = this.burgers;

    console.log('selectedCategory:', this.selectedCategory);
    console.log('visibleItems:', this.visibleItems);

  }

  selectCategory(category: string) {

    this.selectedCategory = category;
    this.selectedSubCategory = '';

    let source: any[] = [];

    switch (category) {
      case 'burger':

        this.burgerService.getBurgerSubCategories().subscribe(data => {
          this.subCategories = data;   // 🔥 backend eken ena subcategories

        });
        source = this.burgers;
        break;

      case 'beverages':
        this.beveragesService.getBeveragesSubCategories().subscribe(data => {
          this.subCategories = data;   // 🔥 backend eken ena subcategories

        });
        source = this.beverages;
        break;

      case 'desserts':
        this.dessertService.getDessertCategories().subscribe(data => {
          this.subCategories =data;
        })
        source = this.desserts;
        break;
    }

    this.visibleItems = [...source];

  }



  printBill() {
    window.print();
  }


  proceedPayment() {
    this.calculateTotal();
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();

    if (this.cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    this.showBill = true;
  }

  calculateTotal() {
    // temporary sample value
    this.total = 2500;
  }


  getChickenBurgers() {
    return this.http.get<any[]>('http://localhost:8080/burger/chicken');
  }

  getBeefBurgers() {
    return this.http.get<any[]>('http://localhost:8080/burger/beef');
  }

  getVegBurgers() {
    return this.http.get<any[]>('http://localhost:8080/burger/veg');
  }

  getJuices() {
    return this.http.get<any[]>('http://localhost:8080/beverages/all/juice');
  }

  selectSubCategory(sub: string) {


    let source: any[] = [];

    switch (sub) {
      case 'chicken':
        this.getChickenBurgers().subscribe(data => {
          console.log(data);
          // console.log("chicken burgers" +data);
          this.visibleItems = data;
        });
        break;
      case 'beef':
        this.getBeefBurgers().subscribe(data => {
          console.log(data);
          // console.log("chicken burgers" +data);
          this.visibleItems = data;
        });
        break;
      case 'veg':
        this.getVegBurgers().subscribe(data => {
          console.log(data);
          this.visibleItems = data;
        });
        break;
      case 'juice':
        this.getJuices().subscribe(data => {
          console.log(data);
          this.visibleItems = data;

        })
    }
  }

}