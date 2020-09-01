import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProdutoListComponent } from './views/home/produto-list/produto-list.component';
import { PedidoFormComponent } from './views/home/pedido-form/pedido-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produto/:id', component: ProdutoListComponent },
  { path: 'pedido', component: PedidoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
