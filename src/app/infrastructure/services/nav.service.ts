import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  mode = new Subject();
  constructor() { }
  public emitNavMode(mode) {
    this.mode.next(mode);
  }
  public subscribeMode(callback) {
    return this.mode.subscribe(callback);
  }
}
