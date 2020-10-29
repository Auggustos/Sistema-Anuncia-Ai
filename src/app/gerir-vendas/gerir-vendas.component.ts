import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import{ DialogService } from '../shared/services/dialog/dialog.service'
@Component({
  selector: 'app-gerir-vendas',
  templateUrl: './gerir-vendas.component.html',
  styleUrls: ['./gerir-vendas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GerirVendasComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  displayedColumns = ['Cliente','Data', 'Valor','Situação','Ações'];
  expandedElement: ProdutosVendidos | null;
  situacaoPedido = [{id: 0, nome: 'Cancelado'},{id: 1, nome: 'Aprovado'},{ id: 2, nome: 'Em trânsito'}];

  constructor(private dialogService: DialogService){ }
  ngOnInit(){


  }

  testaDialog(){
    this.dialogService.showSuccess("Deu Bom","Vendas geridas com sucesso!");
  }

  visualizaPedido(id: number){
    console.log(id);

  }

}

export interface ProdutosVendidos {
  cliente: string;
  valor: number;
  situacao: number;
  data: Date;
  }
const ELEMENT_DATA: ProdutosVendidos[] = [
  {
    cliente: 'bola',
    valor: 79,
    situacao:1,
    data: new Date()
  },
  {
    cliente: 'bola',
    valor: 79,
    situacao:2,
    data: new Date()
  },
  {
    cliente: 'bola',
    valor: 79,
    situacao:2,
    data: new Date()
  },
  {
    cliente: 'bola',
    valor: 79,
    situacao:1,
    data: new Date()
  },
  {
    cliente: 'bola',
    valor: 79,
    situacao:1,
    data: new Date()
  },
  {
    cliente: 'bola',
    valor: 79,
    situacao:1,
    data: new Date()
  },
  {
    cliente: 'bola',
    valor: 79,
    situacao:1,
    data: new Date()
  },
  {
    cliente: 'bola',
    valor: 79,
    situacao:2,
    data: new Date()
  },
  {
    cliente: 'bola',
    valor: 79,
    situacao:1,
    data: new Date()
  }
];

