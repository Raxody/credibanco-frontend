import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCardsComponent } from './Card/get-cards/get-cards.component';
import { GetPurchasesComponent } from './Card/get-purchases/get-purchases.component';

const routes: Routes = [
  {path:'get-cards', component:GetCardsComponent},
  {path:'get-purchases', component:GetPurchasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
