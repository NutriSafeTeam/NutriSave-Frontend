import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ProdutoFinal } from 'src/app/models/produtoFinal';
import { RequisicaoService } from 'src/app/services/requisicao.service';
import { MatIconModule } from "@angular/material/icon";
import Quagga from 'quagga';
import { Produto } from 'src/app/models/produto';


@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css'],
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

  produto: Produto = {
    gtin:            '',
    description:     '',
    barcode_image:   ''
  }

  code: any

  constructor( 
    private service: RequisicaoService,
    private toast: ToastrService,
    private ref: ChangeDetectorRef
    ) {

  }

  ngOnInit(): void {
  }

  findByName(): void {
    this.service.findByName(this.produtoFinal.name).subscribe( {
      next: (resposta) => {
      this.produtoFinal = resposta[0];
    },error: (error) => {
      this.toast.error('Produto não encontrado')
      },
    });
  }

  innerWidth: any = window.innerWidth;
  innerHeigth: any = window.innerHeight;

  barcode = '';
  barcodeResult;
  configQuagga = {
    inputStream: {
      name: 'Live',
      type: 'LiveStream',
        target: '#inputBarcode',
        constraints: {
          width: { min:  640},
          height: { min: 480},
          aspectRatio: { min: 1, max: 2 },
          facingMode: 'environment', 
        },
      singleChannel: false 
    },
    locator: {
      patchSize: 'medium',
      halfSample: true
    },
    locate: true,
    numOfWorkers: 4,
    decoder: {
      readers: [
        'code_128_reader',
        'ean_reader',
        'ean_8_reader',
        'code_39_reader',
        'code_39_vin_reader',
        'codabar_reader',
        'upc_reader',
        'upc_e_reader',
        'i2of5_reader'
      ]
    }
  };

  testChangeValues() {
    this.barcode = 'Code-barres bidon : 0123456789';
  }

  startScanner() {
    this.barcode = '';
    this.ref.detectChanges();

    Quagga.onProcessed((result) => this.onProcessed(result));

    Quagga.onDetected((result) => this.logCode(result));

    Quagga.init(this.configQuagga, (err) => {
      if (err) {
        return console.log(err);
      }
      Quagga.start();
      console.log('Barcode: initialization finished. Ready to start');
    });


  }

  private onProcessed(result: any) {
    const drawingCtx = Quagga.canvas.ctx.overlay;
    const drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width'), 10), parseInt(drawingCanvas.getAttribute('height'), 10));
        result.boxes.filter(function (box) {
          return box !== result.box;
        }).forEach(function (box) {
          Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: 'green', lineWidth: 2 });
        });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: '#00F', lineWidth: 2 });
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
      }
    }
  }

  private logCode(result) {
    this.code = result.codeResult.code;
   
    if (this.barcode !== this.code) {
      this.barcode = 'Code-barres EAN : ' + this.code;
      this.barcodeResult=result.codeResult;
      this.ref.detectChanges();
      console.log(this.barcode);
      console.log(this.barcodeResult);

      // this.barcodeValue = result.codeResult.code;
      // this.barcodeResult=result.codeResult
      // console.log("this.barcodeValue",this.barcodeValue)

      console.log("JSON.stringify(result.codeResult)",JSON.stringify(result.codeResult))
      console.log("Result",result)
      console.log("JSON.stringify(result)",JSON.stringify(result))
      // console.log("this.barcodeResult",this.barcodeResult.json())
      Quagga.stop();
      this.produto.gtin = this.code;
      this.findByGtin();
      console.log("cheguei aqui ", this.produto.gtin);
      console.log("cheguei aqui ", this.produtoFinal.name);
    }
  }

  findByGtin(): void {
    this.service.findByGtin(this.produto.gtin).subscribe(resposta =>{
      this.produto = resposta;
      this.produtoFinal.name = this.produto.description;
      this.findByName();
      console.log(this.produto.description);
    })
  }

}
