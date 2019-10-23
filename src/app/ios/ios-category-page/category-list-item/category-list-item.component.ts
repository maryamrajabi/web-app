import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.scss']
})
export class CategoryListItemComponent implements OnInit {
  @Input() data;
  isOpen = false;
  closeModeIcon = "assets/icons/plus-grey.svg";
  openModeIcon = "assets/icons/minus-grey.svg";
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
  productList() {
    this._router.navigate(['/ios/product-list']);
  }
}
