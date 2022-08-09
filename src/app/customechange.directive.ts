import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomechange]',
})
export class CustomechangeDirective {
  constructor(private eref: ElementRef) {
    eref.nativeElement.style.color = 'pink';
  }

  colorr(val: string) {
    this.eref.nativeElement.style.color = val;
  }
}
