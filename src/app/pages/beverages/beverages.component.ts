import { Component, OnInit } from '@angular/core';
import { BeveragesService } from '../../services/beverages.service';

@Component({
  selector: 'app-beverages',
  imports: [],
  templateUrl: './beverages.component.html',
  styleUrl: './beverages.component.css'
})
export class BeveragesComponent implements OnInit{

    beverages: any[] = [];

  constructor(private beveragesService: BeveragesService){}

  ngOnInit(): void {

    this.beveragesService.getBeverages().subscribe(data => {
      this.beverages =data;
    });
  }




}
