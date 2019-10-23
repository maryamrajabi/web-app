import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeSliderService } from 'src/app/infrastructure/services/home-slider.service';
import { ProductService } from 'src/app/infrastructure/services/product.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FilterModalComponent } from '../ios-category-page/filter-modal/filter-modal.component';
import { ProductFilterModalComponent } from './product-filter-modal/product-filter-modal.component';
import { CategoryService } from 'src/app/infrastructure/services/category.service';

@Component({
  selector: 'product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  categories = [];
  isFilterOpen = false;
  attributes;
  @ViewChild('filterModal') filterModal: ProductFilterModalComponent;


  slider = [];

  // products = [
  //   {
  //     off: 10,
  //     image: "assets/product/1.png",
  //     name: "ناگت مرغ 1800 گرمی آرین پروتئین",
  //     owner: "بهپرور",
  //     price: 42500,
  //     rate: 1
  //   },
  //   {
  //     off: 0,
  //     image: "assets/product/7.png",
  //     name: "ناگت مرغ 1800 گرمی آرین پروتئین",
  //     owner: "بهپرور",
  //     price: 42500,
  //     rate: 2
  //   },
  //   {
  //     off: 55,
  //     image: "assets/product/8.png",
  //     name: "ناگت مرغ 1800 گرمی آرین پروتئین",
  //     owner: "بهپرور",
  //     price: 42500,
  //     rate: 4
  //   },
  //   {
  //     off: 10,
  //     image: "assets/product/2.png",
  //     name: "ناگت مرغ 1800 گرمی آرین پروتئین",
  //     owner: "بهپرور",
  //     price: 42500,
  //     rate: 3
  //   },
  //   {
  //     off: 25,
  //     image: "assets/product/6.png",
  //     name: "ناگت مرغ 1800 گرمی آرین پروتئین",
  //     owner: "بهپرور",
  //     price: 42500,
  //     rate: 2
  //   },
  //   {
  //     off: 90,
  //     image: "assets/product/5.png",
  //     name: "ناگت مرغ 1800 گرمی آرین پروتئین",
  //     owner: "بهپرور",
  //     price: 42500,
  //     rate: 4
  //   },
  //   {
  //     off: 0,
  //     image: "assets/product/9.png",
  //     name: "ناگت مرغ 1800 گرمی آرین پروتئین",
  //     owner: "بهپرور",
  //     price: 42500,
  //     rate: 4
  //   },
  //   {
  //     off: 5,
  //     image: "assets/product/4.png",
  //     name: "ناگت مرغ 1800 گرمی آرین پروتئین",
  //     owner: "بهپرور",
  //     price: 42500,
  //     rate: 1
  //   },
  // ];
  products;
  constructor(private _homeSliderService: HomeSliderService,
    private _productService: ProductService,
    private _location: Location,
    private _router: Router,
    private _categoryService: CategoryService
  ) {

    this._homeSliderService.index().subscribe((response: any) => {
      this.slider = response.data.map(image => image.photo_primary_rectangle);
      console.log(this.slider);
    });

    this._productService.getProductList().subscribe((response: any) => {
      console.log(response);
    });

    this._categoryService.getSubCategoryProductSales().subscribe((response: any) => {
      this.products = response.data;
      console.log(response.data);
    });

  }

  ngOnInit() {
  }
  goToProduct(id) {
    this._router.navigate(['/ios/product-detail', { id: id }]);
  }
  back() {
    this._location.back();
  }
  openFilter() {
    this.filterModal.openFilter();
  }
}
