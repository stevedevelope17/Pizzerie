import { Component, ViewChild } from '@angular/core';
import { Events, Nav,LoadingController, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { UserSettings } from '../shared/shared';

import { Home } from '../pages/home/home';
import { FavoritesPage } from '../pages/favorites/favorites';
import { PizzaPage } from '../pages/pizza/pizza';
import { DetailPage } from '../pages/detail/detail';
import { InformationPage } from '../information/information';
import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;
  favoriteFoods: any[];
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
  public userSettings: UserSettings,
  public loadingController: LoadingController,
  public events: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home },
    //  { title: 'Favorites', component: FavoritesPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.platform.registerBackButtonAction(function(event){
         let nav=this.app.getComponent('nav');
         if (nav.canGoBack()) {nav.pop();}
         else {this.confirmExitApp(nav);}
       },101);

        this.userSettings.initStorage().then(() => {
        this.rootPage = Home;
        this.refreshFavorites();
        this.events.subscribe('favorites:changed', () => this.refreshFavorites());
      });
    });
    
  }
  refreshFavorites(){
    this.userSettings.getAllFavorites().then(favs => this.favoriteFoods = favs);
    //this.favoriteTeams = this.userSettings.getAllFavorites();
  }

   goToFood(favorite){
    let loader = this.loadingController.create({
        content: 'Getting data...',
        dismissOnPageChange: true
    });
    loader.present();
    this.nav.push(DetailPage, favorite.pizza);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
