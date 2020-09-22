export interface LatLng {
    lat: number;
    lng: number;
}


export interface Media {
    type: 'video' | 'live-photo' | 'image';
    videoSrc?: string;
    imageSrc?: string;
}

export interface Post {
    id: number;
    location: LatLng;
    media: Media;
    dateTime: string;
    timeStamp: number;
    content: string;
    position?: number;
    markerOptions?: any;
}
