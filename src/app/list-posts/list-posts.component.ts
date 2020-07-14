import { Component, OnInit, Input } from '@angular/core';
// import { Post } from '../types';
import { POSTS } from '../mock-posts';

@Component({
    selector: 'app-list-posts',
    templateUrl: './list-posts.component.html',
    styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

    // @Input() posts: Array<Post>;
    public posts = POSTS;

    constructor() {}

    ngOnInit(): void {
    }

}
