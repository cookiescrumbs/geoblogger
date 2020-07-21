import { Component, Input } from '@angular/core';
import { Post } from '../types';
import { POSTS } from '../mock-posts';

@Component({
    selector: 'app-list-posts',
    templateUrl: './list-posts.component.html',
    styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent  {
    // @Input() posts: Array<Post>;
    public posts = POSTS;

    constructor() {}

    public isVideo(post: Post): boolean {
        return post.media.type === 'video' ? true : false;
    }

    public isImage(post: Post): boolean {
        return post.media.type === 'image' ? true : false;
    }

    public isLivePhoto(post: Post): boolean {
        return post.media.type === 'live-photo' ? true : false;
    }

}
