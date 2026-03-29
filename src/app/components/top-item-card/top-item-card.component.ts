import { Component, Input } from '@angular/core';
import { OrderItems } from '../../model/OrderItems.model';

@Component({
  selector: 'app-top-item-card',
  imports: [],
  templateUrl: './top-item-card.component.html',
  styleUrl: './top-item-card.component.css'
})
export class TopItemCardComponent {

  @Input() selectedTime!: string;

  @Input() item!: any;  

}
