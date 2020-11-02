import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DialogService } from '../shared/services/dialog/dialog.service'
import { MatDialog } from '@angular/material/dialog';
import { ModalVisualizarPedidoComponent } from '../modais/modal-visualizar-pedido/modal-visualizar-pedido.component';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { PedidoProduto } from '../classes/pedidoProduto.class';
import { Usuario } from '../classes/usuario.class';

export interface Vendas {
  criado_em: Date,
  id: string,
  pedido_produtos: PedidoProduto[],
  status: number,
  usuario: Usuario,
  valor_final: number,
}
let ELEMENT_DATA: Vendas[] = [];

@Component({
  selector: 'app-gerir-vendas',
  templateUrl: './gerir-vendas.component.html',
  styleUrls: ['./gerir-vendas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class GerirVendasComponent implements OnInit {
  situacaoSelecionada = 0;
  dataSource = ELEMENT_DATA;
  displayedColumns = ['Cliente', 'Celular', 'Data', 'Valor', 'Ações'];
  expandedElement: ProdutosVendidos | null;

  situacaoPedido = [{ id: 0, nome: 'Cancelado' }, { id: 1, nome: 'Aprovado' }, { id: 2, nome: 'Em trânsito' }];

  constructor(private apiService: ApiService, private authService: AuthService, private dialogService: DialogService, private router: Router,
    public dialog: MatDialog) { }
  ngOnInit() {
    let vendas: Vendas[] = [];
    this.apiService.getVendas(this.authService.token).subscribe(response => {
      vendas = response;
      ELEMENT_DATA = response;
      this.atualizaTabela();
    }, error => {
      this.dialogService.showError(`Erro ao obter dados das vendas`, "Erro!")
    })

  }

  testaDialog() {
    this.dialogService.showSuccess("Deu Bom", "Vendas geridas com sucesso!");
  }

  visualizaPedido(pedidoProdutos: PedidoProduto) {

    this.dialog.open(ModalVisualizarPedidoComponent, {
      width: '70%',
      height: '601px',
      data: {
        pedidoProdutos: pedidoProdutos,
        vendedor: true,
      }
    });
  }
  goBack() {
    window.history.back();
  }
  atualizaTabela() {
    this.dataSource = ELEMENT_DATA;
  }

}


export interface ProdutosVendidos {
  cliente: string;
  celular: string;
  valor: number;
  situacao: number;
  data: Date;
}



