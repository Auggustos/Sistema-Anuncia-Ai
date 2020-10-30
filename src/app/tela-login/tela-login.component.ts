import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  constructor( private authService: AuthService,
    private router: Router,) { }

    loginForm = new FormGroup({
      usuario: new FormControl('',Validators.required),
      senha: new FormControl('',Validators.required),
    });
  usuarios: { user: String, senha: String }[] = [];

  hide = true;

  ngOnInit(): void {
    this.usuarios = [
      { user: 'rafael', senha: 'rafa' },
      { user: 'joao', senha: 'juao' },
      { user: 'thiago', senha: 'thithi' },
    ];

  }

  verificaUser() {

    this.authService.login(this.loginForm.value.usuario, this.loginForm.value.senha).subscribe(
      success => this.router.navigate(['']),
      error => console.log(error)
    );
    
  }

}
