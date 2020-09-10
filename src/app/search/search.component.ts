import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { HttpService } from '../http.service';
import { HttpErrorResponse } from '@angular/common/http';

import { Photo } from '../models';

export namespace SearchComponent {
  export interface Filters {
    added_tags?: string;
    is_in_gallery: boolean;
    min_date?: number;
    max_date?: number;
    size?: string;
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
  sizes = [
    {
      text: 'small square (75px)',
      value: 's',
    },
    {
      text: 'large sqaure (150px)',
      value: 'q',
    },
    {
      text: 'thumbnail (100px long)',
      value: 't',
    },
    {
      text: '240px',
      value: 'm',
    },
    {
      text: '320px',
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
  ];

  @Output()
  public onSearchImages: EventEmitter<Photo[]> = new EventEmitter<Photo[]>();

  constructor(
    private HttpService: HttpService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      tags: '',
      size: '',
      min_date: null,
      max_date: null,
      added_tags: '',
      is_in_gallery: false,
    });
  }

  ngOnInit(): void {}

  onSubmit(filters: SearchComponent.Filters) {
    // TODO: propagate event to get the correct size
    if (filters.min_date) {
      filters.min_date = new Date(filters.min_date).getTime();
    }

    if (filters.max_date) {
      filters.max_date = new Date(filters.max_date).getTime();
    }

    this.HttpService.getImage(filters).subscribe(
      ({ photos }: SearchComponent.GetImagesResponse) => {
        this.photos = photos.photo;
        this.onSearchImages.emit(this.photos);
      },
      (err: HttpErrorResponse) => {
        if (!err.ok) {
          console.error(err);
        }
      }
    );
  }
}
