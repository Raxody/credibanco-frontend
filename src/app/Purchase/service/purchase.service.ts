import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from '../model/Purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  url = 'http://localhost:8001/msvc-credibanco/purchase'
  constructor(private http:HttpClient) { }

  getPurchases(){
    return this.http.get<Purchase[]>(this.url)
  }
}