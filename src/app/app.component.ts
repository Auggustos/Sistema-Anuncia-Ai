import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { exit } from 'process';
import { AuthService } from './shared/services/auth.service';
import { DialogService } from './shared/services/dialog/dialog.service';

export interface rotas {
  nome: string,
  rota: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Sistema-Horti-Fruti';

  badge: number;

  constructor(private router: Router, private authService: AuthService, private dialogService: DialogService) {
  }
  carrinho;
  usuario = '';
  perfil = 3;

  ngOnInit() {

    if (!this.authService.isLoggedIn()) {
      this.usuario = '';
      this.perfil = 3;
    } else {
      if (this.authService.getUser().length > 1) {
        this.usuario = this.authService.getUser();
        this.perfil = parseInt(this.authService.getPerfil());
      }
    }
  }

  desloga() {
    location.reload();
    this.authService.logout();
    this.usuario = this.authService.getUser();
    this.perfil = parseInt(this.authService.getPerfil());
    if (!this.authService.isLoggedIn()) {
      this.usuario = '';
      this.perfil = 3;
    }
    this.dialogService.showSuccess("Logout realizado com sucesso!", "Logout");
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

  toCarrinho() {
    this.router.navigate(['/carrinho']);
  }

  onBadge() {
    if (this.authService.isLoggedIn()) {
      if (this.authService.getCarrinho()) {
        this.carrinho = JSON.parse(this.authService.getCarrinho())
        //console.log(this.carrinho)
        if (this.carrinho != null) {
          return this.carrinho.length;
        } else {
          return '';
        }
      }
    } else {
      return '';
    }

  }
}

