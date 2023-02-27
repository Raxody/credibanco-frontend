import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCardsComponent } from './Card/get-cards/get-cards.component';
import { GetPurchaseComponent } from './Purchase/get-purchase/get-purchase.component';

const routes: Routes = [
  {path:'get-cards', component:GetCardsComponent},
  {path:'get-purchases', component:GetPurchaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
