import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchildd',
  templateUrl: './viewchildd.component.html',
  styleUrls: ['./viewchildd.component.css'],
})
export class ViewchilddComponent implements OnInit {
  message: any = '';
  count: number = 0;
  constructor() {}

  incby1() {
    this.count++;
    this.message = `counter: ${this.count}`;
  }

  decby1() {
    this.count--;
    this.message = `counter: ${this.count}`;
  }

  ngOnInit(): void {}
}
