import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POSTS } from './mock-posts';
import { Post } from '../types';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts: Post[] = POSTS;
    return {posts};
  }

}
