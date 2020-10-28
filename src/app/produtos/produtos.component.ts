import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../main/main.service';
import { Produto } from '../main/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos$: Observable<Produto[]>;
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.produtos$ = this.mainService.getProducts();
  }

}
