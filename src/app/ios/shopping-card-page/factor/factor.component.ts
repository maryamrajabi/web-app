import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/infrastructure/services/category.service';

@Component({
  selector: 'factor',
  templateUrl: './factor.component.html',
  styleUrls: ['./factor.component.scss']
})
export class FactorComponent implements OnInit {
  // amount = 1;
  @Input() data;
  product;
  arr = [1, 2, 3];
  // amount=0;
  @Output() onDelete = new EventEmitter<any>();
  constructor(private _categoryService: CategoryService) {

  }

  ngOnInit() {
    this._categoryService.getProductSaleById(this.data.id).subscribe((response: any) => {
      this.product = response.data;
      // this.amount=this.product.amount*this.data.quantity;
    });
  }
  increase(quantity_step) {
    this.data.quantity += quantity_step;
  }
  decrease(quantity_step) {
    this.data.quantity = this.data.quantity <= quantity_step ? this.data.quantity : this.data.quantity - quantity_step;
  }
  deleteFactor() {
    const index = JSON.parse(localStorage.orders).findIndex(x => x.id == this.data.id);
    let orders = JSON.parse(localStorage.orders);
    orders.splice(index, 1);
    console.log(orders);
    localStorage.setItem('orders', JSON.stringify(orders));
    this.onDelete.emit(this.data.id);
  }
}
