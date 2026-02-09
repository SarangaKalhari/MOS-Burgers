import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  constructor() { }

  burgers = [

    {
      id: 1,
      title: 'Single Chicken Burger',
      image: 'images/single chicken burger.png',
      price: '500.00'
    },
    {
      id: 2,
      title: 'Bacon Cheese Burger',
      image: 'images/bacon_cheese_burger.png',
      price: '600.00'
    },
    {
      id: 3,
      title: 'Bacon Beef Burger',
      image: 'images/bacon_beef_burger.png',
      price: '650.00'
    },
    {
      id: 4,
      title: 'BBQ Burger',
      image: 'images/bbq_burger.png',
      price: '550.00'
    },
    {
      id: 5,
      title: 'Cheese Chicken Burger',
      image: 'images/cheese chicken burger.png',
      price: '600.00'
    },
    {
      id: 6,
      title: 'Cheese Crispy Chicken Burger',
      image: 'images/cheese crispy chicken burger.png',
      price: '700.00'
    },
    {
      id: 7,
      title: 'Cheese Double Beef Burger',
      image: 'images/cheese double beef burger.png',
      price: '750.00'
    },
    {
      id: 8,
      title: 'Cheese Veg Burger',
      image: 'images/cheese_veg_burger.png',
      price: '500.00'
    },
    {
      id: 9,
      title: 'Chinese Beef Burger',
      image: 'images/cheneese beef burger.png',
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
    },
    {
      id: 18,
      title: 'Juicy Veggie Burger',
      image: 'images/juicy veggie burger.png',
      price: '520.00'
    },
    {
      id: 19,
      title: 'Korean Beef Burger',
      image: 'images/korean combo beef burger.png',
      price: '675.00'
    },
    {
      id: 20,
      title: 'Large Beef Burger',
      image: 'images/large beef burger.png',
      price: '750.00'
    },
    {
      id: 21,
      title: 'Large Hamburger',
      image: 'images/large_hamburger.png',
      price: '620.00'
    },
    {
      id: 22,
      title: 'Single Chicken Burger',
      image: 'images/single chicken burger.png',
      price: '450.00'
    },
    {
      id: 23,
      title: 'Special Veg Burger',
      image: 'images/special veg burger.png',
      price: '500.00'
    },
    {
      id: 24,
      title: 'Veggie Burger Combo',
      image: 'images/veggie burger combo.png',
      price: '520.00'
    },
    {
      id: 25,
      title: 'Chicken Sandwich',
      image: 'images/chicken sandwich.png',
      price: '350.00'
    }


  ]

  getBurgers() {
    return this.burgers;
  }
}
