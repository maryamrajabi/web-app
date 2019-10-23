import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactorStateService } from 'src/app/infrastructure/services/factor-state.service';
import { CategoryService } from 'src/app/infrastructure/services/category.service';

@Component({
  selector: 'shoping-bag-page',
  templateUrl: './shoping-bag-page.component.html',
  styleUrls: ['./shoping-bag-page.component.scss']
})
export class ShopingBagPageComponent implements OnInit {
  productOrders;
  constructor(private _router: Router, private _factorStateService: FactorStateService, private _categoryService: CategoryService) {
    this._factorStateService.emitState(0);
    this.productOrders = JSON.parse(localStorage.orders);

  }

  async ngOnInit() {
    // console.log(this.productOrders);
    // for (let index = 0; index < orders.length; index++) {
    //   console.log(orders[index].id);
    //   this._categoryService.getProductSaleById(orders[index].id).subscribe((response: any) => {
    //     this.productOrders.push(response.data);
    //   });
    // }
    this.productOrders = JSON.parse(localStorage.orders);
  }
  goToPreFactor() {
    this._router.navigate(['/ios/shopping-cart/prefactor']);
  }
  onDeleteFactor(id) {
    console.log(id);
    const deletedIndex = this.productOrders.findIndex(x => x.id == id);
    this.productOrders.splice(deletedIndex, 1);
    if(this.productOrders.length==0)
    {
      this._router.navigate
    }
  }
}
