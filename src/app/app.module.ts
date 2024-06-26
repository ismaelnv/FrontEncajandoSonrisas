import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraDeNavegacionComponent } from './Component/barra-de-navegacion/barra-de-navegacion.component';
import { CategoriaComponent } from './Component/categoria/categoria.component';
import { LoginComponent } from './Dialogs/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ListCardsComponent } from './Component/list-cards/list-cards.component';
import { PaginaCategoriaComponent } from './Paginas/pagina-categoria/pagina-categoria.component';
import { PaginaHomeComponent } from './Paginas/pagina-home/pagina-home.component';
import { ProductoComponent } from './Paginas/producto/producto.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdbModalModule, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ListCategoriaComponent } from './Component/list-categoria/list-categoria.component';
import { RegistroComponent } from './Dialogs/registro/registro.component';
import { CarouselProductoModule } from './Component/carousel-producto/carousel-producto.module';
import { SobreNosotrosComponent } from './Component/sobre-nosotros/sobre-nosotros.component';
import { CarruselPropagandaComponent } from './Component/carrusel-propaganda/carrusel-propaganda.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraDeNavegacionComponent,
    CategoriaComponent,
    LoginComponent,
    ListCardsComponent,
    PaginaCategoriaComponent,
    PaginaHomeComponent,
    ProductoComponent,
    ListCategoriaComponent,
    RegistroComponent,
    SobreNosotrosComponent,
    CarruselPropagandaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    NoopAnimationsModule,
    MdbModalModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    CarouselProductoModule
  ],
  providers: [MdbModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
