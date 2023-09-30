import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SupermarketPageService {
  allSupermarketProducts: any[] = [];
  constructor(private http: HttpClient) { }
  getAllSupermarketProducts(): Observable<any> {
    return this.http.get(
      `http://localhost:3000/supermarketProducts`
    );
  }

  getProductById(Id: Number): Observable<any> {
    return this.http.get(
      `http://localhost:3000/products/${Id}`
    );
  }
  searchAllSupermarketProducts(productName: string): Observable<any> {
    if (productName == '') {
      return this.getAllSupermarketProducts();
    } else {
      return this.http.post(
        `http://localhost:3000/products/search`,  { productName: productName }
      );
    }
  }
}
