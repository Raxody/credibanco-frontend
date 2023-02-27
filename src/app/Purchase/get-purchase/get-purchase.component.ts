import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from '../model/Purchase';
import { PurchaseService } from '../service/purchase.service';

@Component({
  selector: 'app-get-purchase',
  templateUrl: './get-purchase.component.html',
  styleUrls: ['./get-purchase.component.css']
})
export class GetPurchaseComponent implements OnInit{
  purchases:Purchase[] ;
  constructor(private purchaseService:PurchaseService, private router:Router){
    this.purchases = [];
  }

  ngOnInit(): void {
    this.purchaseService
        .getPurchases()
        .subscribe(purchase=>{this.purchases=purchase});
  }
}
