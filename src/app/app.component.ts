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
      propertyName: "name"
    }
  ];

  @Input()
  public sourceList:any[] = [
    { name: "Wheel" },
    { name: "Door" },
    { name: "Trunk" },
    { name: "Engine" }
  ];

  @Input()
  public destinationList:any[] = [
    { name: "Hood" }
  ];  
}
