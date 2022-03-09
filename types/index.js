export class LatLng {
    constructor(lat, lng) {
        this._sdkType = this.constructor._sdkType;
        this.lat = lat;
        this.lng = lng;
    }
}
LatLng._sdkType = 'LatLng';

export class UUID {
    constructor(uuid) {
        this._sdkType = this.constructor._sdkType;
        this.uuid = uuid;
    }
}
UUID._sdkType = 'UUID';

export const boundsCalculator = (distanceInKm = 100, lat, lng) => {
    const lat_change = distanceInKm / 111;
    let lon_change = Math.abs(Math.cos(lat * (Math.PI / 180)));
    let sw_lat = lat - lat_change;
    let sw_lon = lng - lon_change;
    let ne_lat = lat + lat_change;
    let ne_lon = lng + lon_change;

    return [
        ne_lat,
        ne_lon,
        sw_lat,
        sw_lon,

    ]
}