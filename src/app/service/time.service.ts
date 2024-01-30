import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  public now = signal(new Date());
  public nowTime = computed(() => { return this.now().getHours() + ':' + this.now().getMinutes() + ':' +  this.now().getSeconds()})

  constructor() {
    setInterval(() => {
      this.now.set(new Date());
    }, 1000);
  }
}
