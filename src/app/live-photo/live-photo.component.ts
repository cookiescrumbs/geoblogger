import { Component, OnInit, Input } from '@angular/core';
import * as LivePhotosKit from 'livephotoskit';

@Component({
    selector: 'app-live-photo',
    templateUrl: './live-photo.component.html',
    styleUrls: ['./live-photo.component.scss']
})
export class LivePhotoComponent implements OnInit {

    @Input() video: string;
    @Input() photo: string;

    public livePlayer: any;
    public id: string;

    constructor() {
        this.id = this._generateId();
    }

    ngOnInit(): void {
        this._createPlayer();
    }

    private _createPlayer() {
        document.addEventListener('DOMContentLoaded', (event) => {

            const player = LivePhotosKit.augmentElementAsPlayer(
                document.getElementById(this.id)
            );
            player.photoSrc = this.photo;
            player.videoSrc = this.video;
        });
    }

    private _generateId(): string {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    }

}
