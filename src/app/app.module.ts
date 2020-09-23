import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DataViewModule } from 'primeng/dataview';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SliderComponent } from './slider/slider.component';
import { ListComponent } from './list/list.component';
import { ImageComponent } from './image/image.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        SliderComponent,
        ListComponent,
        SliderComponent,
        ImageComponent,
    ],
    imports: [
        ButtonModule,
        BrowserAnimationsModule,
        CommonModule,
        BrowserModule,
        CalendarModule,
        CarouselModule,
        ChipsModule,
        DataViewModule,
        DropdownModule,
        FormsModule,
        HttpClientModule,
        InputSwitchModule,
        InputTextModule,
        ToggleButtonModule,
        ReactiveFormsModule,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule {}
