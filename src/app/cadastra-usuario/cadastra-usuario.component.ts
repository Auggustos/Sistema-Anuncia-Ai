import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service'
import{ DialogService } from '../shared/services/dialog/dialog.service'

@Component({
  selector: 'app-cadastra-usuario',
  templateUrl: './cadastra-usuario.component.html',
  styleUrls: ['./cadastra-usuario.component.css']
})
export class CadastraUsuarioComponent implements OnInit {

  constructor(private apiService: ApiService, private dialogService: DialogService, private router : Router) { }

  hide = true;

  perfis = [{id:0,texto:'Cliente'},{id:1,texto:'Fornecedor'}];

  aceitaCartao = [{value:true,texto:'Sim'},{value:false,texto:'Não'}];

  userForm = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    endereco: new FormControl(''),
    celular: new FormControl(''),
    email: new FormControl(''),
    usuario: new FormControl(''),
    senha: new FormControl(''),
    perfil: new FormControl(''),
    pagamento_cartao: new FormControl('')
  });

  ngOnInit(): void {
  }
  goBack() {
    window.history.back();
  }
  cadastraUsuario() {
    const body = this.loadObject();
    console.log(body);
    this.apiService.postUsuario(body).subscribe(success =>{
      this.dialogService.showSuccess(`Usuário ${body.nome} cadastrado com sucesso!`,"Cadastro Concluido").then(result => {
        this.router.navigateByUrl('login').then(success => location.reload())
      });
    },
    error => {
      console.log(error);
      this.dialogService.showError(`${error.error.message}`, "Acesso Negado!")
    });
  }
  loadObject(){
    return{
      nome: this.userForm.value.nome,
      sobrenome: this.userForm.value.sobrenome,
      endereco: this.userForm.value.endereco,
      celular: this.userForm.value.celular,
      email: this.userForm.value.email,
      usuario: this.userForm.value.usuario,
      senha: this.userForm.value.senha,
      perfil: this.userForm.value.perfil,
      pagamento_cartao: this.userForm.value.pagamento_cartao,
    }
  }

}
