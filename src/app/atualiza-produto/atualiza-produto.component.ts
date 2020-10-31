import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../classes/produto.class';
import { ActivatedRoute, Router } from "@angular/router";

import { DialogService } from '../shared/services/dialog/dialog.service'
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css']
})
export class AtualizaProdutoComponent implements OnInit {
  idProduto = '';
  constructor(private dialogService: DialogService, private router: Router, private apiSevice: ApiService, private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] !== null && params['id']) {
        this.idProduto = params['id'];
      }

    });
  }

  uploadData = new FormData();

  selectedFile: File

  imageSrc: any;

  hide = true;

  produto: Produto;

  productForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    preco: new FormControl('', Validators.required),
    imagem: new FormControl('', Validators.required),
    id_usuario: new FormControl(this.authService.getUserId(), Validators.required),
    quantidade: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.apiSevice.getProdutos().subscribe(response => {
      response.forEach(produto => {
        if (produto.id == this.idProduto) {
          this.productForm.controls['nome'].setValue(produto.nome);
          this.productForm.controls['descricao'].setValue(produto.descricao);
          this.productForm.controls['preco'].setValue(produto.preco);
          this.productForm.controls['id_usuario'].setValue(produto.id_usuario);
          this.productForm.controls['quantidade'].setValue(produto.quantidade);
        }
      })
    })
  }
  goBack() {
    window.history.back();
  }

  cadastraProduto() {
    this.productForm.controls['imagem'].setValue(this.uploadData);

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

    this.productForm.controls['imagem'].setValue(this.selectedFile);
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
      .subscribe(
        success => {
          this.dialogService.showSuccess(`${this.productForm.value.nome} cadastrado com sucesso!`, "Produto Cadastrado!").then(result => {
            this.router.navigateByUrl('').then(success => location.reload())
          });
        },
        error => {
          this.dialogService.showError('Verifique os dados!', "Erro no Cadastro!");
        }
      );
  }

}
