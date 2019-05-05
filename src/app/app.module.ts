import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DualListPickerComponent } from './dual-list-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    DualListPickerComponent
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
