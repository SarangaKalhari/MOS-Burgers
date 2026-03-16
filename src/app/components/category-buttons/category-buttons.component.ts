import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BurgersComponent } from '../../pages/burgers/burgers.component';
import { SalesComponent } from '../../pages/sales/sales.component';

@Component({
  selector: 'app-category-buttons',
  imports: [],
  templateUrl: './category-buttons.component.html',
  styleUrl: './category-buttons.component.css'
})
export class CategoryButtonsComponent {

  @Input() subCategory!: string;
  @Input() active: boolean = false;


  @Output() subCategoryClick = new EventEmitter<string>();

  constructor(private categoryBtn: BurgersComponent){

  }

  onClick() {
    this.subCategoryClick.emit(this.subCategory);
    console.log(this.subCategory);
    this.categoryBtn.selectCategory(this.subCategory);
    
  }



}
