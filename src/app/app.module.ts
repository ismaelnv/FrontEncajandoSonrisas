import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraDeNavegacionComponent } from './Component/barra-de-navegacion/barra-de-navegacion.component';
import { CategoriaComponent } from './Component/categoria/categoria.component';
import { LoginComponent } from './Dialogs/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent, CarouselModule } from 'ngx-owl-carousel-o';
import { CaruselCardsComponent } from './Component/carusel-cards/carusel-cards.component';
import { ListCardsComponent } from './Component/list-cards/list-cards.component';
import { PaginaCategoriaComponent } from './Paginas/pagina-categoria/pagina-categoria.component';
import { PaginaHomeComponent } from './Paginas/pagina-home/pagina-home.component';
import { ProductoComponent } from './Paginas/producto/producto.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdbModalModule, MdbModalService } from 'mdb-angular-ui-kit/modal';


@NgModule({
  declarations: [
    AppComponent,
    BarraDeNavegacionComponent,
    CategoriaComponent,
    LoginComponent,
    CaruselCardsComponent,
    ListCardsComponent,
    PaginaCategoriaComponent,
    PaginaHomeComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    NoopAnimationsModule,
    MdbModalModule
  ],
  providers: [MdbModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
