import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DessertsService {

  constructor(private http: HttpClient) { }


  getDesserts(){
    return this.http.get<any[]>('http://localhost:8080/dessert');
  }

  getDessertCategories(){
    return this.http.get<string[]>('http://localhost:8080/dessert/categories');
  }
}
