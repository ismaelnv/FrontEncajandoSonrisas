import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselProductoComponent } from './carousel-producto.component';



@NgModule({
  declarations: [
    CarouselProductoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselProductoComponent
  ]
})
export class CarouselProductoModule { }
