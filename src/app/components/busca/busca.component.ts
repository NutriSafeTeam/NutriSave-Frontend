import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProdutoFinal } from 'src/app/models/produtoFinal';
import { RequisicaoService } from 'src/app/services/requisicao.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent {

  produtoFinal: ProdutoFinal = {
    name:                  '',
    calories:              '',
    protein_g:             '',
    sodium_mg:             '',
    potassium_mg:          '',
    cholesterol_mg:        '',
    carbohydrates_total_g: '',
    fiber_g:               '',
    sugar_g:               '',
  }

  constructor( private service: RequisicaoService ) {

  }

  ngOnInit(): void {
  }

  findByName(): void {
    console.log("cheguei aqui");
    this.service.findByName(this.produtoFinal.name).subscribe( resposta => {
      console.log("cheguei aqui");
      this.produtoFinal = resposta;
      console.log(resposta.calories);
    });
  }

}
