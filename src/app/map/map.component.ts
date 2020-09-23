import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

import { Post, LatLng, Marker } from '../types';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {

    @Input() markers: Array<Marker>;
    @Input() currentPost: Post;

    public options: google.maps.MapOptions = {
        mapTypeId: 'satellite',
        zoomControl: true,
        scrollwheel: false
    };
    public zoom = 18;
    public center: google.maps.LatLngLiteral;

    public ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges marker', this.markers);
        if (changes.currentPost && this.currentPost) {
            this.center = this._setCentreToCurrentPost();
        }
    }


    private _setCentreToCurrentPost(): LatLng {
        return this.currentPost.location;
    }

}
