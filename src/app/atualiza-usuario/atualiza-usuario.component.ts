import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-atualiza-usuario',
  templateUrl: './atualiza-usuario.component.html',
  styleUrls: ['./atualiza-usuario.component.css']
})
export class AtualizaUsuarioComponent implements OnInit {

  constructor() { }

  hide = true;

  perfis = ['Cliente','Fornecedor'];

  aceitaCartao = ['Sim','Não'];

  userForm = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    endereco: new FormControl(''),
    celular: new FormControl(''),
    email: new FormControl(''),
    perfil: new FormControl(''),
    pagamento_cartao: new FormControl('')
  });

  ngOnInit(): void {
  }
  goBack() {
    window.history.back();
  }
  atualizaUsuario() {
    console.log(this.userForm.value);
  }

}
