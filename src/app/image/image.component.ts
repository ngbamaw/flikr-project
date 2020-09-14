import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
    constructor() {}

    @Input()
    src: string;

    @Input()
    alt: string = 'flickr image';

    ngOnInit(): void {}
}
