import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactorStateService } from 'src/app/infrastructure/services/factor-state.service';

@Component({
  selector: 'app-prepayment-page',
  templateUrl: './prepayment-page.component.html',
  styleUrls: ['./prepayment-page.component.scss']
})
export class PrepaymentPageComponent implements OnInit {

  constructor(private _router: Router, private _factorStateService: FactorStateService) {
    this._factorStateService.emitState(2);
  }
  ngOnInit() {
  }
  goToPayment()
  {
    this._router.navigate(['/ios/shopping-cart/afterpayment'])
  }
}
