import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
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




import { AppComponent } from './app.component';

// 01-基本例子
import { BasicComponent } from './components/01-basic/basic.component';


import { CarService } from './components/carService';

const EXAMPLE = [
  // 01-基本例子
  BasicComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...EXAMPLE,
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
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
