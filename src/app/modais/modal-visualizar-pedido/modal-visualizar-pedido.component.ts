import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

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

  constructor(
    private apiService: ApiService, 
    private authService: AuthService, 
    private dialogService: DialogService, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) { }



  ngOnInit(): void {
    console.log(this.data.pedidoProduto)
   }

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
