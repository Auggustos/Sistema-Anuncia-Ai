import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../main/main.service';
import { Pessoa } from '../main/pessoa';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas$: Observable<Pessoa[]>;
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.pessoas$ = this.mainService.getPeople();
  }

}
