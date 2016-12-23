import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'pages/home/home.component.html',
  styleUrls: ['pages/home/home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  navigate() {
    this.router.navigate(['/schedule'])
  }
  ngOnInit() {
  }

}