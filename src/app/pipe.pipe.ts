import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome',
})
export class PipePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    // return `my name is ${value}`;
    // return `<b> ${value} </b>`;
    return value.split('').reverse().join('');
  }
}
