import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasComponent } from '../pessoas/pessoas.component';
import { ProdutosComponent } from '../produtos/produtos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pessoas'
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'pessoas',
    component: PessoasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
