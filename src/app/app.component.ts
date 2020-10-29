import { Component } from '@angular/core';
import { Router } from "@angular/router";

export interface rotas {
  nome: string,
  rota: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema-Horti-Fruti';
  constructor(private router: Router) { }
  itensSidebar: rotas[] = [
    { nome: 'Meus dados', rota: 'usuario/atualiza' },
    { nome: 'Gerenciar Vendas', rota: '' },
    { nome: 'Cadastrar Produtos', rota: 'produto/cadastra' },
    { nome: 'Pedidos', rota: '' },
    { nome: 'Ofertas', rota: '' }];
  onRowClicked(item: rotas) {
    this.router.navigate([item.rota]);
  }
}

