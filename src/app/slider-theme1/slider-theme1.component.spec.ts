import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTheme1Component } from './slider-theme1.component';

describe('SliderTheme1Component', () => {
    let component: SliderTheme1Component;
    let fixture: ComponentFixture<SliderTheme1Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SliderTheme1Component],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SliderTheme1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
