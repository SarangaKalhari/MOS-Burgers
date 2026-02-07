import { Component, Input } from '@angular/core';
import { BurgerService } from '../../services/burger.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent{

  @Input() burger: any;
  

}
