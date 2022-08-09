import { Component, Input, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-task-child1',
  templateUrl: './task-child1.component.html',
  styleUrls: ['./task-child1.component.css'],
})
export class TaskChild1Component implements OnInit {
  msg: any;
  @Input() slnum: any;

  constructor(private frndsmsg: SerService) {}

  toparent() {
    return this.frndsmsg.getmsg();
  }

  ngOnInit(): void {}
}
