import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../classes/produto.class'
@Component({
  selector: 'app-cadastra-produto',
  templateUrl: './cadastra-produto.component.html',
  styleUrls: ['./cadastra-produto.component.css']
})
export class CadastraProdutoComponent implements OnInit {

  constructor() { }

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
    id_usuario: new FormControl(''),
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
  }

  readURL(event): void {
    this.selectedFile = event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      this.uploadData = new FormData();

      this.uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }

  onUpload() {
    // upload code goes here
    // const uploadData = new FormData();
    //uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    //this.http.post('my-backend.com/file-upload', uploadData)
    // .subscribe(...);
  }

}
