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

  
qty: number = 1;

increaseQty() {
  this.qty++;
}

decreaseQty() {
  if (this.qty > 1) {
    this.qty--;
  }
}


  

}
