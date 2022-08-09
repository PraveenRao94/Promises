import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  name: string = 'Praveen';

  // pdata:any = [
  //   { id: 1, name: 'praveen', date: 12 - 08 - 1994, salary: 4000 },
  //   { id: 2, name: 'sati', date: 12 - 11 - 1994, salary: 8000 },
  //   { id: 3, name: 'sunil', date: 11 - 08 - 1997, salary: 3000 },
  //   { id: 4, name: 'motte', date: 21 - 11 - 1993, salary: 4000 },
  //   { id: 5, name: 'manu', date: 14 - 12 - 1991, salary: 43400 },
  // ];
  constructor() {}

  ngOnInit(): void {}
}
