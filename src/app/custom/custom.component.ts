import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CustomechangeDirective } from '../customechange.directive';
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
})
export class CustomComponent implements OnInit {
  @ViewChild(CustomechangeDirective) colr: CustomechangeDirective;
  constructor() {}

  ngOnInit(): void {}

  colorchange(color: string) {
    this.colr.colorr(color);
  }

  prom = new Promise((resolve) => {
    setTimeout(() => {
      resolve('maga');
    }, 3000);
  });
}
