import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IosComponent } from './ios.component';
import { IosHomeComponent } from './ios-home/ios-home.component';
import { IosNavComponent } from './ios-nav/ios-nav.component';
import { IosRoutingModule } from './ios-routing.module';
import { UiModule } from '../ui/ui.module';
import { IosCategoryPageComponent } from './ios-category-page/ios-category-page.component';
import { CategoryListItemComponent } from './ios-category-page/category-list-item/category-list-item.component';
import { IosProfileComponent } from './ios-profile/ios-profile.component';
import { IosTrackingOrdersPageComponent } from './ios-tracking-orders-page/ios-tracking-orders-page.component';
import { IosSearchPageComponent } from './ios-search-page/ios-search-page.component';
import { FilterModalComponent } from './ios-category-page/filter-modal/filter-modal.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductComponent } from './product-list-page/product/product.component';
import { ShopGComponent } from './ios-category-page/shop-g/shop-g.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ShoppingCardPageComponent } from './shopping-card-page/shopping-card-page.component';
import { FactorComponent } from './shopping-card-page/factor/factor.component';
import { FormsModule } from '@angular/forms';
import { FactorSteperComponent } from './shopping-card-page/factor-steper/factor-steper.component';
import { PrefactorPageComponent } from './shopping-card-page/prefactor-page/prefactor-page.component';
import { ShopingBagPageComponent } from './shopping-card-page/shoping-bag-page/shoping-bag-page.component';
import { PrefactorComponent } from './shopping-card-page/prefactor-page/prefactor/prefactor.component';
import { PrepaymentPageComponent } from './shopping-card-page/prepayment-page/prepayment-page.component';
import { ProductFilterModalComponent } from './product-list-page/product-filter-modal/product-filter-modal.component';
import { AfterpaymentComponent } from './shopping-card-page/afterpayment/afterpayment.component';
import { EmptyBagComponent } from './shopping-card-page/empty-bag/empty-bag.component';
import { IosSearchComponent } from './ios-search/ios-search.component';
import { IosTrackingOrderPageNComponent } from './ios-tracking-order-page-n/ios-tracking-order-page-n.component';

@NgModule({
  declarations: [
    IosComponent,
    IosHomeComponent,
    IosNavComponent,
    IosCategoryPageComponent,
    CategoryListItemComponent,
    IosProfileComponent,
    IosTrackingOrdersPageComponent,
    IosSearchPageComponent,
    FilterModalComponent,
    ProductListPageComponent,
    ProductComponent,
    ShopGComponent,
    ProductDetailPageComponent,
    ShoppingCardPageComponent,
    FactorComponent,
    FactorSteperComponent,
    PrefactorPageComponent,
    ShopingBagPageComponent,
    PrefactorComponent,
    PrepaymentPageComponent,
    ProductFilterModalComponent,
    AfterpaymentComponent,
    EmptyBagComponent,
    IosSearchComponent,
    IosTrackingOrderPageNComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    IosRoutingModule,
    FormsModule
  ],
  exports: [
    IosComponent,
    IosHomeComponent,
    IosNavComponent,
    IosCategoryPageComponent,
    IosRoutingModule
  ]
})
export class IosModule { }
