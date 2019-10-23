import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService} from '../../infrastructure/services/product.service';

@Component({
  selector: 'app-ios-search-page',
  templateUrl: './ios-search-page.component.html',
  styleUrls: ['./ios-search-page.component.scss']
})
export class IosSearchPageComponent implements OnInit {
  public products = [];
  resultSearch;
  item = '';
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ProductService: ProductService, private _router: Router) {
    // get the products list from the service
    this.ProductService.getProductList().
    subscribe((response: any) => {
      this.products = response.data;
    });
  }
  ngOnInit() {
  }

  fetchProducts() {
    this.resultSearch = this.products.filter(product => product.name.includes(this.item));
  }
  // filter the result of search by the client
  // ----------------------------------------
  goToLink(link) {
    this._router.navigate([link]);
  }
  // route back to home
  // ----------------------------------------
  // returns not found when no match is found
  condition() {
    const condition = ' جستجو نتیجه بخش نبود!';
    if (this.resultSearch && this.resultSearch.length == 0) {
      return condition;
    }
  }

}
