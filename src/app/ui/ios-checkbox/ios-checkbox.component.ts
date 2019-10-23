import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ios-checkbox',
  templateUrl: './ios-checkbox.component.html',
  styleUrls: ['./ios-checkbox.component.scss']
})
export class IosCheckboxComponent implements OnInit {
  fill = false;
  @Input() data;
  constructor() { }

  ngOnInit() {
  }
  check() {
    this.fill = !this.fill;
  }
}
