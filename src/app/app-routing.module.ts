import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NavComponent } from './components/nav/nav.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { 
    path: '', component: NavComponent, children: [
      { path: 'home',          component: HomeComponent },
      { path: 'cadastro',          component: CadastroComponent }, 
      { path: 'scanner',    component: ScannerComponent },
      { path: 'perfil',    component: PerfilComponent },
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
