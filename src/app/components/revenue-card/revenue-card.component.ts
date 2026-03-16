import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-revenue-card',
  imports: [],
  templateUrl: './revenue-card.component.html',
  styleUrl: './revenue-card.component.css'
})
export class RevenueCardComponent {

  @Input() selectedTime!: string;

  @Input()  revenue!: number;
}
