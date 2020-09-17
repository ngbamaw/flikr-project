import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../models';

@Component({
    selector: 'app-slider-old',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
    current: number = 0;

    @Input()
    images: Photo[];

    @Input()
    size?: number;

    constructor() {}

    ngOnInit(): void {
        this.images = [];
    }
}
