import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-angular-spl-directive1',
  templateUrl: './angular-spl-directive1.component.html',
  styleUrls: ['./angular-spl-directive1.component.css'],
})
export class AngularSplDirective1Component implements OnInit {
  @ViewChild('name', { static: true }) elname: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.elname.nativeElement.textContent;
  }
}
