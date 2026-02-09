import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  constructor() { }

  buttons = [
    {
      id:1,
      name:"Burgers",
      key: "burgers"
    },
    {
      id:2,
      name:"Beverages",
      key: "beverages"
    },
    {
      id:3,
      name:"Appetizers",
      key: "appetizers"
    },
    {
      id: 4,
      name: "Deserts",
      key: "deserts"
    }
  ]

  getButtons(){
    return this.buttons;
  }
}
