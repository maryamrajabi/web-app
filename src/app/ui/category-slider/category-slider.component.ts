import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.scss']
})
export class CategorySliderComponent implements OnInit {
@Input()data;
  constructor() { }

  ngOnInit() {
  }

}
