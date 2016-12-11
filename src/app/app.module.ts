import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Page2 } from '../pages/page2/page2';
import { PizzaPage } from '../pages/pizza/pizza';
import {InformationPage} from '../pages/information/information';
import { enableProdMode } from '@angular/core';
enableProdMode();

@NgModule({
  declarations: [
    MyApp,
    Home,
    Page2,
    PizzaPage,
    InformationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Page2,
    PizzaPage,
    InformationPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
