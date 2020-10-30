import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogService } from './shared/services/dialog/dialog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';

import { ModalVisualizarPedidoComponent } from './modais/modal-visualizar-pedido/modal-visualizar-pedido.component';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { CadastraProdutoComponent } from './cadastra-produto/cadastra-produto.component';
import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';
import { GerirVendasComponent } from './gerir-vendas/gerir-vendas.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    ModalVisualizarPedidoComponent,
    ListagemProdutosComponent,
    CadastraUsuarioComponent,
    CadastraProdutoComponent,
    AtualizaUsuarioComponent,
    GerirVendasComponent,
    TelaLoginComponent,
    PedidosComponent,
    CarrinhoComponent,
    ErrorComponent,
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatGridListModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatBadgeModule,
    MatInputModule,
    MatTableModule,
    BrowserModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    FormsModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    DialogService
  ],
  entryComponents: [
    ModalVisualizarPedidoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
