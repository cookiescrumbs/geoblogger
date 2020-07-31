import { Component, Input, EventEmitter, Output, ComponentFactoryResolver } from '@angular/core';
import { PostService } from '../services/post.service';

import { Post } from '../types';

@Component({
    selector: 'app-list-posts',
    templateUrl: './list-posts.component.html',
    styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent {
    @Input() posts: Array<Post>;

    constructor(public postService: PostService ) { }
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
