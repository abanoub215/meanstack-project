import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
// import { HomeProductsDetailsComponent } from './home-products-details/home-products-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { BeautyPageComponent } from './beauty-page/beauty-page.component';
import { BeautyProductDetailsComponent } from './beauty-product-details/beauty-product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component'
import { HomeProductsDetailsComponent } from './home-products-details/home-products-details.component';
import { GamesComponent } from './games/games.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GamesDetailsComponent } from './games-details/games-details.component';
import { SupermarketPageComponent } from './supermarket-page/supermarket-page.component';
import { MobilesDetailsComponent } from './mobiles-details/mobiles-details.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { LoginComponent } from './login/login.component';
import { SportPageComponent } from './sport-page/sport-page.component';
import { SportProductsDetailsComponent } from './sport-products-details/sport-products-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeProductsDetailsComponent,
    AboutUsComponent,
    FooterComponent,
    BeautyPageComponent,
    BeautyProductDetailsComponent,
    ShoppingCartComponent,
    GamesComponent,
    GamesDetailsComponent,
    SupermarketPageComponent,
    SignupComponent,
    MobilesComponent,
    MobilesDetailsComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    LoginComponent,
    SportPageComponent,
    SportProductsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
