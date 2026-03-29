import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Burger } from '../model/Burger.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryBtnService {

  constructor(private http : HttpClient) { }

  getChickenBurgers() {
    return this.http.get<any[]>('http://localhost:8080/burger/chicken');
  }
}
