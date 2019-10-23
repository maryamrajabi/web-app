import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/infrastructure/services/category.service';

@Component({
  selector: 'prefactor',
  templateUrl: './prefactor.component.html',
  styleUrls: ['./prefactor.component.scss']
})
export class PrefactorComponent implements OnInit {
  @Input() data;
  product;
  constructor(private _categoryService: CategoryService) {

  }

  ngOnInit() {
    this._categoryService.getProductSaleById(this.data.id).subscribe((response: any) => {
      this.product = response.data;
      // this.amount=this.product.amount*this.data.quantity;
    });
  }

}
