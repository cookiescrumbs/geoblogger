import { Post } from './types';

export const POSTS: Post[] = [
    {
        location: {
            lat: 59.13075277777778,
            lng: -3.212127777777778
        },
        media:
        {
            type: 'live-photo',
            videoSrc: 'assets/mocks/videos/1.mov',
            imageSrc: 'assets/mocks/photos/1.jpeg'
        }
        ,
        dateTime: '2019-06-03T13:49:58.000Z',
        timeStamp: 1559569798,
        content: 'Sybil needed a pee'
    },
    {
        location: {
            lat: 59.13075277777778,
            lng: -3.212127777777778
        },
        media:
        {
            type: 'image',
            imageSrc: 'assets/mocks/photos/2.jpeg'
        },
        dateTime: '2019-06-03T13:49:58.000Z',
        timeStamp: 1559569798,
        content: 'Sybil made friends with a trout'
    },
    {
        location: {
            lat: 59.124225,
            lng: -3.2035222222222224
        },
        media:
        {
            type: 'image',
            imageSrc: 'assets/mocks/photos/3.jpeg'
        },
        dateTime: '2019-06-03T17:35:44.000Z',
        timeStamp: 1559583344,
        content: 'It rained so much I had to stick Sybil in my jacket'
    }
];


