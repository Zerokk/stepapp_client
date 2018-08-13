import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Plugins } from '@capacitor/core';
import { MapService } from '../../services/MapService';
import { Parse } from 'parse';
import { PlaceDAO } from '../../DAOs/PlaceDAO';

const { Geolocation } = Plugins;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {

  correctInit: boolean;
  coords = { lat: 51.678418, lng: 7.809007 }
  placesList;

  constructor(public navCtrl: NavController, public mapService: MapService) {

  }

  async ngOnInit() {
    await Parse.User.logIn("testuser", "123asd");

    this.correctInit = await this.initMap()
                                 .then( correct => this.correctInit = correct);
    const places = await PlaceDAO.getAllForPosition(this.coords);
    this.placesList = places;
    console.log("Get location: ", this.placesList[0].get("location"))


  }


  async initMap() {
    try {
      const c = await Geolocation.getCurrentPosition();
      this.coords.lat = c.coords.latitude;
      this.coords.lng = c.coords.longitude;
      return true;
    } catch (err) {
      console.log("err: ", err)
      return false;
    }
  }

}
