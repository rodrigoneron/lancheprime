import { ModalComponent } from './../../../shared/modal/modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConexaoService } from '../../../shared/service/conexao.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  delay } from 'rxjs/operators';

import {Categoria} from '../categoria-list/categorias'
import { Produtos } from '../produto-list/produtos'


@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  quantidade: number = 1;
  pedido: {};
  valorTotal: number = 0;

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService, private conexaoService: ConexaoService) {

   }

  ngOnInit(): void {
    this.listaTodosProdutos();    
  }

  listaTodosProdutos(){
    let s = [];
    for (let i = 0; i < localStorage.length; i++) {
      s.push({
        key: localStorage.key(i),
        value: JSON.parse(localStorage.getItem(localStorage.key(i)))
      });
    }    
    this.pedido = s;
    this.calculaValorTotal();
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
    this.listaTodosProdutos();
  }
  removeProduto(produto){
    let produtoExistente = JSON.parse(localStorage.getItem(produto.id))
    if( produtoExistente != null){
      produtoExistente.quantidade -= 1;
      produtoExistente.total = (produtoExistente.quantidade * produtoExistente.preco);
      localStorage.setItem(produtoExistente.id , JSON.stringify(produtoExistente))
      if( produtoExistente.quantidade < 1) localStorage.removeItem(produtoExistente.id)
    }
    this.listaTodosProdutos();
  }
  goBack(){
    window.history.back();
    }  

    finalizarPedido(){
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.bsModalRef.content.type = 'sucess';
    this.bsModalRef.content.message = 'Pedido Finalizado com sucesso!';
    localStorage.clear();
    this.listaTodosProdutos();
    /* delay(5000);
    window.location.href = "/"; */
    }

    calculaValorTotal(){
      let valor = 0;
      Object(this.pedido).forEach(function(item){
        valor += item.value.total;
      });
       this.valorTotal = valor
    }
}
