import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DialogService } from '../shared/services/dialog/dialog.service'
import { MatDialog } from '@angular/material/dialog';
import { ModalVisualizarPedidoComponent } from '../modais/modal-visualizar-pedido/modal-visualizar-pedido.component';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { Pedido } from '../classes/Pedido.class';
import { PedidoProduto } from '../classes/pedidoProduto.class';

export interface ProdutosVendidos {
  pedido: string;
  valor: number;
  situacao: string;
  data: Date;
}

let ELEMENT_DATA: Pedido[] = []

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  situacaoSelecionada = 0;
  dataSource = ELEMENT_DATA;
  displayedColumns = ['Pedido', 'Data', 'Valor', 'Situação', 'Ações'];
  expandedElement: ProdutosVendidos | null;
  constructor(private apiService: ApiService, private authService: AuthService, private dialogService: DialogService, private router: Router,
    public dialog: MatDialog) { }
  ngOnInit() {
    this.montaTabela();
  }

  testaDialog() {
    this.dialogService.showSuccess("Deu Bom", "Vendas geridas com sucesso!");
  }

  visualizaPedido(pedidoProduto: PedidoProduto) {

    this.dialog.open(ModalVisualizarPedidoComponent, {
      width: '70%',
      height: '601px',
      data: {
        pedidoProduto: pedidoProduto,
      }
    });
  }
  goBack() {
    window.history.back();
  }

  montaTabela() {
    let valor =  0;
    let dadosTabela : Pedido[] = []
    this.apiService.getPedidos(this.authService.token).subscribe(response => {
      dadosTabela = response;
      console.log(dadosTabela)
      ELEMENT_DATA = dadosTabela;
      this.atualizaTabela();     

    }, error => {
      this.dialogService.showError("Erro ao obter dados dos pedidos!","Erro");
    });
  }
  atualizaTabela() {
    this.dataSource = ELEMENT_DATA;
  }

}





