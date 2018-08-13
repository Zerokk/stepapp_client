import Parse from 'parse';

export class PlaceDAO {

    static async getAllForPosition(geopoint) {

        try {
            let query = new Parse.Query("Place");
            query.withinKilometers("location", {latitude: geopoint.lat, longitude: geopoint.lng}, 20);
            return await query.find();
        } catch (err) {
            console.log("DAO ERROR: ", err)
        }
    }


}