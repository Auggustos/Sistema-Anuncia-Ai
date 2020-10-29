import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
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
  displayedColumns = ['Cliente', 'Valor','Quantidade', 'Status'];
  expandedElement: ProdutosVendidos | null;
  statusPedido = [{id: 0, nome: 'Cancelado'},{id: 1, nome: 'Aprovado'},{ id: 2, nome: 'Em trânsito'}];
  ngOnInit(){


  }
}

export interface ProdutosVendidos {
  nome: string;
  valor: number;
  quantidade: number;
  status: number;
  }
const ELEMENT_DATA: ProdutosVendidos[] = [
  {
    nome: 'bola',
    valor: 79,
    quantidade: 3,
    status:1
  },
  {
    nome: 'bola',
    valor: 79,
    quantidade: 3,
    status:2
  },
  {
    nome: 'bola',
    valor: 79,
    quantidade: 3,
    status:2
  },
  {
    nome: 'bola',
    valor: 79,
    quantidade: 3,
    status:1
  },
  {
    nome: 'bola',
    valor: 79,
    quantidade: 3,
    status:1
  },
  {
    nome: 'bola',
    valor: 79,
    quantidade: 3,
    status:1
  },
  {
    nome: 'bola',
    valor: 79,
    quantidade: 3,
    status:1
  },
  {
    nome: 'bola',
    valor: 79,
    quantidade: 3,
    status:2
  },
  {
    nome: 'bola',
    valor: 79,
    quantidade: 3,
    status:1
  }
];

