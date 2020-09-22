import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PostService } from '../services/post.service';

import { Post } from '../types';

@Component({
    selector: 'app-list-posts',
    templateUrl: './list-posts.component.html',
    styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnChanges  {
    @Input() posts: Array<Post>;

    constructor(public postService: PostService ) { }

    public ngOnChanges(changes: SimpleChanges): void{
        if (changes.posts.currentValue) {
            // console.log('Posts ngOnChanges', this.posts);
        }
    }

}
