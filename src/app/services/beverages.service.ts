import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beverages } from '../model/Beverages.model';

@Injectable({
  providedIn: 'root'
})
export class BeveragesService {

  private bevurl: any = `http://localhost:8080/beverages/all`;

  constructor(private http: HttpClient) { }


  getBeverages(): Observable<Beverages[]>{
    return this.http.get<Beverages[]>(this.bevurl);
  }
}
