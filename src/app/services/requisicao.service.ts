import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_COSMO } from '../config/apiCosmo.config';
import { Produto } from '../models/produto';

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
}
