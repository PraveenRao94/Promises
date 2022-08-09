import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  pdata2: any;

  userdata: any = [];
  id: any;
  name: any;

  customers = [
    {
      name: 'Alfreds Futterkiste',
      country: 'Germany',
    },
    {
      name: 'Berglunds snabbkop',
      country: 'Sweden',
    },
    {
      name: 'Island Trading',
      country: 'UK',
    },
    {
      name: 'Koniglich Essen',
      country: 'Germany',
    },
  ];

  person: any[] = [
    {
      Id: 1,
      Name: 'praveen',
    },
    {
      Id: 2,
      Name: 'sunil',
    },
    {
      Id: 3,
      Name: 'manu',
    },
    {
      Id: 4,
      Name: 'satish',
    },
  ];
  //   {
  //     name: 'Laughing Bacchus Winecellars',
  //     country: 'Canada',
  //   },
  //   {
  //     name: 'Magazzini Alimentari Riuniti',
  //     country: 'Italy',
  //   },
  //   {
  //     name: 'North/South',
  //     country: 'UK',
  //   },
  //   {
  //     name: 'Paris specialites',
  //     country: 'France',
  //   },
  // ];
  constructor() {}

  adduser() {
    this.userdata.push({ id: this.id, name: this.name });
  }
  // inparent(event) {
  //   this.pdata2 = event;
  // }
  ngOnInit(): void {}
}
