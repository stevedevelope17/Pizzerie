import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Fastfood page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fastfood',
  templateUrl: 'fastfood.html'
})
export class FastfoodPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FastfoodPage Page');
  }

}
