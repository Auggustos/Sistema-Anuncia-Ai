import { Component, OnInit } from '@angular/core';

export interface ItemPedido {
  nome: string,
  descricao: string,
  valor: number,
  quantidade: number,
}

@Component({
  selector: 'app-modal-visualizar-pedido',
  templateUrl: './modal-visualizar-pedido.component.html',
  styleUrls: ['./modal-visualizar-pedido.component.css']
})
export class ModalVisualizarPedidoComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  displayedColumns = ['Nome', 'Descrição', 'Valor', 'Quantidade'];

  constructor() { }



  ngOnInit(): void { }

  goBack() {
    window.history.back();
  }

}

const ELEMENT_DATA: ItemPedido[] = [
  { nome: 'Colher de madeira', descricao: 'Colher de madeira pra vc fazer um acomindinha hmmmmmm', valor: 5, quantidade: 1 },
  { nome: 'Camiseta lisa', descricao: 'Camiseta lisa pra ir nos bailes da familia', valor: 25, quantidade: 2 },
  { nome: 'Piru de Borracha', descricao: 'Piruzao 45cm ', valor: 50, quantidade: 2 },
  { nome: 'Colher de madeira', descricao: 'Colher de madeira pra vc fazer um acomindinha hmmmmmm', valor: 5, quantidade: 1 },
  { nome: 'Camiseta lisa', descricao: 'Camiseta lisa pra ir nos bailes da familia', valor: 25, quantidade: 2 },
  { nome: 'Piru de Borracha', descricao: 'Piruzao 45cm ', valor: 50, quantidade: 2 },
  { nome: 'Colher de madeira', descricao: 'Colher de madeira pra vc fazer um acomindinha hmmmmmm', valor: 5, quantidade: 1 },
  { nome: 'Camiseta lisa', descricao: 'Camiseta lisa pra ir nos bailes da familia', valor: 25, quantidade: 2 },
  { nome: 'Piru de Borracha', descricao: 'Piruzao 45cm ', valor: 50, quantidade: 2 },
  { nome: 'Colher de madeira', descricao: 'Colher de madeira pra vc fazer um acomindinha hmmmmmm', valor: 5, quantidade: 1 },
  { nome: 'Camiseta lisa', descricao: 'Camiseta lisa pra ir nos bailes da familia', valor: 25, quantidade: 2 },
  { nome: 'Piru de Borracha', descricao: 'Piruzao 45cm ', valor: 50, quantidade: 2 },
  { nome: 'Colher de madeira', descricao: 'Colher de madeira pra vc fazer um acomindinha hmmmmmm', valor: 5, quantidade: 1 },
  { nome: 'Camiseta lisa', descricao: 'Camiseta lisa pra ir nos bailes da familia', valor: 25, quantidade: 2 },
  { nome: 'Piru de Borracha', descricao: 'Piruzao 45cm ', valor: 50, quantidade: 2 },
  { nome: 'Colher de madeira', descricao: 'Colher de madeira pra vc fazer um acomindinha hmmmmmm', valor: 5, quantidade: 1 },
  { nome: 'Camiseta lisa', descricao: 'Camiseta lisa pra ir nos bailes da familia', valor: 25, quantidade: 2 },
  { nome: 'Piru de Borracha', descricao: 'Piruzao 45cm ', valor: 50, quantidade: 2 },
  { nome: 'Colher de madeira', descricao: 'Colher de madeira pra vc fazer um acomindinha hmmmmmm', valor: 5, quantidade: 1 },
  { nome: 'Camiseta lisa', descricao: 'Camiseta lisa pra ir nos bailes da familia', valor: 25, quantidade: 2 },
  { nome: 'Piru de Borracha', descricao: 'Piruzao 45cm ', valor: 50, quantidade: 2 },
];
