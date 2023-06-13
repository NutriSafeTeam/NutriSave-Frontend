import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BuscaComponent } from './components/busca/busca.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { 
    path: '', component: NavComponent, children: [
      { path: 'home',          component: HomeComponent },
      { path: 'cadastro',          component: CadastroComponent }, 
      { path: 'perfil',    component: PerfilComponent },
      { path: 'busca',                 component: BuscaComponent},
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
