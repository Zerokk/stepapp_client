import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Plugins } from '@capacitor/core';
import { MapService } from '../../services/MapService';
import Parse from 'parse';
import { PlaceDAO } from '../../DAOs/PlaceDAO';


const { Geolocation } = Plugins;


@Component({
  selector: 'map',
  templateUrl: 'map.html'
})

export class MapPage implements OnInit {

  correctInit: boolean;
  coords = { lat: 51.678418, lng: 7.809007 }
  placesList;
  selectedSegment;


  constructor(public navCtrl: NavController, public mapService: MapService) {
    
  }

  async ngOnInit() {
    await Parse.User.logIn("testuser", "123asd");
    this.placesList = await PlaceDAO.getAllForPosition(this.coords);
    console.log("placesList: ", this.placesList)
    this.correctInit = await this.initMap()
      .then(correct => this.correctInit = correct);
    
  }

  onSegmentChanged(segmentButton: any) {

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

  getMarkerType(place) {
    let icon;
    const type = place.get('placeType').get('type');
    switch (type) {
      case "Club":
        icon = "Beer_4.svg";
        break;
      case "Restaurant":
        icon = "Food_4.svg";
        break;
      case "Bar":
        icon = "Beer_4.svg";
        break;
      case "International food":
        icon = "Asian_Food_4.svg";
        break;
      case "Plan":
        icon = "Arrow_7.svg";
        break;
    }
    //getMarkerType(place?.get('placeType')?.get('type'))"

    return `assets/icon/${icon}`;

  }
}
