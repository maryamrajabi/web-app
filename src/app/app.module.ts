import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IosComponent } from './ios/ios.component';
import { IosHomeComponent } from './ios/ios-home/ios-home.component';
import { AppRoutingModule } from './app-routing.module';
import { IosNavComponent } from './ios/ios-nav/ios-nav.component';
import { AndroidComponent } from './android/android.component';
import { AndroidHomeComponent } from './android/android-home/android-home.component';
import { AndroidNavComponent } from './android/android-nav/android-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './material.module';
import { CategoryItemComponent } from './android/android-home/category-item/category-item.component';
import { CategoryMoreItemComponent } from './android/android-home/category-more-item/category-more-item.component';
import { IosModule } from './ios/ios.module';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
   
    AndroidComponent,
    AndroidHomeComponent,
    AndroidNavComponent,
    CategoryItemComponent,
    CategoryMoreItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IosModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MyOwnCustomMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
