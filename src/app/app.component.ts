import { Component, Input, ViewChild } from '@angular/core';
import { DualListPickerComponent } from './dual-list-picker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  @ViewChild("dualTablePicker")
  public dualTablePicker:DualListPickerComponent;

  public columnDefs:any[] = [
    {
      columnName: "Id",
      propertyName: "id",
      width: "20px"
    },    
    {
      columnName: "Name",
      propertyName: "name",
      width: "1fr"
    },
    {
      columnName: "Description",
      propertyName: "description",
      width: "1fr"
    }  
  ];

  @Input()
  public sourceList:any[] = [
    { id: 1, name: "Wheel", description:"something" },
    { id: 2, name: "Door", description:"something" },
    { id: 3, name: "Trunk", description:"something" },
    { id: 4, name: "Engine", description:"something" }
  ];

  @Input()
  public destinationList:any[] = [
    { id: 5, name: "Hood", description:"something" }
  ];  

  public tryToSave($event) {
    alert("Save");
  }

  public disabled:boolean = false;
}
