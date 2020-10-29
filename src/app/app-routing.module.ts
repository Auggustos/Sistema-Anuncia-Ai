import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';
import { CadastraProdutoComponent } from './cadastra-produto/cadastra-produto.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
const routes: Routes = [
  {
    path: 'usuario/cadastra',
    component: CadastraUsuarioComponent
  },
  {
    path: 'usuario/atualiza',
    component: AtualizaUsuarioComponent
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
    component: CadastraProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
