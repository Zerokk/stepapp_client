import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlaceDAO } from '../../DAOs/PlaceDAO';
import { PlacePage } from '../../pages/place_page/place_page';

@Component({
  selector: 'place-list',
  templateUrl: 'place-list.component.html'
})
export class PlaceList implements OnInit{

  @Input() places_list;

  constructor(public navCtrl: NavController) {

  }

  async ngOnInit(){
      console.log("received: ", this.places_list)
    
  }

  viewPlace(place) {
    this.navCtrl.push(PlacePage, { place: place });
  }


}
