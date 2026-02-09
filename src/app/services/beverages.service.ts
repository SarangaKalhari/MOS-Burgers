import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeveragesService {

  constructor() { }

  beverages = [
    {
      id: 1,
      title: 'Single Chicken Burger',
      image: 'images/beverages/Mango_Juice.png',
      price: '500.00'
    },
    {
      id: 2,
      title: 'Bacon Cheese Burger',
      image: 'images/beverages/Lime_Juice.png',
      price: '600.00'
    },
    {
      id: 3,
      title: 'Bacon Beef Burger',
      image: 'images/beverages/Pineapple_Juice.png',
      price: '650.00'
    }
  ]

  getBeverages(){
    return this.beverages;
  }
}
