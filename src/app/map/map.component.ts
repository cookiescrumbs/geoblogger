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

    public center: google.maps.LatLngLiteral;
    public markerOptions = {
        draggable: false
    };
    public zoom = 13;

    public ngOnChanges() {
        this.center = this._setCentreToCurrentPost();
    }

    public ngOnInit() {
        this.center = this._setCentreToCurrentPost();
        this.zoom = 15;
    }

    private _setCentreToCurrentPost(): LatLng {
        return this.currentPost.location;
    }

    private _medianPostLocation(): LatLng {
        const median: number = Math.round((this.posts.length / 2));
        return this.posts[median].location;
    }

}
