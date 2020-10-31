import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Produto } from '../classes/produto.class';
import { ApiService } from '../shared/services/api.service'
import { AuthService } from '../shared/services/auth.service';
import { DialogService } from '../shared/services/dialog/dialog.service';
@Component({
  selector: 'app-gerir-produtos',
  templateUrl: './gerir-produtos.component.html',
  styleUrls: ['./gerir-produtos.component.css']
})
export class GerirProdutosComponent implements OnInit {
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

  constructor(private apiService: ApiService, private authService: AuthService, private dialogService: DialogService) { }
  produtos: Produto[] = [];

  showFiller = false;

  itensSidebar: string[] = ['Meus dados', 'Minhas compras'];

  ngOnInit(): void {

    this.apiService.getProdutos().subscribe(response => {
      const userId = this.authService.getUserId();
      response.forEach(produto => {
        if (produto.id_usuario == userId) {
          this.produtos.push(produto);
        }
      })
    });
  }

  editaAnuncio(idProduto: string) {
    console.log(idProduto);
  }
  excluiAnuncio(idProduto: string) {
    console.log(idProduto);
    this.dialogService.showConfirm("Excluir?", "Voce realmente deseja excluir este produto?").then(
      result => {
        if(result.value){
          console.log("apaga")
        }else{
          console.log("não apaga");
        } 
      }
    );
  }
}
