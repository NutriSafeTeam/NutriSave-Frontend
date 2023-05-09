import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';
// Imports para componentes do Angular Material
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptorProvider } from './interceptor/auth.interceptor';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { HomeComponent } from './components/home/home.component';
import { BuscaComponent } from './components/busca/busca.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ProdutoScaneadoComponent } from './components/produtos/produto-scaneado/produto-scaneado.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    UsuarioListComponent,
    UsuarioCreateComponent,
    ScannerComponent,
    HomeComponent,
    BuscaComponent,
    PerfilComponent,
    CadastroComponent,
    ProdutoScaneadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    
  ],
  providers: [AuthInterceptorProvider, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
