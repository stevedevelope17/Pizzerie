import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Drink page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html'
})
export class DrinkPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DrinkPage Page');
  }

}
