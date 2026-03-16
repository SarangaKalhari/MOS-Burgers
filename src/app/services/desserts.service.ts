import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DessertsService {

  constructor() { }

   desserts = [

    {
      id: 1,
      title: 'Vanila Ice Cream',
      image: 'images/desserts/vanilla_ice_cream.png',
      price: '150.00'
    },
    {
      id: 2,
      title: 'Chocolate Ice Cream',
      image: 'images/desserts/chocolate_ice_cream.png',
      price: '200.00'
    },
    {
      id: 3,
      title: 'Mint Ice Cream',
      image: 'images/desserts/mint_ice_cream.png',
      price: '175.00'
    },
    {
      id: 4,
      title: 'Strawberry  Ice Cream',
      image: 'images/desserts/strawberry_ice_cream.png',
      price: '180.00'
    },
    {
      id: 5,
      title: 'Chocalate Cake',
      image: 'images/desserts/chocolate_cakes-removebg-preview.png',
      price: '200.00'
    },
    {
      id: 6,
      title: 'Tiramisu Chocolate Slice',
      image: 'images/desserts/tiramisu_chocolate.png',
      price: '350.00'
    },
    {
      id: 7,
      title: 'Cheese Double Beef Burger',
      image: 'images/desserts/berry gelato.jpg',
      price: '750.00'
    },
    {
      id: 8,
      title: 'Cheese Veg Burger',
      image: 'images/desserts/mango gelato.jpg',
      price: '500.00'
    },
    {
      id: 9,
      title: 'Chinese Beef Burger',
      image: 'images/desserts/chocolate gelatos.jpg',
      price: '550.00'
    },
    {
      id: 10,
      title: 'Chicken Burger',
      image: 'images/chicken_burger.png',
      price: '600.00'
    },
    {
      id: 11,
      title: 'Crispy Chicken Burger',
      image: 'images/chrispy chicken burger.png',
      price: '650.00'
    },
    {
      id: 12,
      title: 'Creamy Chicken Burger',
      image: 'images/Creamy_Chicken_Burger.png',
      price: '800.00'
    },
    {
      id: 13,
      title: 'Double Chicken Burger',
      image: 'images/double_chicken_burger.png',
      price: '850.00'
    },
    {
      id: 14,
      title: 'Double Cheese Burger',
      image: 'images/double_cheese_burger.png',
      price: '780.00'
    },
    {
      id: 15,
      title: 'Double Beef Burger Large',
      image: 'images/double beef burger large.png',
      price: '880.00'
    },
    {
      id: 16,
      title: 'Juicy Chicken Burger',
      image: 'images/juicy chicken burger.png',
      price: '680.00'
    },
    {
      id: 17,
      title: 'Juicy Hamburger',
      image: 'images/juicy_hamburger.png',
      price: '650.00'
    }
  ]

  getDesserts(){
    return this.desserts;
  }
}
