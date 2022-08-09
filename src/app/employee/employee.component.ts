import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  res: any = false;
  vorn: boolean = false;
  // students = ['praveen', 'sunil ', 'satish', 'raghu']; //// button task
  // value = 300; //// switch //////
  gen: any = 'male'; ////// gen/////
  constructor() {}

  onclick(val: any) {
    this.res = val;
  }
  // clicked(val: boolean) {
  //   this.vorn = val;
  // }

  ngOnInit(): void {}
}
