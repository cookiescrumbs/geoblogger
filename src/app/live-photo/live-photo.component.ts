import { Component, OnInit, Input, HostListener, ElementRef, EventEmitter, Output, AfterViewInit } from '@angular/core';
import * as LivePhotosKit from 'livephotoskit';

@Component({
    selector: 'app-live-photo',
    templateUrl: './live-photo.component.html',
    styleUrls: ['./live-photo.component.scss']
})
export class LivePhotoComponent implements AfterViewInit {
    @Input() video: string;
    @Input() photo: string;

    @Output()
    inView: EventEmitter<boolean> = new EventEmitter<boolean>();

    public livePlayer: any;
    public id: string;

    private _player: any;

    constructor(
        private el: ElementRef
    ) {
        this.id = this._generateId();
    }

    ngAfterViewInit() {
        this._createPlayer();
        this.onWindowScroll();
    }


    @HostListener('window:scroll', [])
    onWindowScroll(): void {
        const position = this.el.nativeElement.getBoundingClientRect();
        // detecting if element is fully visible ... is this post the current post?
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            this.inView.emit(true);
        }
    }

    private _createPlayer() {
        this._player = LivePhotosKit.augmentElementAsPlayer(
            document.getElementById(this.id)
        );
        this._player.photoSrc = this.photo;
        this._player.videoSrc = this.video;
    }

    private _generateId(): string {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    }


}
