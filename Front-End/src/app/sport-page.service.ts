import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SportPageService {
  allSportProducts: any[] = [];
  constructor(private http: HttpClient) { }
  getAllSportProducts(): Observable<any> {
    return this.http.get(
      `http://localhost:3000/sportProducts`
    );
  }

  getProductById(Id: Number): Observable<any> {
    return this.http.get(
      `http://localhost:3000/products/${Id}`
    );
  }
  searchAllSportProducts(productName: string): Observable<any> {
    if (productName == '') {
      return this.getAllSportProducts();
    } else {
      return this.http.post(
        `http://localhost:3000/products/search`,  { productName: productName }
      );
    }
  }
}
