import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SerService {
  constructor() {}

  mymsg(): Promise<string> {
    let str = 'hi maga my name is praveen';
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(str);
      }, 3000);
    });
  }
  frnds: any = [
    { id: 12, name: 'praveen' },
    { id: 13, name: 'satish' },
    { id: 14, name: 'sunil' },
  ];

  getmsg() {
    return this.frnds;
  }
}
