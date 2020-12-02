import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';
import { CadastraProdutoComponent } from './cadastra-produto/cadastra-produto.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ErrorComponent } from './error/error.component';
import { GerirProdutosComponent } from './gerir-produtos/gerir-produtos.component';
import { GerirVendasComponent } from './gerir-vendas/gerir-vendas.component';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { RelatorioVendasComponent } from './relatorio-vendas/relatorio-vendas.component';
import { AuthGuard } from './shared/services/auth.service';
import { TelaLoginComponent } from './tela-login/tela-login.component';
const routes: Routes = [
  {
    path: '',
    component: ListagemProdutosComponent
  },
  {
    path: 'usuario/cadastra',
    component: CadastraUsuarioComponent
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
    path: 'produto/gerir',
    component: GerirProdutosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'produto/:id/atualiza',
    component: AtualizaProdutoComponent, canActivate: [AuthGuard]
  },
  {
    path: 'relatorio-vendas',
    component: RelatorioVendasComponent, canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
