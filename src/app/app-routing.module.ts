import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IosComponent } from './ios/ios.component';
import { IosHomeComponent } from './ios/ios-home/ios-home.component';
import { AndroidComponent } from './android/android.component';
import { AndroidHomeComponent } from './android/android-home/android-home.component';
import { IosCategoryPageComponent } from './ios/ios-category-page/ios-category-page.component';

const routes: Routes = [
  // {
  //   path: 'ios', component: IosComponent,
  //   children: [
  //     { path: '', redirectTo: 'home', pathMatch: 'full' },
  //     { path: 'home', component: IosHomeComponent },
  //     { path: 'category', component: IosCategoryPageComponent }
  //   ]
  // },
  {
    path: 'android', component: AndroidComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AndroidHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
