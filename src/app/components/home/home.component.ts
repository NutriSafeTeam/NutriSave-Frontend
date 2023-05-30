import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breakpoint1: number;
  constructor(
    private router: Router) {
  }

  ngOnInit(): void {

    this.breakpoint1 = (window.innerWidth <= 700) ? 1 :2;

  }

  onResize(event) {
    this.breakpoint1 = (window.innerWidth <= 700) ? 1 : 2;
  }

}
