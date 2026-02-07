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
    },
    {
      id:2,
      name:"Beverages"
    },
    {
      id:3,
      name:"Appetizers"
    },
    {
      id: 4,
      name: "Deserts"
    }
  ]

  getButtons(){
    return this.buttons;
  }
}
