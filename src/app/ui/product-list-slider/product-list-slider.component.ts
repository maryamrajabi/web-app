import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-list-slider',
  templateUrl: './product-list-slider.component.html',
  styleUrls: ['./product-list-slider.component.scss']
})
export class ProductListSliderComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
