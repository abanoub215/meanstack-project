import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeProductsDetailsComponent } from './home-products-details/home-products-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { BeautyPageComponent } from './beauty-page/beauty-page.component';
import { BeautyProductDetailsComponent } from './beauty-product-details/beauty-product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { GamesComponent } from './games/games.component';
import { GamesDetailsComponent } from './games-details/games-details.component';
import { SignupComponent } from './signup/signup.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { MobilesDetailsComponent } from './mobiles-details/mobiles-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { LoginComponent } from './login/login.component';
import { SupermarketPageComponent } from './supermarket-page/supermarket-page.component';
import { SportPageComponent } from './sport-page/sport-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/:id', component: GamesDetailsComponent },
  { path: '', component: HomeComponent },
  { path: 'homeProducts', component: HomeComponent },
  { path: 'homeProductsDetails/:id', component: HomeProductsDetailsComponent },
  { path: 'beautyProducts', component: BeautyPageComponent },
  { path: 'beautyProductsDetails/:id', component: BeautyProductDetailsComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'mobiles', component: MobilesComponent },
  { path: 'mobilesDetails/:id', component: MobilesDetailsComponent },
  { path: 'electronicsProducts', component: ProductsComponent },
  { path: 'electronicsProductsDetails/:id', component:ProductsDetailsComponent },
  { path: 'login', component:LoginComponent },
  { path: 'supermarket', component:SupermarketPageComponent },
  { path: 'sport', component:SportPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
