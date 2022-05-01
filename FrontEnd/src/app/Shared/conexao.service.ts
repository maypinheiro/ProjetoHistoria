
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaCreate } from './Model/pessoaCreate.model';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {

  apiUrl = 'http://localhost:5000/api/historia';
  
  
  constructor(private http: HttpClient ) { }

  public getPessoa(){
    return this.http.get<any>(this.apiUrl)

  }

  public postPessoa(pessoa:PessoaCreate):  Observable<any>{
    return this.http.post(this.apiUrl,pessoa)
  
  }

}
