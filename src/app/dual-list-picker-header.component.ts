import { Component, Input } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  templateUrl: "./dual-list-picker-header.component.html",
  styleUrls: ["./dual-list-picker-header.component.css"],
  selector: "app-dual-list-picker-header"
})
export class DualListPickerHeaderComponent { 

  @Input()
  public columnDefs:any[] = [];
}
