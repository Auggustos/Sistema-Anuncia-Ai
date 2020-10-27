import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastra-usuario',
  templateUrl: './cadastra-usuario.component.html',
  styleUrls: ['./cadastra-usuario.component.css']
})
export class CadastraUsuarioComponent implements OnInit {

  constructor() { }

  hide = true;

  perfis = ['Cliente','Fornecedor'];

  userForm = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    endereco: new FormControl(''),
    usuario: new FormControl(''),
    senha: new FormControl(''),
    perfil: new FormControl(''),
  });

  ngOnInit(): void {
  }
  goBack() {
    window.history.back();
  }
  cadastraUsuario() {
    console.log(this.userForm.value);
  }

}
