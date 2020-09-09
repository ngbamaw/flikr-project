import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { HttpService } from '../http.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Photo } from '../models';

export namespace SearchComponent {
  export interface Filters {
    tags: string;
    size?: string;
    min_date?: string;
    max_date?: string;
    added_tags: string;
    is_in_gallery: boolean;
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
  sizes = [
    {
      text: 'small square',
      value: 's',
    },
    {
      text: 'large sqaure',
      value: 'q',
    },
    {
      text: 'thumbnail',
      value: 't',
    },
    {
      text: '240px',
      value: 'm',
    },
    {
      text: '240px',
      value: 'n',
    },
    {
      text: '640px',
      value: 'z',
    },
    {
      text: '800px',
      value: 'c',
    },
    {
      text: '1024px',
      value: 'b',
    },
  ];

  constructor(
    private HttpService: HttpService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      tags: '',
      size: '',
      min_date: '',
      max_date: '',
      added_tags: '',
      is_in_gallery: false,
    });
  }

  ngOnInit(): void {}

  onSubmit(filters: SearchComponent.Filters) {
    // TODO: propagate event to get the correct size
    this.HttpService.getImage(filters).subscribe(
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
  }
}
