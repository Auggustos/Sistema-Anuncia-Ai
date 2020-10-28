import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m =>m.MainModule)
  },
  //{
  //  path: '',
  //  pathMatch: 'full',
  //  redirectTo: '/main/pessoas'
 // },
  {
    path: 'cadastro',
    component: CadastraUsuarioComponent
  },
  {
    path: 'login',
    component: TelaLoginComponent
  },
  {
    path: '',
    component: ListagemProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
