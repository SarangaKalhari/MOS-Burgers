import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-buttons',
  imports: [],
  templateUrl: './category-buttons.component.html',
  styleUrl: './category-buttons.component.css'
})
export class CategoryButtonsComponent{

@Input() subCategory!: string;
  @Input() active: boolean = false;

  @Output() subCategoryClick = new EventEmitter<string>();

onClick() {
  this.subCategoryClick.emit(this.subCategory);
}

}
