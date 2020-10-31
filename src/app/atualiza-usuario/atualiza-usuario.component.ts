import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
  hide1 = true;

  perfis = [{id:0,texto:'Cliente'},{id:1,texto:'Fornecedor'}];

  aceitaCartao = ['Sim','Não'];

  userForm = new FormGroup({
    nome: new FormControl(this.authService.getUser()),
    sobrenome: new FormControl(this.authService.getUserSobrenome()),
    endereco: new FormControl(this.authService.getUserEndereco()),
    celular: new FormControl(this.authService.getUserCelular()),
    email: new FormControl(this.authService.getUserEmail()),
    perfil: new FormControl('',Validators.required),
    senhaAntiga: new FormControl('',[Validators.required, Validators.minLength(6)]),
    senhaNova1: new FormControl('',Validators.minLength(6)),
    pagamento_cartao: new FormControl(),
  });

  ngOnInit(): void {

  }
  goBack() {
    window.history.back();
  }
  atualizaUsuario() {
    const body = this.loadBody();
    this.apiService.atualizaUsuario(body,this.authService.token).subscribe(success =>{
      this.dialogService.showSuccess(`Usuário ${this.userForm.value.nome} atualizado com sucesso!`,'Usuario Atualizado!').then(result => {
        this.router.navigate(['']).then(success => location.reload())
      });
    },
    error => {
      this.dialogService.showError(`${error.error.message}`, "Acesso Negado!")
    });
  }

  loadBody(){
    return {
      nome: this.userForm.value.nome,
      sobrenome: this.userForm.value.sobrenome,
      endereco: this.userForm.value.endereco,
      celular: this.userForm.value.celular,
      email: this.userForm.value.email,
      senha_antiga: this.userForm.value.senhaAntiga,
      senha: this.userForm.value.senhaNova1,
      perfil: this.userForm.value.perfil,
      pagamento_cartao: this.userForm.value.pagamento_cartao
  }
  }


}
