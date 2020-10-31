import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from "@angular/router";
import { Produto } from '../classes/produto.class';
import { ApiService } from '../shared/services/api.service'
import { AuthService } from '../shared/services/auth.service';
import { DialogService } from '../shared/services/dialog/dialog.service';
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

  constructor(private apiService: ApiService, private authService: AuthService, private dialogService: DialogService,private router: Router,) { }
  produtos: Produto[] = [];

  showFiller = false;

  itensSidebar: string[] = ['Meus dados', 'Minhas compras'];

  ngOnInit(): void {

    this.apiService.getProdutos().subscribe(response => {
      const userId = this.authService.getUserId();
      response.forEach(produto => {
        if (produto.id_usuario != userId) {
          this.produtos.push(produto);
        }
      })
    });
  }
  adicionaAoCarrinho(idProduto:string){
    if(!this.authService.isLoggedIn()){
      this.dialogService.showWarning("Você precisa estar logado para adicionar algum item ao carrinho!","Autentique-se!").then(result =>{
        this.router.navigateByUrl('login').then(success => location.reload())
      })
    }
  }


}
