import { Component, ViewChild, Input, OnChanges } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

import { LatLng } from '../types';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
    @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

    @Input() center: LatLng;
    @Input() content: string;

    markerOptions = { draggable: false };
    markerPositions: google.maps.LatLngLiteral[] = [];
    zoom = 13;
    display?: google.maps.LatLngLiteral;
    infoWindowContent: string;

    ngOnChanges() {
        this.addMarker();
    }

    addMarker(): void {
        this.markerPositions.push(this.center);
    }

    openInfoWindow(marker: MapMarker, content: string) {
        this.infoWindowContent = content;
        this.infoWindow.open(marker);
    }
}
