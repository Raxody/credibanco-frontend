import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Credibanco - Nexos Software';
  constructor(private router: Router) {

  }

  getAllCards() {
    this.router.navigate(["get-cards"]);
  }

  getAllPurchases() {
    this.router.navigate(["get-purchases"]);
  }

}



