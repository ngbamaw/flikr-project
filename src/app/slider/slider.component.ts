import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
    @Input()
    get images(): string[] {
        return this._images.slice(this.current, this.current + 7);
    }
    set images(images: string[]) {
        this._images = images;
    }
    private _images: string[] = [
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    ];
    scales = [0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7];
    current: number = 0;
    constructor() {}

    ngOnInit(): void {}
}
