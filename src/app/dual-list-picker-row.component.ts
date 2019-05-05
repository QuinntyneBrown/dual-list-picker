import { Component, Input } from "@angular/core";

@Component({
  templateUrl: "./dual-list-picker-row.component.html",
  styleUrls: ["./dual-list-picker-row.component.css"],
  selector: "app-dual-list-picker-row"
})
export class DualListPickerRowComponent { 

  @Input()
  public data:any;

  @Input()
  public columnDefs:any[];
}
