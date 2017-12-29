import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';

import {
  DataTableModule,
  CalendarModule,
  ButtonModule,
  InputTextModule,
  ContextMenuModule,
  DropdownModule,
  DialogModule,
  MultiSelectModule,
  SliderModule,
  GrowlModule,
  TabViewModule,
  CodeHighlighterModule
} from 'primeng/primeng';

import { CarService } from './components/carService';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    DataTableModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    ContextMenuModule,
    DropdownModule,
    DialogModule,
    MultiSelectModule,
    SliderModule,
    GrowlModule,
    TabViewModule,
    CodeHighlighterModule
  ],
  providers: [ CarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
