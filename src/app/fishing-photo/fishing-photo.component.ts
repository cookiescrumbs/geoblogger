import { Component, OnInit } from '@angular/core';
import exifr from 'exifr';
import { LatLng, Post } from '../types';

@Component({
    selector: 'app-fishing-photo',
    templateUrl: './fishing-photo.component.html',
    styleUrls: ['./fishing-photo.component.scss']
})
export class FishingPhotoComponent implements OnInit {

    public imageSrc: string;
    public lng: number;
    public lat: number;
    public location: LatLng;
    public dateTime: string;
    public timeStamp: number;
    public content: string;
    public posts: Array<Post> = [];

    constructor() { }

    ngOnInit(): void {
    }

    onFilesUploaded(files: FileList) {
        for (let i = 0; i < files.length; i++) {
            this._setPostDataFromFile(files.item(i));
        }
    }

    private _setPostDataFromFile(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.imageSrc = reader.result as string;
            this._exif(reader.result)
            .then(() => {
                this.content = 'We went on a fishing trip';

                this.posts.push(this._post);
                console.log(JSON.stringify(this.posts));
            });
        };
    }

    private _exif(fileBuffer: string | ArrayBuffer): Promise<any[]> {
        const p = [];
        let location: Promise<any>;
        let dateTime: Promise<any>;

        location = exifr.gps(fileBuffer)
        .then((output) => {
            this.lat = output.latitude;
            this.lng = output.longitude;
            this.location = {
                lat: output.latitude,
                lng: output.longitude
            };
        });
        dateTime = exifr.parse(fileBuffer)
        .then((output)  => {
            this.dateTime =  output.DateTimeOriginal;
            this.timeStamp = this._toTimeStamp(output.DateTimeOriginal);
        });

        p.push(location);
        p.push(dateTime);

        return Promise.all(p);

    }

    private _toTimeStamp(dateTime: string): any {
        const datum = Date.parse(dateTime);
        return datum / 1000;
    }

    private get _post(): Post {
        return {
            location: this.location,
            media: {
                type: 'image',
                imageSrc: this.imageSrc
            },
            dateTime: this.dateTime,
            timeStamp: this.timeStamp,
            content: this.content
        };
    }
}
