import { Component, Input, Renderer2, ElementRef } from "@angular/core";

@Component({
  templateUrl: "./dual-list-picker-row.component.html",
  styleUrls: ["./dual-list-picker-row.component.css"],
  selector: "app-dual-list-picker-row"
})
export class DualListPickerRowComponent { 

  constructor(
    private readonly _renderer: Renderer2,
    private readonly _elementRef: ElementRef
  ) {    
  }
  @Input()
  public data:any;

  @Input()
  public columnDefs:any[];

  ngOnInit() {
    this._renderer.setStyle(this._elementRef.nativeElement,"grid-template-columns",this.columnDefs.map(x => x.width).join(" "));
  }  
}
