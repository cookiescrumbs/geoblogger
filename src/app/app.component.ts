import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PostService } from './services/post.service';

import { Post } from './types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public posts$: Observable<Post[]>;
    public currentPost$: Observable<Post>;
    public currentPostReady = false;

    public ngOnInit() {
        this._getPosts();
    }

    constructor(public postService: PostService) { }

    private _getPosts(): void {
        this.posts$ = this.postService.getPosts()
        .pipe(
            tap(() => this.currentPostReady = true),
            tap(() => {
                this.currentPost$ = this.postService.getCurrentPost();
            })
        );
    }

}
