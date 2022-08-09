import { Component, OnInit } from '@angular/core';
import { Enumber } from '../enumber';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentsss = false;
  studentss = ['praveen', 'sunil', 'satish', 'rao'];
  myenum = Enumber;
  constructor() {}

  ngOnInit(): void {}

  // onclick() {
  //   this.studentsss = !this.studentsss;
  //   return this.studentss;
  // }
}
