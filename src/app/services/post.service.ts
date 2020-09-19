import { Injectable } from '@angular/core';
import { Post } from '../types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
        return this.http.get<Post[]>(this.postsUrl)
        .pipe(
            map(posts => this._addPosition(posts) )
        );
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

    private _addPosition(posts: Post[]): Post[] {
        return posts.map((post: Post , index: number) => {
            return {
                ...post,
                position: ++index
            };
        });
    }
}
