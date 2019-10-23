import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SliderModel } from './slider';
// import { CategoryService } from 'src/app/infrastructure/services/category.service';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { CategoryService } from '../../infrastructure/services/category.service';

@Component({
  selector: 'app-ios-category-page',
  templateUrl: './ios-category-page.component.html',
  styleUrls: ['./ios-category-page.component.scss']
})
export class IosCategoryPageComponent implements OnInit {
  categories = [];
  isFilterOpen = false;
  attributes;
  @ViewChild('filterModal', { static: true }) filterModal: FilterModalComponent;
  constructor(private _router: Router, private _categoryService: CategoryService) {
    this._categoryService.getCategories().subscribe((response: any) => {
      this.categories = response.data;
    });
  }

  ngOnInit() {
  }
  back() {
    // window.history.back(); =>Raw JS back window
    this._router.navigate(['/ios/home']);
  }
  openFilter() {
    this.filterModal.openFilter();
  }
}
