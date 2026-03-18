import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/Item.model';

@Injectable({
  providedIn: 'root'
})
export class DessertsService {

  constructor(private http: HttpClient) { }


  getDesserts(){
    return this.http.get<Item[]>('http://localhost:8080/dessert');
  }

  getDessertCategories(){
    return this.http.get<string[]>('http://localhost:8080/dessert/categories');
  }
}
