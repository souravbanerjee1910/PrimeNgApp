import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  {path: '', component:NoPageFoundComponent},
 {path: 'listing', component:ListingComponent},
 {path: 'home', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
