import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ios-tracking-orders-page',
  templateUrl: './ios-tracking-orders-page.component.html',
  styleUrls: ['./ios-tracking-orders-page.component.scss']
})
export class IosTrackingOrdersPageComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  back() {
    this._location.back();
  }
}
