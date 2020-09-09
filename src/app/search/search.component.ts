import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { HttpService } from '../http.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Photo } from '../models';

export namespace SearchComponent {
  export interface Filters {
    tags: string;
  }

  export interface GetImagesResponse {
    photos: {
      page: string;
      photo: Photo[];
    };
  }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  tags: string = '';
  photos: Photo[];
  searchForm;
  control;

  constructor(
    private HttpService: HttpService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      tags: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(filters: SearchComponent.Filters) {
    const images = this.HttpService.getImage(filters).subscribe(
      ({ photos }: SearchComponent.GetImagesResponse) => {
        this.photos = photos.photo;
        console.log(this.photos);
      },
      (err: HttpErrorResponse) => {
        if (!err.ok) {
          console.error(err);
        }
      }
    );
    return images;
  }
}
