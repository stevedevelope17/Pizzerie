import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {PizzaPage} from '../pizza/pizza';
import {InformationPage} from '../information/information';

declare var window;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {


  PizzaTab = PizzaPage;
  pizza: any;
  constructor(public navCtrl: NavController) {
    
  }
 goToPizza(){
        this.navCtrl.push(PizzaPage); 
    }
     goHome(){
    //this.nav.push(MyTeamsPage);
    this.navCtrl.popToRoot();
  }
   goToInformation(){
    this.navCtrl.push(InformationPage);
   
  }
  callIT(passedNumber){
    //You can add some logic here
     window.location = passedNumber;
    }
}
