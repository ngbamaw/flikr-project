import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../models';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  current: number = 0;
  protocol = 'https://';

  @Input()
  images: Photo[];

  scales = [0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7];

  constructor() {}

  ngOnInit(): void {}

  buildImgSrc(image: Photo, size?: string) {
    const extension = '.jpg';
    let base = `${this.protocol}farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}`;
    if (size) {
      base = `${base}_${size}`;
    }

    return `${base}${extension}`;
  }
}
