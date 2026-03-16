import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SalesComponent } from '../../pages/sales/sales.component';

@Component({
  selector: 'app-time-btn',
  imports: [],
  templateUrl: './time-btn.component.html',
  styleUrl: './time-btn.component.css'
})
export class TimeBtnComponent {

  @Input() time!: string;

  @Input() active: boolean = false;

  @Output() timeClick = new EventEmitter<string>();

  onClick(){
    this.timeClick.emit(this.time);
  }
  
}
