import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/Card/model/Card';
import{CardService} from '../service/card.service'
 
@Component({
  selector: 'app-get-cards',
  templateUrl: './get-cards.component.html',
  styleUrls: ['./get-cards.component.css']
})
export class GetCardsComponent implements OnInit{

  cards:Card[] = []
  constructor(private cardService:CardService, private router:Router){}
  ngOnInit(): void {
    this.cardService.getCards().subscribe(data=>{this.cards=data});
  }

}
