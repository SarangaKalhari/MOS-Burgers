import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beverages } from '../model/Beverages.model';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class BeveragesService {

  private bevurl: any = `http://localhost:8080/beverages`;

  constructor(private http: HttpClient) { }


  getBeverages(): Observable<Beverages[]>{
    return this.http.get<Item[]>(this.bevurl);
  }

  getBeveragesSubCategories() {
    return this.http.get<string[]>('http://localhost:8080/beverages/categories');
  }
}
