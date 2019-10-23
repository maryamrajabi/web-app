import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/infrastructure/services/category.service';

@Component({
  selector: 'filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent implements OnInit {
  attributes;
  showModal = false;
  constructor(private _categoryService: CategoryService) {
    this._categoryService.getAttributes().subscribe((response: any) => {
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
