import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'pages/home/home.component.html',
  styleUrls: ['pages/home/home.component.css']
})
export class HomeComponent implements OnInit {

  items: Array<Object>;
  selectedIndex: number;
  constructor(private router: Router) {
    this.selectedIndex = 0;
    this.items=[{title: 'First'}, {title: 'Second'}];
   }
  navigate() {
    this.router.navigate(['/schedule'])
  }
  ngOnInit() {
  }

}