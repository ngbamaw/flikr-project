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

  // private _images: string[] = [
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  // ];

  scales = [0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7];

  constructor() {}

  ngOnInit(): void {}

  buildImgSrc(image: Photo) {
    console.log(image);
    return `${this.protocol}farm${image.farm}.staticflickr.com/${image.server}/${image.id}/${image.secret}.jpg`;
  }
}
