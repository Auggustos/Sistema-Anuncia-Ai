import { Component, OnInit } from '@angular/core';
import { Produto } from './classes/produto.class';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent implements OnInit {

  constructor() { }
  produtos: Produto[] = [];

  showFiller = false;

  itensSidebar: string[] = ['Meus dados', 'Minhas compras'];

  ngOnInit(): void {
    this.produtos = [
      { id: 1, nome: "bola", descricao: "bola de mama", preco: 150, imagem: "xesquedele", id_usuario: 1, quantidade: 2 },
      { id: 2, nome: "xupeta", descricao: "xupetinha de mel", preco: 25, imagem: "hmmmxupetinha", id_usuario: 1, quantidade: 5 },
      { id: 3, nome: "faca", descricao: "faca do michael mayers", preco: 500, imagem: "facadona", id_usuario: 2, quantidade: 5 },
    ]
  }


}
