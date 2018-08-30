import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapPage;
  tab2Root = ContactPage;

  constructor() {

  }
}
