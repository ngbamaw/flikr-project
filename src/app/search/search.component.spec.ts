import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { SearchComponent } from './search.component';

import { HttpService } from '../http.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { InputSwitchModule } from 'primeng/inputswitch';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let injector: TestBed;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [
                HttpClientTestingModule,
                FormsModule,
                ReactiveFormsModule,
                DropdownModule,
                CalendarModule,
                ChipsModule,
                InputSwitchModule,
            ],
            providers: [HttpService, HttpClient, FormBuilder, DropdownModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        injector = getTestBed();
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        httpClient = injector.get(HttpClient);
        httpClient = injector.get(HttpService);
        httpTestingController = injector.get(HttpTestingController);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
