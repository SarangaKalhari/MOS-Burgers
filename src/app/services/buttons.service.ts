import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  private btnUrl: any = `http://localhost:8080/buttons`;

  constructor( private http: HttpClient) { }

  getButtons(){
    return this.http.get<any[]>(this.btnUrl);
  }


}
