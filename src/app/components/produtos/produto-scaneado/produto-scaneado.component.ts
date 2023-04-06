import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { RequisicaoService } from 'src/app/services/requisicao.service';

@Component({
  selector: 'app-produto-scaneado',
  templateUrl: './produto-scaneado.component.html',
  styleUrls: ['./produto-scaneado.component.css']
})
export class ProdutoScaneadoComponent {

  produto: Produto = {
    gtin:          '',
    description:     '',
    barcode_image: ''
  }

  constructor(
    private service: RequisicaoService,
    private router:           Router,
    private route:    ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.produto.gtin = this.route.snapshot.paramMap.get('code');
    this.findByGtin();
  }

  findByGtin(): void {
    this.service.findByGtin(this.produto.gtin).subscribe(resposta =>{
      this.produto = resposta;
      console.log(this.produto.description);
    })
  }

}
