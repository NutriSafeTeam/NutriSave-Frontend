import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  mybreakpoint: number;
  constructor(
    private router: Router) {
  }

  logOut(): void{
    localStorage.clear();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
  }
  handleSize(event) {
    this.mybreakpoint = (event.target.innerWidth <= 600) ? 1 : 1;
  }
}
