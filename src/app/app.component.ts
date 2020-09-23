import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PostService } from './services/post.service';
import { MapService } from './services/map.service';

import { Post, Marker} from './types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public posts$: Observable<Post[]>;
    public markers$: Observable<Marker[]>;
    public currentPost$: Observable<Post>;

    public ngOnInit() {
        this._getPosts();
        this._getMarkers();
    }

    constructor(
        public postService: PostService,
        public mapService: MapService
    ) { }

    private _getPosts(): void {
        this.posts$ = this.postService.getPosts()
        .pipe(
            tap(() => {
                this.currentPost$ = this.postService.getCurrentPost();
            })
        );

        this.posts$.subscribe(posts => console.log('posts', posts));
    }

    private _getMarkers(): void {
        this.markers$ = this.mapService.markers;
    }

}
