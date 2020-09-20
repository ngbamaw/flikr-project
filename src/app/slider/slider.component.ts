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
            div.classList.contains('img-container') &&
            !div.classList.contains('not-transition')
        ) {
            div.classList.add('not-transition');
            this.moveLeft = false;
            this.moveRight = false;
        } else if (div.classList.contains('not-transition')) {
            console.log('transend', div);
            setTimeout(() => div.classList.remove('not-transition'), 50);
        }
    }
}
