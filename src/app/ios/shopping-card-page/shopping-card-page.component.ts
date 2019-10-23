import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/infrastructure/services/nav.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FactorStateService } from 'src/app/infrastructure/services/factor-state.service';

@Component({
  selector: 'app-shopping-card-page',
  templateUrl: './shopping-card-page.component.html',
  styleUrls: ['./shopping-card-page.component.scss']
})
export class ShoppingCardPageComponent implements OnInit {
  factorState = 0;
  constructor(private _navService: NavService, private _router: Router, private _location: Location, private _factorStateService: FactorStateService) {
    this._navService.emitNavMode({ isHide: true });
    this._factorStateService.subscribeState((response) => {
      this.factorState = response;
      console.log(this.factorState);
    });
  }
  ngOnInit() {
  }
  back() {
    this._location.back();
  }
  isEmpty() {
    const cond = JSON.parse(localStorage.orders).length == 0;
    if (cond) {
      this._navService.emitNavMode({ isHide: false });
    }
    return cond;
  }
}
