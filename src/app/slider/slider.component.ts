import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Photo } from '../models';
@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
    moveLeft: boolean = false;
    moveRight: boolean = false;
    onMove: boolean = false;
    fast: boolean = false;

    current: number = 0;
    constructor() {}

    ngOnInit(): void {}

    @Input()
    images: Photo[];

    @Input()
    size: number;

    move(direction: 'left' | 'right') {
        if (!this.onMove) {
            this.onMove = true;
            switch (direction) {
                case 'left':
                    this.moveLeft = true;
                    break;
                case 'right':
                    this.moveRight = true;
                    break;
            }
        }
    }

    @HostListener('transitionend', ['$event'])
    onTransitionEnd(event: Event) {
        const div = event.target as HTMLDivElement;
        if (
            div.classList.contains('slider-element') &&
            !div.classList.contains('not-transition')
        ) {
            div.classList.add('not-transition');
            if (this.moveLeft) this.current--;
            if (this.moveRight) this.current++;
            this.moveLeft = false;
            this.moveRight = false;
        } else if (div.classList.contains('not-transition')) {
            setTimeout(() => {
                div.classList.remove('not-transition');
                this.onMove = false;
            }, 20);
        }
    }
}
