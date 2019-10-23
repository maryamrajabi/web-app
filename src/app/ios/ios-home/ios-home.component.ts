import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeSliderService } from 'src/app/infrastructure/services/home-slider.service';
import { CategoryService } from 'src/app/infrastructure/services/category.service';
import { NavService } from 'src/app/infrastructure/services/nav.service';

@Component({
  selector: 'app-ios-home',
  templateUrl: './ios-home.component.html',
  styleUrls: ['./ios-home.component.scss']
})
export class IosHomeComponent implements OnInit {
  tabs = [
    {
      text: 'همه دسته بندی ها',
      active: true,
    },
    {
      text: 'پرفروش ترین محصولات',
      active: false
    }
  ];
  slider = [];
  firstCategory;
  constructor(private _router: Router, private _homeSliderService: HomeSliderService, private _categoryService: CategoryService, private _navService: NavService) {
    this._homeSliderService.index().subscribe((response: any) => {

      this.slider = response.data.map(image => image.photo_primary_rectangle);
      console.log(this.slider);
    });
    this._categoryService.getFirstCategories().subscribe((response: any) => {
      this.firstCategory = response.data.slice(0, 5);
    });
    this._navService.emitNavMode({ isHide: false });

  }

  ngOnInit() {
  }

  goToLink(link) {
    this._router.navigate([link]);
  }
}
