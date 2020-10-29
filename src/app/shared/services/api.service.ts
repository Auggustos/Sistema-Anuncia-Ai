import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../../classes/produto.class';
import { Usuario } from '../../classes/usuario.class';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000";

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.url}/products`);
  }

  postUsuario(body):Observable<any>{

    return this.http.post(`${this.url}/register`,body)
    .pipe();


  }


  
}
