import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  private url: any = `http://localhost:8080/burger`;



  constructor(private http: HttpClient) { }


  getBurgers() {
    // return this.burgers;
    return this.http.get<Item[]>(this.url)
  }

  getBurgerSubCategories() {
    return this.http.get<string[]>('http://localhost:8080/burger/categories');
  }


}
