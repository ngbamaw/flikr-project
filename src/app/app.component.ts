import { Component, OnInit } from '@angular/core';
import { Photo } from './models';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    images: Photo[];
    picsSize: number = undefined;
    showlist: boolean = false;

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit(): void {
        this.primengConfig.ripple = true;
        const love = String.fromCodePoint(0x1f60d);
        console.log(`Made with ${love} by Landry Monga and William Ngbama`);
    }

    updateImages(images) {
        this.images = images;
    }

    updateSize(size) {
        this.picsSize = size;
    }
}
