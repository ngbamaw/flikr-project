import { Component, Input, OnInit } from '@angular/core';

import { Photo } from '../models';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
    constructor() {}

    @Input()
    images: Photo[];

    @Input()
    size?: number;

    ngOnInit(): void {}
}
