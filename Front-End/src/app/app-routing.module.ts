import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeProductsDetailsComponent } from './home-products-details/home-products-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'homeProducts', component: HomeComponent },
  { path: 'homeProductsDetails/:id', component: HomeProductsDetailsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'footer', component: FooterComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
