import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactorStateService {
  private state = new Subject();
  constructor() { }
  public emitState(mode) {
    this.state.next(mode);
  }
  public subscribeState(callback) {
    return this.state.subscribe(callback);
  }
}
