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

  badge: number;

  constructor(private router: Router) { }

  onBadge(event) {
    console.log("cheguei")
    this.badge = event.valor;
    console.log(event)
  }

  itensSidebar: rotas[] = [
    { nome: 'Meus dados', rota: 'usuario/atualiza' },
    { nome: 'Gerenciar Vendas', rota: 'gerir' },
    { nome: 'Cadastrar Produtos', rota: 'produto/cadastra' },
    { nome: 'Pedidos', rota: 'pedidos' },
    { nome: 'Ofertas', rota: '' }];
  onRowClicked(item: rotas) {
    this.router.navigate([item.rota]);
  }

  toCarrinho(){
    this.router.navigate(['/carrinho']);
  }
}

