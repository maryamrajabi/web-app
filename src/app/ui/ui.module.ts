import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { CategorySliderComponent } from './category-slider/category-slider.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { IosCategoryMainItemComponent } from './ios-category-main-item/ios-category-main-item.component';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { IosCheckboxComponent } from './ios-checkbox/ios-checkbox.component';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { FilterRadioComponent } from './filter-radio/filter-radio.component';
import { FormsModule } from '@angular/forms';
import { ProductListSliderComponent } from './product-list-slider/product-list-slider.component';

@NgModule({
  declarations: [
    TabsComponent,
    TabListComponent,
    CategorySliderComponent,
    IosCategoryMainItemComponent,
    ToggleBtnComponent,
    FilterListComponent,
    IosCheckboxComponent,
    FilterInputComponent,
    FilterRadioComponent,
    ProductListSliderComponent,
  ],
  imports: [
    CommonModule,
    DragScrollModule,
    FormsModule
  ],
  exports: [
    TabListComponent,
    CategorySliderComponent,
    IosCategoryMainItemComponent,
    ToggleBtnComponent,
    FilterListComponent,
    IosCheckboxComponent,
    FilterInputComponent,
    FilterRadioComponent,
    ProductListSliderComponent
  ]
})
export class UiModule { }
