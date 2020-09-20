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
    current: number = 0;
    constructor() {}

    ngOnInit(): void {}

    @Input()
    images: Photo[];

    @Input()
    size: number;

    @HostListener('transitionend', ['$event'])
    onTransitionEnd(event: Event) {
        const div = event.target as HTMLDivElement;
        if (
            div.classList.contains('slider-element') &&
            !div.classList.contains('not-transition')
        ) {
            div.classList.add('not-transition');
            if (this.moveLeft) this.current++;
            if (this.moveRight) this.current--;
            this.moveLeft = false;
            this.moveRight = false;
        } else if (div.classList.contains('not-transition')) {
            setTimeout(() => div.classList.remove('not-transition'), 100);
        }
    }
}
