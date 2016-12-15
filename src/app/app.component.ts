import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Page2 } from '../pages/page2/page2';
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
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home },
      { title: 'Page Two', component: Page2 }
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
    });
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
