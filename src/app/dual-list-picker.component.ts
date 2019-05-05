import { Component, Input, Output, EventEmitter } from "@angular/core";
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  templateUrl: "./dual-list-picker.component.html",
  styleUrls: ["./dual-list-picker.component.css"],
  selector: "app-dual-list-picker"
})
export class DualListPickerComponent { 

  @Input()
  public title:string;

  @Input()
  public sourceListTitle:string;

  @Input()
  public destinationListTitle:string;

  public onSaveClick() { this.saveClick.emit(); }

  @Output()
  public saveClick: EventEmitter<any> = new EventEmitter();

  @Input()
  public columnDefs:any = [
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

  public prop:string = "name";

  public drop($event: CdkDragDrop<string[]>) {
    if($event.previousContainer === $event.container) {
      moveItemInArray(this.sourceList,$event.previousIndex,$event.currentIndex);
    }else {
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }
    
  }  
}
