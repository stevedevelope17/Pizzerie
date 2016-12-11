import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Home } from '../home/home';


/*
  Generated class for the Pizza page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html'
})
export class PizzaPage {

pizza: any[];
pizzas = [
         {
             name: 'HC Elite 7th',
             image: 'img/pizza.png',
             price: '18 RON'
         },
         {
             name: 'HC Elite',
             image: 'img/pizza.png',
             price: '19 RON'
         }
     ];

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PizzaPage Page');
  }
 
}
