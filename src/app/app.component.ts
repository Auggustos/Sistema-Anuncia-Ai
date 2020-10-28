import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema-Horti-Fruti';

  itensSidebar: string[] = ['Meus dados', 'Gerenciar Vendas', 'Cadastrar Produtos', 'Pedidos', 'Ofertas'];
}

