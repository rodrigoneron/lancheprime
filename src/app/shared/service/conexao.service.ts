import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from './../../../environments/environment.prod';

import { Categoria } from './../../views/home/categoria-list/categorias';
import { Produtos } from './../../views/home/produto-list/produtos';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {

  private readonly categoriaUrl = `${environment.API}categories`;

  produtoUrl = `${environment.API}products`;


  constructor(private http: HttpClient) { }

  listCategoria() {
    return this.http.get<Categoria[]>(`${this.categoriaUrl}`)
    .pipe(
      tap(console.log)
    );
  }

  listProdutoCategoriaId(id) {
    return this.http.post<Produtos[]>(`${this.produtoUrl }`,{category:id})
    .pipe(
      tap(console.log)
    );
  }

}
