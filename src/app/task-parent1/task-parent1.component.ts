import {
  Component,
  OnChanges,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TaskChild1Component } from '../task-child1/task-child1.component';

@Component({
  selector: 'app-task-parent1',
  templateUrl: './task-parent1.component.html',
  styleUrls: ['./task-parent1.component.css'],
})
export class TaskParent1Component implements OnInit {
  @ViewChildren(TaskChild1Component) childmsg: QueryList<TaskChild1Component>;

  message: any;
  constructor() {}

  display() {
    this.message = this.childmsg.find((el) => el.slnum === 1)?.toparent();
    // this.message = this.childmsg.last.toparent();
  }

  reset() {
    this.message = [{}];
  }
  ngOnInit(): void {}
}
