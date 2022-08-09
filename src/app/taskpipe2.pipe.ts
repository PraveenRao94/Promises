import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskpipe2',
})
export class Taskpipe2Pipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    return;
  }
}
