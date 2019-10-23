import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/infrastructure/services/category.service';

@Component({
  selector: 'product-filter-modal',
  templateUrl: './product-filter-modal.component.html',
  styleUrls: ['./product-filter-modal.component.scss']
})

export class ProductFilterModalComponent implements OnInit {
  attributes;
  showModal = false;
  constructor(private _categoryService: CategoryService) {
    this._categoryService.getSubCategoryAttributes().subscribe((response: any) => {
      this.attributes = response.data;
      console.log(this.attributes);
    });
  }

  ngOnInit() {
    console.log(this.attributes);
  }
  closeFilter() {
    this.showModal = false;
  }
  openFilter() {
    this.showModal = true;
  }
}
