import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'score', loadChildren: './score/score.module#ScorePageModule' },
  { path: 'success', loadChildren: './success/success.module#SuccessPageModule' },
    { path: 'fail', loadChildren: './fail/fail.module#FailPageModule' },
  { path: 'offers', loadChildren: './offers/offers.module#OffersPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
