import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {

  private burgerCategories: any = `http://localhost:8080/burger/categories`;


  constructor(private http: HttpClient) { }

  getBurgerCategories(){
    return this.http.get<any[]>(this.burgerCategories);
  }
  
}
