import { Injectable, ElementRef } from "../../node_modules/@angular/core";
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;


declare var google;

@Injectable()

export class MapService {

    mapObject;
    apiKey = "AIzaSyDFX_9vIksX3JMDVjDIRa5bxoioWCW_q4g";
    mapOptions;
    htmlElement;


    async instantiateMap(HtmlContainer: ElementRef, coords?: any) {
        await this.loadGoogleMapsSDK();
        this.mapOptions = {
            center: coords || null,
            zoom: 15,
            mapTypeId: null
        }
        this.htmlElement = HtmlContainer;
        return await this.mapInit();
    }

    private async mapInit(){
        return this.mapObject = new google.maps.Map(this.htmlElement.nativeElement, this.mapOptions);
    }

    async getPosition() {
        return await Geolocation.getCurrentPosition();
    }

    private async loadGoogleMapsSDK() {

        if (typeof google == "undefined") {

            //Load the SDK
            window['mapInit'] = () => {
                this.mapInit();
            }

            let script = document.createElement("script");
            script.id = "googleMaps";
            script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&libraries=places&callback=mapInit';
            document.body.appendChild(script);
            return true;
        }else{
            this.mapInit();
            return false;
        }
    }
}
