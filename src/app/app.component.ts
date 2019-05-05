import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public sourceList:string[] = [
    "Wheel",
    "Door",
    "Trunk",
    "Engine"
  ];

  public destinationList:string[] = [
    "Hood"
  ];

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
