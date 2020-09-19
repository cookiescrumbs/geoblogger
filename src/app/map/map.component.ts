import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Post, LatLng } from '../types';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

    @Input() posts: Array<Post>;
    @Input() currentPost: Post;

    public options: google.maps.MapOptions = {
        mapTypeId: 'satellite',
        zoomControl: true,
        scrollwheel: false
    };
    public zoom = 18;
    public center: google.maps.LatLngLiteral;
    public markerOptions = {
        draggable: false
    };

    public ngOnChanges() {
        this.center = this._setCentreToCurrentPost();
    }

    public ngOnInit() {
        this.center = this._setCentreToCurrentPost();
    }

    private _setCentreToCurrentPost(): LatLng {
        return this.currentPost.location;
    }

}
