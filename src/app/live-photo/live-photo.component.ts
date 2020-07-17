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

    constructor() {
    }

    ngOnInit(): void {
        this._createPlayer();
    }

    private _createPlayer() {
        document.addEventListener('DOMContentLoaded', (event) => {
            const player = LivePhotosKit.augmentElementAsPlayer(
                document.getElementById('live-photo-player')
            );
            player.photoSrc = this.photo;
            player.videoSrc = this.video;
        });
    }

}
