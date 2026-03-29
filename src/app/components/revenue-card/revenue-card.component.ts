import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-revenue-card',
  imports: [CommonModule],
  templateUrl: './revenue-card.component.html',
  styleUrl: './revenue-card.component.css'
})
export class RevenueCardComponent {

  @Input() selectedTime!: string;

  @Input()  revenue!: number;
}
