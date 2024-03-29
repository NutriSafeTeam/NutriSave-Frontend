import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isExpanded: boolean = false;
  opened = false;
  constructor(
    private router: Router ){
  }

  logOut(): void{
    localStorage.clear();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.router.navigate(['home']);
  }

}