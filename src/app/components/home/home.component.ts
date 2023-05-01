import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mybreakpoint: number;
  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }
  handleSize(event) {
    this.mybreakpoint = (event.target.innerWidth <= 600) ? 1 : 1;
  }
}
