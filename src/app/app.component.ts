import { Component, OnInit } from '@angular/core';
import { Photo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  images: Photo[];

  ngOnInit(): void {
    const love = String.fromCodePoint(0x1f60d);
    console.log(`Made with ${love} by Landry Monga and William Ngbama`);
  }

  updateImages(images) {
    this.images = images;
  }
}
