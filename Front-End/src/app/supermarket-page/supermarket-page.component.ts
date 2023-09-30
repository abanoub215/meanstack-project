import { Component, OnInit } from '@angular/core';
import { SupermarketPageService } from '../supermarket-page.service';
@Component({
  selector: 'app-supermarket-page',
  templateUrl: './supermarket-page.component.html',
  styleUrls: ['./supermarket-page.component.css']
})
export class SupermarketPageComponent implements OnInit{
  allSupermarketProducts: any[]=[]
  constructor(private supermarketProductServ: SupermarketPageService) {}

  ngOnInit(): void {
    this.supermarketProductServ.getAllSupermarketProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.allSupermarketProducts=data
      },
    });
  }

  toggleDetails(productId: number) {
    console.log(productId);
    for (const item of this.allSupermarketProducts) {
      if (item.id == productId) {
        item.toggleDiscription = !item.toggleDiscription;
      }
    }
  }

  private searchval: string = '';

  search(productName: string) {
    this.supermarketProductServ.searchAllSupermarketProducts(productName).subscribe({
      next: (data) => {
        
        this.allSupermarketProducts = data.product;        
        console.log(data.product);
      },
    });
  }
  set searchValue(value: string) {
    this.searchval = value;
    this.search(value);
  }
}
