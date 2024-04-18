import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaCategoriaComponent } from './Paginas/pagina-categoria/pagina-categoria.component';
import { PaginaHomeComponent } from './Paginas/pagina-home/pagina-home.component';
import { ProductoComponent } from './Paginas/producto/producto.component';

const routes: Routes = [

  { path:'categoria', component:PaginaCategoriaComponent },
  { path:'producto/:id',component:ProductoComponent},
  { path:'', component:PaginaHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
