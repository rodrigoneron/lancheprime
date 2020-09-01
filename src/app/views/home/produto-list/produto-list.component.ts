import { ModalComponent } from './../../../shared/modal/modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Produtos } from './produtos';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ConexaoService } from '../../../shared/service/conexao.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produto$: Observable<Produtos[]>;
  id: string;
  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private conexaoService: ConexaoService,
    private route: ActivatedRoute
    ) { 
      this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.produto$ = this.conexaoService.listProdutoCategoriaId(this.id);
  }

  adicionaProduto(produto){
    let produtoExistente = JSON.parse(localStorage.getItem(produto.id))
    if( produtoExistente != null){
      produtoExistente.quantidade += 1;
      produtoExistente.total = (produtoExistente.quantidade * produtoExistente.preco);
      localStorage.setItem(produtoExistente.id , JSON.stringify(produtoExistente))
    }else{
      produto.quantidade = 1;
      produto.total = produto.preco;
      localStorage.setItem(produto.id , JSON.stringify(produto))
    }
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.bsModalRef.content.type = 'info';
    this.bsModalRef.content.message = 'Produto foi adicionado ao pedido';
  }

  goBack(){
    window.history.back();
    }  

    exibirPedido(){
      window.location.href = "/pedido";
    }

    
}
