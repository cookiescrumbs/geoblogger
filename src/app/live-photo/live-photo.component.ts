import { Component, OnInit, Input, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';
import * as LivePhotosKit from 'livephotoskit';

@Component({
    selector: 'app-live-photo',
    templateUrl: './live-photo.component.html',
    styleUrls: ['./live-photo.component.scss']
})
export class LivePhotoComponent implements OnInit {
    @Input() video: string;
    @Input() photo: string;

    @Output()
    inView: EventEmitter<boolean> = new EventEmitter<boolean>();

    public livePlayer: any;
    public id: string;

    constructor(
        private el: ElementRef
    ) {
        this.id = this._generateId();
    }

    ngOnInit(): void {
        this._createPlayer();
        this.onWindowScroll();
    }


    @HostListener('window:scroll', [])
    onWindowScroll(): void {
        const position = this.el.nativeElement.getBoundingClientRect();
        // detecting if element is fully visible ... is this post the current post?
        if (position.top > 0 && position.bottom < window.innerHeight) {
            // console.log(`id: ${this.id}...top: ${position.top}...bottom: ${position.bottom}... innerHeight: ${window.innerHeight}`);
            this.inView.emit(true);
        }
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
