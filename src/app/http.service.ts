import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { config } from './config';

import { SearchComponent } from './search/search.component';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private headers: HttpHeaders;
  private params: HttpParams;
  private reponseFormat: string = 'json';

  constructor(private http: HttpClient) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.headers = headers;

    let params = new HttpParams()
      .append('api_key', config.API_KEY)
      .append('format', this.reponseFormat)
      .append('nojsoncallback', '1')
      .append('per_page', '20');

    this.params = params;
  }

  getImage(filters: SearchComponent.Filters) {
    const { tags, added_tags, is_in_gallery, min_date, max_date } = filters;
    let params = this.params
      .append('method', 'flickr.photos.search')
      .append('tags', `${tags},${added_tags}`)
      .append('in_gallery', `${is_in_gallery ? is_in_gallery : false}`)
      .append('min_upload_date', `${min_date ? min_date : ''}`)
      .append('max_upload_date', `${max_date ? max_date : ''}`);

    return this.http.get(`${config.BASE_API_URL}/`, {
      headers: this.headers,
      params,
    });
  }
}
