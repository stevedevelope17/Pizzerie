import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { UserSettings } from '../shared/shared';

import { Home } from '../pages/home/home';
import { FavoritesPage } from '../pages/favorites/favorites';
import { PizzaPage } from '../pages/pizza/pizza';
import { DetailPage } from '../pages/detail/detail';
import {InformationPage} from '../pages/information/information';
import { enableProdMode } from '@angular/core';
enableProdMode();

@NgModule({
  declarations: [
    MyApp,
    Home,
    FavoritesPage,
    PizzaPage,
    InformationPage,
    DetailPage,
    

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    FavoritesPage,
    PizzaPage,
    InformationPage,
    DetailPage
   ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage,UserSettings]
})
export class AppModule {}
