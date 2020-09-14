import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../models';
import { buildImgSrc } from '../utils';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
    constructor() {}

    showMore: boolean = false;

    @Input()
    image: Photo;

    @Input()
    size?: number;

    ngOnInit(): void {}

    toggleDescription() {
        this.showMore = !this.showMore;
    }

    getSrc() {
        return buildImgSrc(this.image, this.size);
    }

    toLocalDate(date: number) {
        return new Date(date * 1000).toLocaleDateString('fr-FR');
    }
}
