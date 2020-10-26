import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  constructor() { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  usuarios: { user: String, senha: String }[] = [];
  usuario = '';
  senha = '';

  hide = true;

  ngOnInit(): void {
    this.usuarios = [
      { user: 'rafael', senha: 'rafa' },
      { user: 'joao', senha: 'juao' },
      { user: 'thiago', senha: 'thithi' },
    ];

  }

  verificaUser() {
    let flag = 0;
    this.usuarios.forEach(user => {
      if (this.usuario == user.user && this.senha == user.senha) {
        flag = 1;
      }
    })
    if (flag == 1) {
      console.log("acesso permitido")
    } else {
      console.log("acesso negado!")
    }
  }

}
