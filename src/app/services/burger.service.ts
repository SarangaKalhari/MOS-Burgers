import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  private url: any = `http://localhost:8080/burger/all`;
  constructor(private http: HttpClient) { }


  getBurgers() {
    // return this.burgers;
    return this.http.get<any[]>(this.url)
  }
}
