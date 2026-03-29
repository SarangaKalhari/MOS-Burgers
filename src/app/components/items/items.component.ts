import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
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

  @Input() allItems: any[] = [];


}
