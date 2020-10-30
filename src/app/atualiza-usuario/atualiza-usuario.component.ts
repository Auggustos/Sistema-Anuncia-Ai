import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{ DialogService } from '../shared/services/dialog/dialog.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-atualiza-usuario',
  templateUrl: './atualiza-usuario.component.html',
  styleUrls: ['./atualiza-usuario.component.css']
})
export class AtualizaUsuarioComponent implements OnInit {

  constructor(private dialogService: DialogService,private router: Router) { }

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
    this.dialogService.showSuccess(`Usuário ${this.userForm.value.nome} atualizado com sucesso!`,'Usuario Atualizado!').then(result => {
      this.router.navigate(['']);
    })
  }

}
