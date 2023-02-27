import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { GetCardsComponent } from './Card/get-cards/get-cards.component';
import { FormsModule } from '@angular/forms';
import { GetPurchaseComponent } from './Purchase/get-purchase/get-purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    GetCardsComponent,
    GetPurchaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
