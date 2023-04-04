import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'scanner', component: ScannerComponent },
  { path: '', component: NavComponent },
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
