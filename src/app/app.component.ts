import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

import { Post } from './types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public posts: Array<Post>;
    public currentPost: Post;
    public currentPostReady = false;


    public ngOnInit() {
       this.getPosts();
    }

    constructor(public postService: PostService) { }

    getPosts(): void {
        this.postService.getPosts()
        .subscribe(posts => {
            this.posts = posts;
            this.setCurrentPost();
            this.currentPostReady = true;
        });
    }

    setCurrentPost(): void {
        this.postService.setCurrentPost(
            true,
            this.posts[0]
        );
    }

    getCurrentPost(): Post {
        return this.postService.getCurrentPost();
    }

}
