import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ios-category-main-item',
  templateUrl: './ios-category-main-item.component.html',
  styleUrls: ['./ios-category-main-item.component.scss']
})
export class IosCategoryMainItemComponent implements OnInit {
@Input()mode="soft";
  constructor() { }

  ngOnInit() {
  }

}
