import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Produto } from '../classes/produto.class';
import { ApiService } from '../shared/services/api.service'
@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent implements OnInit {
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  constructor(private apiService: ApiService) { }
  produtos: Produto[] = [];

  showFiller = false;

  itensSidebar: string[] = ['Meus dados', 'Minhas compras'];

  ngOnInit(): void {

    this.apiService.getProdutos().subscribe(response => {
      this.produtos = response;
    });
  }


}
