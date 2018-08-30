import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'place_page',
  templateUrl: 'place_page.html'
})
export class PlacePage implements OnInit{

  protected place;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit(){
    this.place = this.navParams.get("place");
  }
  

}
