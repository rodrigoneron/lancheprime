import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CategoriaListComponent } from './views/home/categoria-list/categoria-list.component';
import { ConexaoService } from './shared/service/conexao.service';
import { ProdutoListComponent } from './views/home/produto-list/produto-list.component';
import { PedidoFormComponent } from './views/home/pedido-form/pedido-form.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriaListComponent,
    ProdutoListComponent,
    PedidoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ModalModule.forRoot()
  ],
  providers: [
    ConexaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
