import { Component } from '@angular/core';
import { NavController,LoadingController, NavParams } from 'ionic-angular';

import { Home } from '../home/home';
import { DetailPage } from '../detail/detail';
import * as _ from 'lodash';


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

pizza: any={};
sizeFilter = '30';
size: any;
allSize: any[];
pizzasFiltered: any[];
pizzas = [
         {
             id: 1,
             name: 'PIZZA MARGARITA',
             description: 'sos de rosii , mozzarella',
             weight: 'Cca 490 g',
             image: 'img/pizza.png',
             price: '15 RON',
             size: '30'
         },
         {
             id: 2,
             name: 'PIZZA  A LA GYROS',
             description: 'sos de rosii , mozzarella , carne de pui',
             weight: 'Cca 480 g',
             image: 'img/pizza.png',
             price: '18 RON',
             size: '50'
         }, 
         {
             id: 3,
             name: 'PIZZA MARGARITA',
             description: 'sos de rosii , mozzarella',
             weight: 'Cca 490 g',
             image: 'img/pizza.png',
             price: '15 RON',
             size: '30'
         },
         {
            id: 4,
             name: 'PIZZA  A LA GYROS',
             description: 'sos de rosii , mozzarella , carne de pui',
             weight: 'Cca 480 g',
             image: 'img/pizza.png',
             price: '18 RON',
             size: '50'
         },
          {
             id: 5,
             name: 'PIZZA MARGARITA',
             description: 'sos de rosii , mozzarella',
             weight: 'Cca 490 g',
             image: 'img/pizza.png',
             price: '15 RON',
             size: '30'
         },
         {
             id: 6,
             name: 'PIZZA  A LA GYROS',
             description: 'sos de rosii , mozzarella , carne de pui,sos de rosii , mozzarella , carne de pui',
             weight: 'Cca 480 g',
             image: 'img/pizza.png',
             price: '18 RON',
             size: '30'
         }
     ];
    

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingController: LoadingController) {}

  ionViewDidLoad() {
    this.filterSize();

    
  }
  ionViewWillEnter(){
    this.refreshAll(this);
  }
   itemTapped($event, pizza){
     let loader = this.loadingController.create({
            content: 'Getting data...',
            dismissOnPageChange: true
        });
        loader.present();
    this.navCtrl.parent.parent.push(DetailPage, pizza); 
  }
  filterSize(){
    if(this.sizeFilter === '30'){
    this.pizzasFiltered = _.filter(this.pizzas,{size:'30'});
    
    } else {
       this.pizzasFiltered = _.filter(this.pizzas,{size:'50'});
      
    }
  }
   refreshAll(refresher){
  
      this.ionViewDidLoad();
    
  }
 
}
