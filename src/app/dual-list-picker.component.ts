import { Component, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  templateUrl: "./dual-list-picker.component.html",
  styleUrls: ["./dual-list-picker.component.css"],
  selector: "app-dual-list-picker"
})
export class DualListPickerComponent { 

  constructor(
    private readonly _elementRef: ElementRef
  ) { }

  @Input()
  public title:string;

  @Input()
  public sourceListTitle:string;

  @Input()
  public destinationListTitle:string;

  public onSaveClick() { 
    this.saveClick.emit({ 
      sourceList: this.sourceList, 
      destinationList: this.destinationList
    });
  }

  @Input()
  public set itemSizeValue(value:number) {
    (<HTMLElement>this._elementRef.nativeElement).style.setProperty("--item-size",`${value}px`);
    this._itemSizeValue  = value;
  }

  private _itemSizeValue: number = 30;

  @Output()
  public saveClick: EventEmitter<any> = new EventEmitter();

  @Input()
  public columnDefs:any;

  public _originalSourceList:any[];

  public _originalDestinationList:any[] = [];

  private _sourceList:any[];

  @Input("sourceList")
  public set sourceList(value:any[]) { 
    this._sourceList =value; 
    this._originalSourceList = value.slice(0);
  }

  public get sourceList() { return this._sourceList; }

  private _destinationList:any[] = [];

  @Input("destinationList")
  public set destinationList(value:any[]) { 
    this._destinationList = value; 
    this._originalDestinationList = value.slice(0);
  }

  public get isDirty():boolean {
    
    if(!this._originalDestinationList || !this._originalSourceList) { return false; }

    if(!equals(this._originalDestinationList,this._destinationList)) {return true };

    if(!equals(this._originalSourceList,this._sourceList)) {return true };

    return false;
  }

  public get destinationList() { return this._destinationList; }

  @Input()
  public disabled:boolean;
  
  public drop($event: CdkDragDrop<string[]>) {
    if($event.previousContainer === $event.container) {
      moveItemInArray(this.sourceList,$event.previousIndex,$event.currentIndex);
    } else {
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }
  }  
}

export function equals (array1, array2) {
  // if the other array is a falsy value, return
  if (!array2)
      return false;

  // compare lengths - can save a lot of time 
  if (array1.length != array2.length)
      return false;

  for (var i = 0, l=array1.length; i < l; i++) {
      // Check if we have nested arrays
      if (array1[i] instanceof Array && array2[i] instanceof Array) {
          // recurse into the nested arrays
          if (!array1[i].equals(array2[i]))
              return false;       
      }           
      else if (array1[i] != array2[i]) { 
          // Warning - two different object instances will never be equal: {x:20} != {x:20}
          return false;   
      }           
  }       
  return true;
}