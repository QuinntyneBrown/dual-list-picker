import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  public columnDefs:any[] = [
    {
      columnName: "Name",
      propertyName: "name",
      width: "50px"
    },
    {
      columnName: "Description",
      propertyName: "description",
      width: "75px"
    }  
  ];

  @Input()
  public sourceList:any[] = [
    { name: "Wheel", description:"tough" },
    { name: "Door", description:"tough" },
    { name: "Trunk", description:"tough" },
    { name: "Engine", description:"tough" }
  ];

  @Input()
  public destinationList:any[] = [
    { name: "Hood", description:"tough" }
  ];  
}
