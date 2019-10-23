import { Component, OnInit } from '@angular/core';
import { FactorStateService } from 'src/app/infrastructure/services/factor-state.service';

@Component({
  selector: 'app-afterpayment',
  templateUrl: './afterpayment.component.html',
  styleUrls: ['./afterpayment.component.scss']
})
export class AfterpaymentComponent implements OnInit {
  productOrders: any;
  sec = 24;
  min = 1;
  hour = 1;
  day = 0;
  constructor(private _factorStateService: FactorStateService) {
    this.productOrders = JSON.parse(localStorage.orders);

    this._factorStateService.emitState(3);
    this.countDown();
  }


  ngOnInit() {
  }
  countDown() {
    this.sec = this.sec > 0 ? this.sec - 1 : 0;

    if (this.sec > 0) {
      setTimeout(() => {
        this.countDown();
      }, 1000);
    }
    else if (this.min > 0) {
      this.min--;
      this.sec = 60;
      setTimeout(() => {
        this.countDown();
      }, 1000);
    }
    else if (this.hour > 0) {
      this.hour--;
      this.min = 60;
      setTimeout(() => {
        this.countDown();
      }, 1000);
    }
    else if (this.day > 0) {
      this.day--;
      this.hour = 24;
      setTimeout(() => {
        this.countDown();
      }, 1000);
    }
  }
  pipeZeroBase(number) {
    return number < 10 ? '0' + number : number;
  }
}
