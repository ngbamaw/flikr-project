import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { HttpService } from '../http.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

export namespace SearchComponent {
  export interface Filters {
    tags: string;
  }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  tags: string = '';
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
    console.log(filters);
    // TODO: change any type to getImageResponse interface
    const images = this.HttpService.getImage(filters).subscribe(
      (data: any) => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (!err.ok) {
          console.error(err);
        }
      }
    );
    console.log(images);
  }
}
