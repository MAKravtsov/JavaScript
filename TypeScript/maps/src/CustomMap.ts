import MapOptions = google.maps.MapOptions;
import Map = google.maps.Map;
import LatLngLiteral = google.maps.LatLngLiteral;
import Marker = google.maps.Marker;
import ReadonlyMarkerOptions = google.maps.ReadonlyMarkerOptions;
import ReadonlyLatLngLiteral = google.maps.ReadonlyLatLngLiteral;
import {Mappable} from "./Mappable";
import InfoWindow = google.maps.InfoWindow;

export class CustomMap {
    private readonly map: Map;
    
    constructor(divId: string) {
        this.map = this.getMap(divId);
    }
    
    private getMap(divId: string): Map {
        const div = document.getElementById(divId);
        const center: LatLngLiteral = {
            lat: 0,
            lng: 0
        }
        const mapOptions: MapOptions = {
            zoom: 1,
            center: center
        }

        return new Map(div, mapOptions);
    }
    
    addMarker(mappable: Mappable): void {
        const position: ReadonlyLatLngLiteral = {
            lat: mappable.location.lat,
            lng: mappable.location.lng
        }
        const opts: ReadonlyMarkerOptions = {
            map: this.map,
            position: position
        }
        
        const marker = new Marker (opts);
        
        marker.addListener('click', () => {
            const infoWindow = new InfoWindow( {
                content: mappable.markerContent(),
            });
            
            infoWindow.open(this.map, marker);
        })
    }
}