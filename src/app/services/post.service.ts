import { Injectable } from '@angular/core';
import { Post } from '../types';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class PostService {

    private _currentPost: Post;
    private _currentPostId: number;

    private _currentPost$: BehaviorSubject<Post>;
    private postsUrl = 'api/posts';  // URL to web api

    constructor(private http: HttpClient) {}

    public getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.postsUrl)
        .pipe(
            map(posts => this._addMarker(posts)),
            tap((posts) => {
                    this._currentPostId = posts[0].id;
                    this._currentPost = posts[0];
                    this._currentPost$ = new BehaviorSubject<Post>(this._currentPost);
            })
        );
    }

    public setCurrentPost(inView: boolean, post: Post): void {
        if (inView && this._currentPostId !== post.id) {
            this._currentPostId = post.id;
            this._currentPost = post;
            this._currentPost$.next(this._currentPost);
        }
    }

    private _addMarker(posts: Post[]): Post[] {
        return posts.map((post: Post , index: number) => {
            return {
                ...post,
                position: index + 1,
                markerOptions: {
                    draggable: false,
                    icon: {
                        url: `https://chart.googleapis.com/chart?chst=d_map_spin&chld=1|0|fed136|13|_|${index + 1}`
                    }
                }
            };
        });
    }

    public getCurrentPost(): Observable<Post> {
        return this._currentPost$.asObservable();
    }
}
