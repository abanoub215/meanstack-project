import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupermarketPageService } from '../supermarket-page.service';

@Component({
  selector: 'app-supermarket-products-details',
  templateUrl: './supermarket-products-details.component.html',
  styleUrls: ['./supermarket-products-details.component.css']
})
export class SupermarketProductsDetailsComponent implements OnInit{
  supermarketProduct: any;
  constructor(
    private route: ActivatedRoute,
    private  supermarketProductServ: SupermarketPageService
  ) {}
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.supermarketProductServ.getProductById(id).subscribe({
      next: (data) => {
        // console.log(data);
        this.supermarketProduct = data;
      },
    });
  }
}
