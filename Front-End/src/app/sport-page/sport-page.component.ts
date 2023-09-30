import { Component, OnInit } from '@angular/core';
import { SportPageService } from '../sport-page.service';

@Component({
  selector: 'app-sport-page',
  templateUrl: './sport-page.component.html',
  styleUrls: ['./sport-page.component.css']
})
export class SportPageComponent implements OnInit{
  allSportProducts: any[]=[]
  constructor(private sportProductServ: SportPageService) {}

  ngOnInit(): void {
    this.sportProductServ.getAllSportProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.allSportProducts=data
      },
    });
  }

  toggleDetails(productId: number) {
    console.log(productId);
    for (const item of this.allSportProducts) {
      if (item.id == productId) {
        item.toggleDiscription = !item.toggleDiscription;
      }
    }
  }

  private searchval: string = '';

  search(productName: string) {
    this.sportProductServ.searchAllSportProducts(productName).subscribe({
      next: (data) => {
        
        this.allSportProducts = data.product;        
        console.log(data.product);
      },
    });
  }
  set searchValue(value: string) {
    this.searchval = value;
    this.search(value);
  }
}

