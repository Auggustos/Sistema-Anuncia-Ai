import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DialogService } from '../shared/services/dialog/dialog.service'
import { MatDialog } from '@angular/material/dialog';
import { ModalVisualizarPedidoComponent } from '../modais/modal-visualizar-pedido/modal-visualizar-pedido.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  situacaoSelecionada = 0;
  dataSource = ELEMENT_DATA;
  displayedColumns = ['Vendedor', 'Data', 'Valor', 'Situação', 'Ações'];
  expandedElement: ProdutosVendidos | null;

  situacaoPedido = [{ id: 0, nome: 'Cancelado' }, { id: 1, nome: 'Aprovado' }, { id: 2, nome: 'Em trânsito' }];

  constructor(private dialogService: DialogService, public dialog: MatDialog) { }
  ngOnInit() {


  }

  testaDialog() {
    this.dialogService.showSuccess("Deu Bom", "Vendas geridas com sucesso!");
  }

  visualizaPedido(id: number) {
    console.log(id);
    this.dialog.open(ModalVisualizarPedidoComponent, {
      width: '70%',
      height: '601px',
      data: {
        idPedido: id,
      }
    });
  }
  goBack() {
    window.history.back();
  }

}


export interface ProdutosVendidos {
  vendedor: string;
  valor: number;
  situacao: number;
  data: Date;
}

const ELEMENT_DATA: ProdutosVendidos[] = [
  {
    vendedor: 'Paulo',
    valor: 79,
    situacao: 1,
    data: new Date()
  },
  {
    vendedor: 'Marcos',
    valor: 79,
    situacao: 2,
    data: new Date()
  },
  {
    vendedor: 'Juca',
    valor: 79,
    situacao: 2,
    data: new Date()
  },
  {
    vendedor: 'Xuxa',
    valor: 79,
    situacao: 1,
    data: new Date()
  },
  {
    vendedor: 'Sasha',
    valor: 79,
    situacao: 1,
    data: new Date()
  },
  {
    vendedor: 'Pelé',
    valor: 79,
    situacao: 1,
    data: new Date()
  },
  {
    vendedor: 'Cr7',
    valor: 79,
    situacao: 1,
    data: new Date()
  },
  {
    vendedor: 'Messi',
    valor: 79,
    situacao: 2,
    data: new Date()
  },
  {
    vendedor: 'Ribamar',
    valor: 79,
    situacao: 1,
    data: new Date()
  }
];

