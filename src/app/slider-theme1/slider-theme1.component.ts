import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Photo } from '../models';
import { buildImgSrc } from '../utils';

@Component({
    selector: 'app-slider-theme1',
    templateUrl: './slider-theme1.component.html',
    styleUrls: ['./slider-theme1.component.css'],
})
export class SliderTheme1Component implements OnInit {
    moveLeft: boolean = false;
    moveRight: boolean = false;
    current: number = 0;

    @Input() images: Photo[] = [];

    @Input() size?: number;

    constructor() {}

    ngOnInit(): void {}

    /*
    ngAfterViewInit() {
        // @ts-ignore
        const imgs = [...document.body.getElementsByClassName('img-container')];
        for (const img of imgs) {
            img.addEventListener('transitionend', () => {})
        }
        console.log();
    }
    */

    getSrc(index: number) {
        return buildImgSrc(this.images[index], this.size);
    }

    @HostListener('transitionend', ['$event'])
    onTransitionEnd(event: Event) {
        const div = event.target as HTMLDivElement;
        if (
            div.classList.contains('img-container') &&
            !div.classList.contains('not-transition')
        ) {
            const { moveLeft, moveRight } = this;

            div.classList.add('not-transition');
            this.moveLeft = false;
            this.moveRight = false;
            setTimeout(() => div.classList.remove('not-transition'), 50);
        }
    }
}
