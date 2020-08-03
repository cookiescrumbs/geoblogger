import { Injectable } from '@angular/core';
import { Post } from '../types';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class PostService {

    private _currentPost: Post;
    private _currentPostId: number;
    private postsUrl = 'api/posts';  // URL to web api

    constructor(private http: HttpClient) { }

    public getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.postsUrl);
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
