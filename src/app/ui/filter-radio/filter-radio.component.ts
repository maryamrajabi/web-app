import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'filter-radio',
  templateUrl: './filter-radio.component.html',
  styleUrls: ['./filter-radio.component.scss']
})
export class FilterRadioComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
