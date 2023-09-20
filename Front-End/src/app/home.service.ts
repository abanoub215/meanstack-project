import { HttpClient } from '@angular/common/http/index.js';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  allProducts: any[] = [];
  constructor(private http: HttpClient) {}

  getAllProducts(pageNum:number=1,language: string = 'en-US'): Observable<any> {
    return this.http.get(
      `http://localhost:3000/products`
    );
  }

  getProductById(Id: number): Observable<any> {
    return this.http.get(
      `http://localhost:3000/products/${Id}`
    );
  }
}
