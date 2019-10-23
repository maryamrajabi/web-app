import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IosComponent } from './ios.component';
import { IosHomeComponent } from './ios-home/ios-home.component';
import { IosCategoryPageComponent } from './ios-category-page/ios-category-page.component';
import { IosProfileComponent } from './ios-profile/ios-profile.component';
import { IosTrackingOrdersPageComponent } from './ios-tracking-orders-page/ios-tracking-orders-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ShoppingCardPageComponent } from './shopping-card-page/shopping-card-page.component';
import { PrefactorPageComponent } from './shopping-card-page/prefactor-page/prefactor-page.component';
import { ShopingBagPageComponent } from './shopping-card-page/shoping-bag-page/shoping-bag-page.component';
import { PrepaymentPageComponent } from './shopping-card-page/prepayment-page/prepayment-page.component';
import { AfterpaymentComponent } from './shopping-card-page/afterpayment/afterpayment.component';
import { IosSearchComponent } from './ios-search/ios-search.component';
import { IosSearchPageComponent } from './ios-search-page/ios-search-page.component';
import { IosTrackingOrderPageNComponent } from './ios-tracking-order-page-n/ios-tracking-order-page-n.component';

const routes: Routes = [
  {
    path: 'ios',
    component: IosComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: IosHomeComponent
      },
      {
        path: 'category',
        component: IosCategoryPageComponent,
        data: { animation: 'isRight' }
      },
      {
        path: 'profile',
        component: IosProfileComponent,
        data: { animation: 'isLeft' }
      },
      {
        path:'search',
        component:IosSearchPageComponent
      },
      {
        path: 'tracking-orders',
        component: IosTrackingOrderPageNComponent,
        data: { animation: 'isRight' }
      },
      {
        path: 'product-list',
        component: ProductListPageComponent
      },
      {
        path: 'product-detail',
        component: ProductDetailPageComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCardPageComponent,
        children: [
          {
            path: '',
            redirectTo: 'shopping-bag',
            pathMatch: 'full'
          },
          {
            path: 'shopping-bag',
            component: ShopingBagPageComponent
          },
          {
            path: 'prefactor',
            component: PrefactorPageComponent
          },
          {
            path: 'prepayment',
            component: PrepaymentPageComponent
          },
          {
            path: 'afterpayment',
            component: AfterpaymentComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class IosRoutingModule { }
