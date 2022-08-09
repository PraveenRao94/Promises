import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() pdata: any;
  @Output() childevent = new EventEmitter();
  @Input() users: any;
  constructor() {}

  inchild(val: any) {
    this.childevent.emit(val);
  }

  ngOnInit(): void {}
}
