import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';

import { HttpService } from '../http.service';
import { Photo } from '../models';
import { buildImgSrc } from '../utils';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit, OnChanges {
    constructor(private httpService: HttpService) {}

    showMore: boolean = false;

    @Input()
    image: Photo;

    @Input()
    size?: number;

    ngOnInit(): void {
        this.showMore = false;
        console.log(this.showMore);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.showMore = false;
    }

    getComments() {
        this.httpService
            .getComments(this.image.id)
            .subscribe(({ comments }: { comments: Photo['comments'] }) => {
                this.image.comments = comments;
                this.image.comments.comment = this.image.comments.comment.slice(
                    0,
                    5
                );
            });
    }

    getSrc() {
        return this.image ? buildImgSrc(this.image, this.size) : '';
    }

    toggleDescription() {
        this.showMore = !this.showMore;
        console.log(this.showMore);

        if (this.showMore === true) {
            this.getComments();
        }
    }

    toLocalDate(date: number) {
        return new Date(date * 1000).toLocaleDateString('fr-FR');
    }
}
