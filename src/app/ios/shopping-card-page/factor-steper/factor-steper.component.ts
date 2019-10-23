import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'factor-steper',
  templateUrl: './factor-steper.component.html',
  styleUrls: ['./factor-steper.component.scss']
})
export class FactorSteperComponent implements OnInit {
  @Input() currentStep = 1;

  stepIcon = [
    "assets/icons/shop.svg",
    "assets/icons/shop.svg",
    "assets/icons/shop.svg",
  ];
  constructor(private _location: Location) { }

  ngOnInit() {
  }
  back() {
    this._location.back();
  }
  getStepIcon(index) {
    return this.currentStep >= index + 1 ? "assets/icons/checkmark.svg" : this.stepIcon[index];
  }
}
