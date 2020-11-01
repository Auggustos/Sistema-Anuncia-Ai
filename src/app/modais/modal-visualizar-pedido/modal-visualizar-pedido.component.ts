import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PedidoProduto } from 'src/app/classes/pedidoProduto.class';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

export interface ItemPedido {
  nome: string,
  descricao: string,
  valor: number,
  quantidade: number,
}

let ELEMENT_DATA: PedidoProduto[] = []

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
    ELEMENT_DATA = this.data.pedidoProduto;
    this.atualizaTabela();  
    console.log(this.data.pedidoProduto)
   }

  goBack() {
    window.history.back();
  }
  atualizaTabela() {
    this.dataSource = ELEMENT_DATA;
  }

}