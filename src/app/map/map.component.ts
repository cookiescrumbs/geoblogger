import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

import { Post, LatLng } from '../types';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {

    @Input() posts: Array<Post>;
    @Input() currentPost: Post;

    public options: google.maps.MapOptions = {
        mapTypeId: 'satellite',
        zoomControl: true,
        scrollwheel: false
    };
    public zoom = 18;
    public center: google.maps.LatLngLiteral;

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.posts && this.posts) {
            console.log('Posts ngOnChanges', this.posts);
        }
        if (changes.currentPost && this.currentPost) {
            this.center = this._setCentreToCurrentPost();
         }

    }



    private _setCentreToCurrentPost(): LatLng {
        return this.currentPost.location;
    }

}
