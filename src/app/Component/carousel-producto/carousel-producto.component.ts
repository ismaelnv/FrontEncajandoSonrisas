import { Component, Input, OnInit } from '@angular/core';
import { IImagen } from 'src/app/Modelo/imagen.modelo';

@Component({
  selector: 'app-carousel-producto',
  templateUrl: './carousel-producto.component.html',
  styleUrls: ['./carousel-producto.component.css']
})
export class CarouselProductoComponent{
 
  @Input() imagenes: IImagen[] = [];
  @Input() indicators = true;
  controls = true;

  selectedIndex = 0;

  public selectImage(index:number): void{

    this.selectedIndex = index;
  }

  public onPrevClick():void{

    if(this.selectedIndex === 0){

      this.selectedIndex = this.imagenes.length - 1;
    } else{

      this.selectedIndex--;
    }
  }

  public onNextClick(){
    
    if(this.selectedIndex === this.imagenes.length -1){
      
      this.selectedIndex = 0;
    }else{

      this.selectedIndex++;
    }
  }
}


