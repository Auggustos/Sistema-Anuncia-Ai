import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
{
  path: '',
  component: TelaLoginComponent
},
{
  path: 'login',
  component: TelaLoginComponent
},
{
  path: 'cadastro',
  component: CadastraUsuarioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
