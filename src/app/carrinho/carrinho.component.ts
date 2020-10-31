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
    return ELEMENT_DATA.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  constructor(private apiService: ApiService, private authService: AuthService, private dialogService: DialogService, private router: Router) { }

  ngOnInit(): void {
    //this.badge.emit({valor: ELEMENT_DATA.length});
    if (this.authService.getCarrinho()) {
      console.log(JSON.parse(this.authService.getCarrinho()));
      let carrinhoAux = JSON.parse(this.authService.getCarrinho());
      if (carrinhoAux.length > 0) {
        carrinhoAux.forEach(produto => {
          var item: { id: string, item: string, cost: number, quantidade: number } = { id: '', item: '', cost: 0,quantidade:0 };
          item.item = produto.produtoId;
          item.cost = produto.preco;
          item.id = produto.produtoId;
          item.quantidade = produto.quantidade;

          ELEMENT_DATA.push(item);
        })
        this.dataSource.data = ELEMENT_DATA;
      } else {

      }


    }

    //JSON.parse(this.authService.getCarrinho()).forEach(
    // produtos =>{

    // }
    //)
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

  }

  finalizaCompra() {
    console.log(ELEMENT_DATA.length);
  }

  limpaCarrinho(){
    this.authService.limpaCarrinho();
    location.reload();
  }
}
