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

    let params = new HttpParams();
    params.set('api_key', config.API_KEY);
    params.set('format', this.reponseFormat);
    params.set('nojsoncallback', '1');
    params.set('extras', 'url_o');
    this.params = params;
  }

  getImage(filters: SearchComponent.Filters) {
    const { tags } = filters;
    let params = this.params;
    params.set('method', 'flickr.method.search');
    params.set('tags', tags);
    return this.http.get(`${config.BASE_API_URL}/`, {
      headers: this.headers,
      params,
    });
  }
}
