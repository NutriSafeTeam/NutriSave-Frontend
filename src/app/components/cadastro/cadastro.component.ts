import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cliente: Usuario = {
    nome:       '',
    email:      '',
    senha:      '',
    dataCriacao: ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: UsuarioService,
    private toast:    ToastrService,
    private router:          Router,
    ) { }

  ngOnInit(): void { }

  create(): void {
    this.service.create(this.cliente).subscribe(() => {
      this.toast.success('Cadastrado realizado com sucesso', 'Cadastro');
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  validaCampos(): boolean {
    return this.nome.valid && this.email.valid && this.senha.valid
  }

}
