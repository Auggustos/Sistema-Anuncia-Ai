import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from "@angular/router";
import { Produto } from '../classes/produto.class';
import { ApiService } from '../shared/services/api.service'
import { AuthService } from '../shared/services/auth.service';
import { DialogService } from '../shared/services/dialog/dialog.service';
import { ModalVisualizarProdutoComponent } from '../modais/modal-visualizar-produto/modal-visualizar-produto.component';
import { MatDialog } from '@angular/material/dialog';

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
  carrinho: { produtoId: string, idCliente: string, preco: number, quantidade: number, nome: string }[] = [];

  constructor(private apiService: ApiService, private authService: AuthService, private dialogService: DialogService, private router: Router,
    public dialog: MatDialog) { }
  produtos: Produto[] = [];

  showFiller = false;

  quantidadeProduto: { id: string, quantidade: number }[] = [];

  itensSidebar: string[] = ['Meus dados', 'Minhas compras'];

  ngOnInit(): void {
    this.authService.limpaCarrinho();
    this.apiService.getProdutos().subscribe(response => {
      if (this.authService.isLoggedIn()) {
        const userId = this.authService.getUserId();
        response.forEach(produto => {
          if (produto.id_usuario != userId && produto.quantidade > 0) {
            this.produtos.push(produto);
          }
        })
      } else {
        response.forEach(produto => {
          if (produto.quantidade > 0) {
            this.produtos.push(produto);
          }
        }
        )
      }
    },
      error => {
        this.dialogService.showError(`${error.error.error}`, "Erro ao Listar Produtos!")
      });
  }
  adicionaAoCarrinho(idProduto: string, precoProduto: number, nome: string, quantidade: number) {
    let flag = 0;
    if (this.quantidadeProduto.length > 0) {
      for (let i = 0; i < this.quantidadeProduto.length; i++) {
        if (this.quantidadeProduto[i].id == idProduto) {
          flag = 1;
          if (flag == 1) {
            this.quantidadeProduto[i].quantidade--;
            break;
          }
        }
      }
      if (flag == 0) {
        this.quantidadeProduto.push({ id: idProduto, quantidade: quantidade - 1 });
      }
    } else {
      this.quantidadeProduto.push({ id: idProduto, quantidade: quantidade - 1 });
    }





    if (this.carrinho.length > 0) {
      let flag = 0;
      for (let i = 0; i < this.carrinho.length; i++) {
        if (this.carrinho[i].produtoId == idProduto) {
          this.carrinho[i].quantidade++;
          var textoCarrinho = JSON.stringify(this.carrinho);
          this.authService.setCarrinho(textoCarrinho);
          flag = 1
          break;
        }
      }
      if (flag == 0) {
        this.carrinho.push({ produtoId: idProduto, idCliente: this.authService.getUserId(), preco: precoProduto, quantidade: 1, nome: nome });
        var textoCarrinho = JSON.stringify(this.carrinho);
        this.authService.setCarrinho(textoCarrinho);
      }
    } else {
      this.carrinho.push({ produtoId: idProduto, idCliente: this.authService.getUserId(), preco: precoProduto, quantidade: 1, nome: nome });
      var textoCarrinho = JSON.stringify(this.carrinho);
      this.authService.setCarrinho(textoCarrinho);
    }

    if (!this.authService.isLoggedIn()) {
      this.dialogService.showWarning("Você precisa estar logado para adicionar algum item ao carrinho!", "Autentique-se!").then(result => {
        this.router.navigateByUrl('login').then(success => location.reload())
      })
    }
  }
  desabilitaCarrinho(idProduto): boolean {
    let flag = 0;
    if (this.quantidadeProduto.length > 0) {
      for (let i = 0; i < this.quantidadeProduto.length; i++) {
        if (this.quantidadeProduto[i].id == idProduto && this.quantidadeProduto[i].quantidade == 0) {
          flag = 1;
          return false;
        }
      }
      if (flag == 0) {
        return true
      }
    } else {
      return true;
    }
  }

  visualizaProduto(id: string) {
    if (!this.authService.isLoggedIn()) {
      this.dialogService.showWarning("Você precisa estar logado para adicionar algum item ao carrinho!", "Autentique-se!").then(result => {
        this.router.navigateByUrl('login').then(success => location.reload())
      })
    } else {
      this.dialog.open(ModalVisualizarProdutoComponent, {
        width: '20%',
        height: '601px',
        data: {
          idProduto: id,
        }
      });
    }
  }


}
