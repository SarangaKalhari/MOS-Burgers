import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CardComponent } from '../../components/card/card.component';
import { OrderPanelComponent } from '../../components/order-panel/order-panel.component';
import { BurgerService } from '../../services/burger.service';
import { ButtonsService } from '../../services/buttons.service';


@Component({
  selector: 'app-burgers',
  imports: [NavBarComponent, SideBarComponent, SearchBarComponent,CardComponent,OrderPanelComponent],
  templateUrl: './burgers.component.html',
  styleUrl: './burgers.component.css'
})
export class BurgersComponent implements OnInit{

  burgers: any[] =[];

  buttons: any[] =[];

  constructor(private burgerService: BurgerService, private buttonService : ButtonsService){}

  ngOnInit(): void {
    this.burgers = this.burgerService.getBurgers();
    console.log(this.burgers);

    this.buttons = this.buttonService.getButtons();
    console.log(this.buttons);
    

    
  }

}
