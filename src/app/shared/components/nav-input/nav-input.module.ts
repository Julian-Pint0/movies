import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavInputComponent } from './nav-input.component';



@NgModule({
  declarations: [
    NavInputComponent
  ],
  exports: [
    NavInputComponent
  ],
  imports: [
    CommonModule
  ],

})
export class NavInputModule { }
