import { Component, OnInit } from '@angular/core';
import { ConexaoService } from '../../../shared/service/conexao.service';
import { Observable } from 'rxjs';

import { Produtos } from './../produto-list/produtos';
import { Categoria } from './categorias';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  //categorias: Categoria[];
  categoria$: Observable<Categoria[]>;

  constructor(private conexaoService: ConexaoService) { }

  ngOnInit(): void {
    this.categoria$ = this.conexaoService.listCategoria();
  }

    goBack(){
    window.history.back();
    }  
    exibirPedido(){
      window.location.href = "/pedido";
    }
  
}
