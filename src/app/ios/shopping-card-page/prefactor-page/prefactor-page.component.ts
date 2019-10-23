import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactorStateService } from 'src/app/infrastructure/services/factor-state.service';

@Component({
  selector: 'prefactor-page',
  templateUrl: './prefactor-page.component.html',
  styleUrls: ['./prefactor-page.component.scss']
})
export class PrefactorPageComponent implements OnInit {
  productOrders;
  constructor(private _router: Router, private _factorStateService: FactorStateService) {
    this.productOrders = JSON.parse(localStorage.orders);

    this._factorStateService.emitState(1);
  }

  ngOnInit() {
  }
  goToPrePayment() {
    this._router.navigate(['/ios/shopping-cart/prepayment'])
  }
}
