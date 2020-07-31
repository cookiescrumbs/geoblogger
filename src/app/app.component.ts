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


    public ngOnInit() {
       this.getPosts();
       this.setCurrentPost();
    }

    constructor(public postService: PostService) { }

    getPosts(): void {
        this.postService.getPosts()
        .subscribe(posts => {
            this.posts = posts;
        });
    }

    setCurrentPost(): void {
        this.postService.setCurrentPost(
            true,
            this.posts[0]
        );
    }

}
