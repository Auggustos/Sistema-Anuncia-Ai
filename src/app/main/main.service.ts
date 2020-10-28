import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Pessoa } from './pessoa';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  readonly url = 'http://localhost:3000/api';

  getPeople(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.url}/people`);
     
  }

  getProducts(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.url}/products`);
  }

}
