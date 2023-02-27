import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Card } from '../model/Card';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  url = 'http://localhost:8001/msvc-credibanco/card'

   constructor(private http:HttpClient) { 
  }

  getCards(){
    return this.http.get<Card[]>(this.url)
  }
}
