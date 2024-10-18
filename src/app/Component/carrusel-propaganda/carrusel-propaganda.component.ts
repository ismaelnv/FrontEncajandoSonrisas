import { Component, Input } from '@angular/core';
import { Propaganda } from 'src/app/Modelo/Propaganda';
import { IImagen } from 'src/app/Modelo/imagen.modelo';

@Component({
  selector: 'app-carrusel-propaganda',
  templateUrl: './carrusel-propaganda.component.html',
  styleUrls: ['./carrusel-propaganda.component.css']
})
export class CarruselPropagandaComponent {

  propagandas: Propaganda[]  = [

    {id: 1, url:"https://cf.shopee.com.my/file/72053caa33fe3fd90b240a93720c8001" },
    {id:2, url:"https://www.banpresto.es/wp-content/uploads/2022/03/fg.jpg" },
    {id:3, url:"https://www.anmosugoi.com/wp-content/uploads/2021/06/anime-portada.jpg" }
  ];

  @Input() indicators = true;
  controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 5000; // cambio de imagen cada 300 segundos

  selectedIndex = 0;
  rutaStatica: string = "http://192.168.1.12:8080/imagenes/";

  ngOnInit(): void {

    if(this.autoSlide){

      this.autoSlideImagenes();
    }
  }

  public autoSlideImagenes(){
    setInterval(() =>{

      this.onNextClick();

    }, this.slideInterval);
  }

  public selectPropaganda(index:number): void{

    this.selectedIndex = index;
  }

  public onPrevClick():void{

    if(this.selectedIndex === 0){

      this.selectedIndex = this.propagandas.length - 1;
    } else{

      this.selectedIndex--;
    }
  }

  public onNextClick(){

    if(this.selectedIndex === this.propagandas.length -1){

      this.selectedIndex = 0;
    }else{

      this.selectedIndex++;
    }
  }
}
