import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{ DialogService } from '../shared/services/dialog/dialog.service'
import { Router } from "@angular/router";
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-atualiza-usuario',
  templateUrl: './atualiza-usuario.component.html',
  styleUrls: ['./atualiza-usuario.component.css']
})
export class AtualizaUsuarioComponent implements OnInit {

  constructor(private dialogService: DialogService,private router: Router,private apiService: ApiService, private authService: AuthService) { }

  hide = true;

  perfis = ['Cliente','Fornecedor'];

  aceitaCartao = ['Sim','Não'];

  userForm = new FormGroup({
    nome: new FormControl(this.authService.getUser()),
    sobrenome: new FormControl(''),
    endereco: new FormControl(this.authService.getUserEndereco()),
    celular: new FormControl(this.authService.getUserCelular()),
    email: new FormControl(this.authService.getUserEmail()),
    perfil: new FormControl(this.authService.getPerfil()),
    pagamento_cartao: new FormControl(this.authService.getUserPagamentoCartao())
  });


  ngOnInit(): void {

  }
  goBack() {
    window.history.back();
  }
  atualizaUsuario() {
    console.log(this.userForm.value);
    this.dialogService.showSuccess(`Usuário ${this.userForm.value.nome} atualizado com sucesso!`,'Usuario Atualizado!').then(result => {
      this.router.navigate(['']);
    })
  }

}
