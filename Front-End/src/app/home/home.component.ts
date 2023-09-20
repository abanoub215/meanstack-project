import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // allProducts: any[] = [];
  // allData: any=this.allProducts
  // totalProductsNum!: number;
  // constructor(private homeServ: HomeService) {}

  ngOnInit(): void {
    // this.homeServ.getAllProducts().subscribe({
    //   next: (response) => {
    //     this.allProducts = response.results;
    //     this.allData = this.allProducts;
    //   },
    // });
  }

}
