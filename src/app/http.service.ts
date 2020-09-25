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
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        this.headers = headers;

        const params = new HttpParams()
            .append('api_key', config.API_KEY)
            .append('format', this.reponseFormat)
            .append('nojsoncallback', '1')
            .append('tag_mode', 'all');
        this.params = params;
    }

    getImages(filters: SearchComponent.Filters) {
        const { tags, added_tags, is_in_gallery, min_date, max_date } = filters;
        const extras = [
            'description',
            'date_upload',
            'owner_name',
            'views',
            'tags',
            'last_update',
            'geo',
            'license',
        ];

        const params = this.params
            .append('method', 'flickr.photos.search')
            .append(
                'tags',
                `${tags[0]}${
                    added_tags.length > 0 ? ',' + added_tags.join(',') : ''
                }`
            )
            .append('in_gallery', `${is_in_gallery}`)
            .append('min_upload_date', `${min_date ? min_date : ''}`)
            .append('max_upload_date', `${max_date ? max_date : ''}`)
            .append('per_page', '20')
            .append('media', 'photos')
            .append('extras', extras.join(','))
            .append('has_geo', 'true');

        return this.http.get(`${config.BASE_API_URL}/`, {
            headers: this.headers,
            params,
        });
    }

    getComments(photo_id: string) {
        const params = this.params
            .append('photo_id', photo_id)
            .append('method', 'flickr.photos.comments.getList');
        return this.http.get(`${config.BASE_API_URL}/`, {
            headers: this.headers,
            params,
        });
    }
}
