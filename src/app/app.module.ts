import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PlacePage } from '../pages/place_page/place_page';
import { ContactPage } from '../pages/contact/contact';
import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapService } from '../services/MapService';
import { AgmCoreModule } from '@agm/core';
import { PlaceList } from '../components/place-list/place-list.component';

@NgModule({
  declarations: [
    MyApp,
    PlacePage,
    ContactPage,
    MapPage,
    TabsPage,
    PlaceList
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfnyPLOX2Q_03uXYZxpw5t3tsJH8A44vc'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlacePage,
    ContactPage,
    MapPage,
    TabsPage,
    PlaceList
  ],
  providers: [
    StatusBar,
    MapService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
