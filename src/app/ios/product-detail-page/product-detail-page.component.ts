import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavService } from 'src/app/infrastructure/services/nav.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CategoryService } from 'src/app/infrastructure/services/category.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit, OnDestroy {
  tabIndex = 0;
  orderNumber = 0;
  product;

  isAddEvent = false;

  constructor(private _navService: NavService, private _router: Router, private _location: Location, private _categoryService: CategoryService, private _activatedRoute: ActivatedRoute) {
    this._navService.emitNavMode({ isHide: true });
    const productId = this._activatedRoute.snapshot.params.id;
    this._categoryService.getProductSaleById(productId).subscribe((response: any) => {
      this.product = response.data;
      console.log(response.data);
    });
  }

  ngOnInit() {
  }

  changeTab(index) {
    this.tabIndex = index;
  }

  ngOnDestroy() {
    this._navService.emitNavMode({ isHide: false });
  }

  goToCart() {
    this._router.navigate(['/ios/shopping-cart']);
  }

  back() {
    this._location.back();
  }
  increaseOrderNumber(quantity_step) {
    this.orderNumber += quantity_step;
  }
  decreaseOrderNumber(quantity_step) {
    this.orderNumber = this.orderNumber >= quantity_step ? this.orderNumber - quantity_step : this.orderNumber;
  }
  // increase(quantity_step) {
  //   this.data.quantity+=quantity_step;
  // }
  // decrease(quantity_step) {
  //   this.data.quantity = this.data.quantity <= quantity_step ? this.data.quantity : this.data.quantity-quantity_step;
  // }
  addToCart() {
    // localStorage.setItem(this.product.id, JSON.stringify({ id: this.product.id, quantity: this.orderNumber }));
    let orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      console.log('exist');
      let exist = false;
      for (let index = 0; index < orders.length; index++) {
        if (orders[index].id == this.product.id) {
          orders[index].quantity = this.orderNumber;
          localStorage.setItem('orders', JSON.stringify(orders));
          console.log(orders[index]);
          exist = true;
        }
      }
      if (!exist) {
        orders[orders.length] = { id: this.product.id, quantity: this.orderNumber };
        localStorage.setItem('orders', JSON.stringify(orders));
      }
      else {
      }
      console.log(JSON.parse(localStorage.orders));
    }
    else {
      orders = [];
      orders[0] = { id: this.product.id, quantity: this.orderNumber };
      localStorage.setItem('orders', JSON.stringify(orders));
      console.log(JSON.parse(localStorage.orders));
    }
    this.openAddedToCart();
  }
  openAddedToCart() {
    this.isAddEvent = true;
    setTimeout(() => {
      this.isAddEvent = false;
    }, 1000);
  }
  like() {

  }
}
