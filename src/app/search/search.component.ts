import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';

import { HttpService } from '../http.service';
import { HttpErrorResponse } from '@angular/common/http';

import { Photo } from '../models';

export namespace SearchComponent {
  export interface Filters {
    added_tags?: string;
    is_in_gallery: boolean;
    min_date?: number;
    max_date?: number;
    size?: Size;
    tags: string;
  }

  export interface GetImagesResponse {
    photos: {
      page: string;
      photo: Photo[];
    };
  }
}

interface Size {
  label: string;
  value: string;
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  photos: Photo[];
  sizes: Size[] = [
    {
      label: 'small square (75px)',
      value: 's',
    },
    {
      label: 'large sqaure (150px)',
      value: 'q',
    },
    {
      label: 'thumbnail (100px long)',
      value: 't',
    },
    {
      label: '240px',
      value: 'm',
    },
    {
      label: '320px',
      value: 'n',
    },
    {
      label: '640px',
      value: 'z',
    },
    {
      label: '800px',
      value: 'c',
    },
  ];

  selectedSize: Size;

  @Output()
  public onSearchImages: EventEmitter<Photo[]> = new EventEmitter<Photo[]>();

  @Output()
  public imageSizeEmitter: EventEmitter<string> = new EventEmitter<string>();

  public noWhitespaceValidator(control: FormControl) {
    if (control.value === null) return null;
    const hasWhitespace = control.value.indexOf(' ') > 0;
    const isValid = !hasWhitespace;
    return isValid ? null : { whitespace: true };
  }

  searchForm: FormGroup;

  constructor(
    private HttpService: HttpService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      tags: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          this.noWhitespaceValidator,
        ],
      ],
      size: null,
      min_date: null,
      max_date: null,
      added_tags: [null, this.noWhitespaceValidator],
      is_in_gallery: false,
    });
  }

  ngOnInit(): void {}

  get tags() {
    return this.searchForm.get('tags');
  }

  get added_tags() {
    return this.searchForm.get('added_tags');
  }

  onSubmit(filters: SearchComponent.Filters) {
    if (filters.min_date) {
      filters.min_date = new Date(filters.min_date).getTime();
    }

    if (filters.max_date) {
      filters.max_date = new Date(filters.max_date).getTime();
    }

    if (filters.size) {
      this.imageSizeEmitter.emit(filters.size.value);
    }

    this.HttpService.getImages(filters).subscribe(
      ({ photos }: SearchComponent.GetImagesResponse) => {
        this.photos = photos.photo;
        this.onSearchImages.emit(this.photos);
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
