import { Component, Input, Renderer2, ElementRef } from "@angular/core";

@Component({
  templateUrl: "./dual-list-picker-header.component.html",
  styleUrls: ["./dual-list-picker-header.component.css"],
  selector: "app-dual-list-picker-header"
})
export class DualListPickerHeaderComponent { 

  constructor(
    private readonly _renderer: Renderer2,
    private readonly _elementRef: ElementRef
  ){
    
  }
  ngOnInit() {
    this._renderer.setStyle(this._elementRef.nativeElement,"grid-template-columns",this.columnDefs.map(x => x.width).join(" "));
  } 
  @Input()
  public columnDefs:any[] = [];
}
