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
      .append('tag_mode', 'all')
      .append('per_page', '20')
      .append('media', 'photos')
      .append(
        'extras',
        'description,date_upload,owner_name,views,tags,last_update'
      );

    this.params = params;
  }

  getImages(filters: SearchComponent.Filters) {
    const { tags, added_tags, is_in_gallery, min_date, max_date } = filters;
    const params = this.params
      .append('method', 'flickr.photos.search')
      .append('tags', `${tags}${added_tags ? `,${added_tags}` : ''}`)
      .append('in_gallery', `${is_in_gallery}`)
      .append('min_upload_date', `${min_date ? min_date : ''}`)
      .append('max_upload_date', `${max_date ? max_date : ''}`);

    return this.http.get(`${config.BASE_API_URL}/`, {
      headers: this.headers,
      params,
    });
  }
}
