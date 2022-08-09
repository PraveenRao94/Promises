import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewchilddComponent } from '../viewchildd/viewchildd.component';
@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './viewchild-parent.component.html',
  styleUrls: ['./viewchild-parent.component.css'],
})
export class ViewchildParentComponent implements OnInit {
  @ViewChild(ViewchilddComponent) ChildComponent: ViewchilddComponent;

  constructor() {}

  increase() {
    this.ChildComponent.incby1();
  }
  decrease() {
    this.ChildComponent.decby1();
  }
  ngOnInit(): void {}
}
