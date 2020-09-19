import { Post } from '../types';

export const POSTS: Post[] = [
    {
        id: 1,
        location: {
            lat: 53.961697,
            lng: -2.761886
        },
        media:
        {
            type: 'live-photo',
            imageSrc: 'assets/mocks/photos/1.jpeg'
         },
        dateTime: '2019-06-03T13:49:58.000Z',
        timeStamp: 1559569798,
        content: 'Sybil needed a pee'
    },
    {
        id: 2,
        location: {
            lat:  54.508890,
            lng: -2.892662
        },
        media:
        {
            type: 'live-photo',
            videoSrc: 'assets/mocks/videos/3.mov',
            imageSrc: 'assets/mocks/photos/3.jpeg'
        },
        dateTime: '2019-06-03T17:35:44.000Z',
        timeStamp: 1559583344,
        content: 'Looking back at blah blah'
    },
    {
        id: 3,
        location: {
            lat: 54.510439,
            lng: -2.890308
        },
        media:
        {
            type: 'live-photo',
            videoSrc: 'assets/mocks/videos/5.mov',
            imageSrc: 'assets/mocks/photos/5.jpeg'
        },
        dateTime: '2019-06-03T17:35:44.000Z',
        timeStamp: 1559583344,
        content: 'Up Prisoner crag'
    },
    {
        id: 4,
        location: {
            lat: 54.511348,
            lng: -2.888967
        },
        media:
        {
            type: 'live-photo',
            videoSrc: 'assets/mocks/videos/6.mov',
            imageSrc: 'assets/mocks/photos/6.jpeg'
        },
        dateTime: '2019-06-03T17:35:44.000Z',
        timeStamp: 1559583344,
        content: 'Why is it called Prisoner Crag?'
    },
    {
        id: 5,
        location: {
            lat: 54.519418,
            lng: -2.901721
        },
        media:
        {
            type: 'live-photo',
            videoSrc: 'assets/mocks/videos/7.mov',
            imageSrc: 'assets/mocks/photos/7.jpeg'
        },
        dateTime: '2019-06-03T17:35:44.000Z',
        timeStamp: 1559583344,
        content: 'Sybil in my jacket'
    },
    {
        id: 6,
        location: {
            lat: 54.519501,
            lng: -2.901396
        },
        media:
        {
            type: 'live-photo',
            videoSrc: 'assets/mocks/videos/9.mov',
            imageSrc: 'assets/mocks/photos/9.jpeg'
        },
        dateTime: '2019-06-03T17:35:44.000Z',
        timeStamp: 1559583344,
        content: 'Dan caught a perch'
    },
    {
        id: 7,
        location: {
            lat: 54.519522,
            lng: -2.901713
        },
        media:
        {
            type: 'live-photo',
            videoSrc: 'assets/mocks/videos/10.mov',
            imageSrc: 'assets/mocks/photos/10.jpeg'
        },
        dateTime: '2019-06-03T17:35:44.000Z',
        timeStamp: 1559583344,
        content: 'Sybil peeping out of the tent'
    }
];
