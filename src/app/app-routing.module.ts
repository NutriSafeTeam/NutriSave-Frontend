import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ProdutoScaneadoComponent } from './components/produtos/produto-scaneado/produto-scaneado.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { HomeComponent } from './components/home/home.component';
import { BuscaComponent } from './components/busca/busca.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { 
    path: '', component: NavComponent, children: [
      { path: 'home',                  component: HomeComponent }, 
      { path: 'scanner',            component: ScannerComponent },
      { path: 'produto/:id', component: ProdutoScaneadoComponent},
      { path: 'busca',                 component: BuscaComponent},
    ] 
  },
  {
    path: 'usuarios', component: UsuarioListComponent, canActivate: [AuthGuard], children: [
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
