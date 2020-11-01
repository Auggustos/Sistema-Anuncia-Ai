import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';
import { DialogService } from '../shared/services/dialog/dialog.service';

export interface Transaction {
  id: string,
  item: string,
  cost: number,
  quantidade: number
}
const ELEMENT_DATA: Transaction[] = [];

export interface Carrinho {
  produtoId: string,
  idCliente: string,
  preco: number,
  quantidade: number,
  nome: string,
}

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  displayedColumns: string[] = ['item', 'preco', 'quantidade', 'acao'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    let valorNota = 0;
    ELEMENT_DATA.forEach(
      produto => {
        valorNota += produto.cost * produto.quantidade;
      }
    );
    return valorNota;
  }
  carrinho: Carrinho[] = []
  constructor(private apiService: ApiService, private authService: AuthService, private dialogService: DialogService, private router: Router) { }

  ngOnInit(): void {
    //this.badge.emit({valor: ELEMENT_DATA.length});
    if (this.authService.getCarrinho()) {
      let carrinhoAux = JSON.parse(this.authService.getCarrinho());
      if (carrinhoAux.length > 0) {
        carrinhoAux.forEach(produto => {
          var item: { id: string, item: string, cost: number, quantidade: number } = { id: '', item: '', cost: 0, quantidade: 0 };
          item.item = produto.nome;
          item.cost = produto.preco;
          item.id = produto.produtoId;
          item.quantidade = produto.quantidade;

          ELEMENT_DATA.push(item);
        })
        this.dataSource.data = ELEMENT_DATA;
      } else {

      }
    }
  }
  goBack() {
    window.history.back();
  }
  removeItem(idItem) {
    ELEMENT_DATA.forEach(
      produto => {
        if (produto.id == idItem) {
          ELEMENT_DATA.splice(ELEMENT_DATA.indexOf(produto), 1)
        }
      }
    )
    this.dataSource.data = ELEMENT_DATA;
    this.authService.limpaCarrinho();
    ELEMENT_DATA.forEach(
      produto => {
        this.carrinho.push({ produtoId: produto.id, idCliente: this.authService.getUserId(), preco: produto.cost, quantidade: produto.quantidade,nome:produto.item });
      }
    )
    var textoCarrinho = JSON.stringify(this.carrinho);
    this.authService.setCarrinho(textoCarrinho);
    location.reload();
  }

  finalizaCompra() {
    console.log(ELEMENT_DATA.length);
  }

  limpaCarrinho() {
    this.authService.limpaCarrinho();
    location.reload();
  }
  atualizaPreco() {
    this.dataSource.data = ELEMENT_DATA;
  }

  adiciona(idItem) {
    ELEMENT_DATA.forEach(
      produto => {
        if (produto.id == idItem) {
          produto.quantidade++;
        }
      }
    )
    this.dataSource.data = ELEMENT_DATA;
    this.authService.limpaCarrinho();
    ELEMENT_DATA.forEach(
      produto => {
        this.carrinho.push({ produtoId: produto.id, idCliente: this.authService.getUserId(), preco: produto.cost, quantidade: produto.quantidade,nome:produto.item });
      }
    )
    var textoCarrinho = JSON.stringify(this.carrinho);
    this.authService.setCarrinho(textoCarrinho);
    location.reload();
  }
  remove(idItem) {
    ELEMENT_DATA.forEach(
      produto => {
        if (produto.id == idItem) {
          if (produto.quantidade > 1) {
            produto.quantidade--;
          } else {
            ELEMENT_DATA.splice(ELEMENT_DATA.indexOf(produto), 1)
          }
        }
      }
    )
    this.dataSource.data = ELEMENT_DATA;
    this.authService.limpaCarrinho();
    ELEMENT_DATA.forEach(
      produto => {
        this.carrinho.push({ produtoId: produto.id, idCliente: this.authService.getUserId(), preco: produto.cost, quantidade: produto.quantidade,nome:produto.item });
      }
    )
    var textoCarrinho = JSON.stringify(this.carrinho);
    this.authService.setCarrinho(textoCarrinho);
    location.reload();
  }
}
