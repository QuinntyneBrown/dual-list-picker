import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DualListPickerComponent } from './dual-list-picker.component';
import { DualListPickerRowComponent } from './dual-list-picker-row.component';
import { DualListPickerHeaderComponent } from './dual-list-picker-header.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DualListPickerComponent,
    DualListPickerRowComponent,
    DualListPickerHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
