import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../classes/produto.class';
import { Router } from "@angular/router";

import { DialogService } from '../shared/services/dialog/dialog.service'
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-cadastra-produto',
  templateUrl: './cadastra-produto.component.html',
  styleUrls: ['./cadastra-produto.component.css']
})
export class CadastraProdutoComponent implements OnInit {

  constructor(private dialogService: DialogService, private router: Router, private apiSevice: ApiService, private authService: AuthService) { }

  uploadData = new FormData();

  selectedFile: File

  imageSrc: any;

  hide = true;

  produto: Produto;

  productForm = new FormGroup({
    nome: new FormControl(''),
    descricao: new FormControl(''),
    preco: new FormControl(''),
    imagem: new FormControl(''),
    id_usuario: new FormControl(this.authService.getUserId()),
    quantidade: new FormControl(''),
  });

  ngOnInit(): void {
  }
  goBack() {
    window.history.back();
  }

  cadastraProduto() {
    this.productForm.controls['imagem'].setValue(this.uploadData);
    console.log(this.productForm.value);
    this.dialogService.showSuccess(`Produto: ${this.productForm.value.nome} cadastrado com sucesso!`, 'Produto cadastrado').then(result => {
      this.router.navigate(['']);
    })
  }

  readURL(event): void {
    this.selectedFile = event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.uploadData = new FormData();

      this.uploadData.append('imagem', this.selectedFile, this.selectedFile.name);

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('imagem', this.selectedFile);
    uploadData.append('nome', this.productForm.value.nome);
    uploadData.append('descricao', this.productForm.value.descricao);
    uploadData.append('preco', this.productForm.value.preco);
    uploadData.append('quantidade', this.productForm.value.quantidade);
    uploadData.append('id_usuario', this.productForm.value.id_usuario);
    this.apiSevice.postProdutos(uploadData)
      .subscribe();
  }

}
