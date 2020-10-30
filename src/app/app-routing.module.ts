import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';
import { CadastraProdutoComponent } from './cadastra-produto/cadastra-produto.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ErrorComponent } from './error/error.component';
import { GerirVendasComponent } from './gerir-vendas/gerir-vendas.component';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AuthGuard } from './shared/services/auth.service';
import { TelaLoginComponent } from './tela-login/tela-login.component';
const routes: Routes = [
  {
    path: 'usuario/cadastra',
    component: CadastraUsuarioComponent, canActivate: [AuthGuard]
  },
  {
    path: 'usuario/atualiza',
    component: AtualizaUsuarioComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: TelaLoginComponent
  },
  {
    path: '',
    component: ListagemProdutosComponent
  },
  {
    path: 'produto/cadastra',
    component: CadastraProdutoComponent, canActivate: [AuthGuard]
  },
  {
    path: 'pedidos',
    component: PedidosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'gerir',
    component: GerirVendasComponent, canActivate: [AuthGuard]
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent, canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
