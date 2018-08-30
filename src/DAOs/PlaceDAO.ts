import Parse, { GeoPoint } from 'parse';

export class PlaceDAO {

    static async getAllForPosition(geopoint) {

        try {
            let query = new Parse.Query("Place");
            const geo = new Parse.GeoPoint(geopoint.lat, geopoint.lng)
            const res = await query //.withinKilometers("location", geo, 200)        // TODO FIX
                            .include("placeType")
                            .find();


            console.log("RES: ", res);
            return res;
        } catch (err) {
            console.log("DAO ERROR: ", err)
        }
    }


}