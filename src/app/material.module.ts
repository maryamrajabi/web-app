import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatRippleModule} from '@angular/material/core';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,DragDropModule,MatRippleModule],
  exports: [MatButtonModule, MatCheckboxModule,DragDropModule,MatRippleModule],
})
export class MyOwnCustomMaterialModule { }