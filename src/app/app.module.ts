import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
<<<<<<< HEAD
import { Home } from '../pages/home/home';
import { Page2 } from '../pages/page2/page2';
import { PizzaPage } from '../pages/pizza/pizza';
import {InformationPage} from '../pages/information/information';
import { enableProdMode } from '@angular/core';
enableProdMode();
=======
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
>>>>>>> 8610503267070242e48f1a68bbfbc62d9532b9e7

@NgModule({
  declarations: [
    MyApp,
<<<<<<< HEAD
    Home,
    Page2,
    PizzaPage,
    InformationPage
=======
    Page1,
    Page2
>>>>>>> 8610503267070242e48f1a68bbfbc62d9532b9e7
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
<<<<<<< HEAD
    Home,
    Page2,
    PizzaPage,
    InformationPage
=======
    Page1,
    Page2
>>>>>>> 8610503267070242e48f1a68bbfbc62d9532b9e7
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
