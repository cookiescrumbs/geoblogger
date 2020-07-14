export interface LatLng {
    lat: number;
    lng: number;
}

export interface Post {
    location: LatLng;
    imageSrc: string;
    dateTime: string;
    timeStamp: number;
    content: string;
}
