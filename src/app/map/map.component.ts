import { Component, Input, OnInit } from '@angular/core';

import { Post, LatLng } from '../types';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    @Input() posts: Array<Post>;

    center: google.maps.LatLngLiteral;
    markerOptions = { draggable: false };
    zoom = 13;
    display?: google.maps.LatLngLiteral;

    ngOnInit() {
        this.center = this._medianPostLocation();
    }

    private _medianPostLocation(): LatLng {
        const median: number = Math.round((this.posts.length / 2));
        return this.posts[median].location;
    }

}
