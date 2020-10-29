import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CadastraProdutoComponent } from './cadastra-produto/cadastra-produto.component';
import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';
import { GerirVendasComponent } from './gerir-vendas/gerir-vendas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import {MatTableModule} from '@angular/material/table';

import {DialogService} from './shared/services/dialog/dialog.service';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    CadastraUsuarioComponent,
    ListagemProdutosComponent,
    CadastraProdutoComponent,
    AtualizaUsuarioComponent,
    GerirVendasComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatTooltipModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
