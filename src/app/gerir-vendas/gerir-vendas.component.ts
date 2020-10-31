import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DialogService } from '../shared/services/dialog/dialog.service'
import { MatDialog } from '@angular/material/dialog';
import { ModalVisualizarPedidoComponent } from '../modais/modal-visualizar-pedido/modal-visualizar-pedido.component';
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
  displayedColumns = ['Cliente', 'Celular', 'Data', 'Valor', 'Situação', 'Ações'];
  expandedElement: ProdutosVendidos | null;

  situacaoPedido = [{ id: 0, nome: 'Cancelado' }, { id: 1, nome: 'Aprovado' }, { id: 2, nome: 'Em trânsito' }];

  constructor(private dialogService: DialogService, public dialog: MatDialog) { }
  ngOnInit() {


  }

  testaDialog() {
    this.dialogService.showSuccess("Deu Bom", "Vendas geridas com sucesso!");
  }

  visualizaPedido(id: number) {

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
  cliente: string;
  celular: string;
  valor: number;
  situacao: number;
  data: Date;
}

const ELEMENT_DATA: ProdutosVendidos[] = [
  {
    cliente: 'Paulo',
    celular: '991543979',
    valor: 79,
    situacao: 1,
    data: new Date()
  },
  {
    cliente: 'Marcos',
    celular: '998454746',
    valor: 79,
    situacao: 2,
    data: new Date()
  },
  {
    cliente: 'Juca',
    celular: '991543979',
    valor: 79,
    situacao: 2,
    data: new Date()
  },
  {
    cliente: 'Xuxa',
    celular: '992297930',
    valor: 79,
    situacao: 1,
    data: new Date()
  },
  {
    cliente: 'Sasha',
    celular: '992297930',
    valor: 79,
    situacao: 1,
    data: new Date()
  },
  {
    cliente: 'Pelé',
    celular: '991543979',
    valor: 79,
    situacao: 1,
    data: new Date()
  },
  {
    cliente: 'Cr7',
    celular: '998454746',
    valor: 79,
    situacao: 1,
    data: new Date()
  },
  {
    cliente: 'Messi',
    celular: '992297930',
    valor: 79,
    situacao: 2,
    data: new Date()
  },
  {
    cliente: 'Ribamar',
    celular: '991543979',
    valor: 79,
    situacao: 1,
    data: new Date()
  }
];

