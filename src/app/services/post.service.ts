import { Injectable } from '@angular/core';
import { POSTS } from './mock-posts';
import { Post } from '../types';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PostService {

    private _currentPost: Post;
    private _currentPostId: number;

    constructor() { }

    public getPosts(): Observable<Post[]> {
        return of(POSTS);
    }

    public setCurrentPost(inView: boolean, post: Post): void{
        if (inView && this._currentPostId !== post.id) {
            this._currentPostId = post.id;
            this._currentPost = post;
        }
    }

    public getCurrentPost(): Post {
        return this._currentPost;
    }
}
