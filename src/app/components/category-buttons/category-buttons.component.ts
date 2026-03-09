import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BurgersComponent } from '../../pages/burgers/burgers.component';

@Component({
  selector: 'app-category-buttons',
  imports: [],
  templateUrl: './category-buttons.component.html',
  styleUrl: './category-buttons.component.css'
})
export class CategoryButtonsComponent {

  // @Input() subCategory!: string;
  // @Input() active: boolean = false;

  // @Output() subCategoryClick = new EventEmitter<string>();

  // onClick() {
  //   this.subCategoryClick.emit(this.subCategory);
  // }

  //  // parent eken ena subcategories
  // @Input() subCategories: string[] = [];

  // // selected subcategory
  // @Input() selectedSubCategory: string = '';

  // // parent ekata click event yawanna
  // @Output() subCategorySelected = new EventEmitter<string>();


  // selectSubCategory(sub: string){
  //   this.subCategorySelected.emit(sub);
  // }

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
