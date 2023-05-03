import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_COSMO } from '../config/apiCosmo.config';
import { API_NINJA } from '../config/apiNinjas.config';
import { Produto } from '../models/produto';
import { ProdutoFinal } from '../models/produtoFinal';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(private http: HttpClient) { }

  findByGtin(gtin: any) {
    return this.http.get<Produto>(`${API_COSMO.baseUrl}/gtins/${gtin}`, {
      headers: {'X-Cosmos-Token': API_COSMO.token}
    });
  }

  findByName(name: any) {
    return this.http.get<ProdutoFinal>(`${API_NINJA.baseUrl}/v1/nutrition?query=${name}`, {
      headers: {'X-Api-Key': API_NINJA.token}
    });
  }
}
