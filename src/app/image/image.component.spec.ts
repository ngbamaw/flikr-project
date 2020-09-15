import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComponent } from './image.component';
import { mockPhoto } from 'src/app/models';

describe('ImageComponent', () => {
    let component: ImageComponent;
    let fixture: ComponentFixture<ImageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ImageComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ImageComponent);
        component = fixture.componentInstance;
        component.image = mockPhoto;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return correct time', () => {
        const timestamp = 1600054694;
        expect(component.toLocalDate(timestamp)).toBe('14/09/2020');
    });
});
