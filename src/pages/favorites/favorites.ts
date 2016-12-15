import { Component } from '@angular/core';
import { LoadingController,NavController } from 'ionic-angular';

import { UserSettings } from '../../shared/shared';
import * as _ from 'lodash';
/*
  Generated class for the Favorites page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {


favorites = [];
       

  constructor(public navCtrl: NavController,
              public loadingController: LoadingController,
              public userSettings: UserSettings) {}


  ionViewDidLoad() {
     this.userSettings.getAllFavorites().then(favs => this.favorites = favs);
   
  }
  ionViewDidEnter(){
        //this.favorites = this.userSettings.getAllFavorites();
        this.userSettings.getAllFavorites().then(favs => this.favorites = favs);
    }

}
