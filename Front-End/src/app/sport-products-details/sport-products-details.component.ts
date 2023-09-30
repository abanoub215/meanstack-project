import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportPageService } from '../sport-page.service';
@Component({
  selector: 'app-sport-products-details',
  templateUrl: './sport-products-details.component.html',
  styleUrls: ['./sport-products-details.component.css']
})
export class SportProductsDetailsComponent implements OnInit{
  sportProduct: any;
  constructor(
    private route: ActivatedRoute,
    private  sportProductServ: SportPageService
  ) {}
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.sportProductServ.getProductById(id).subscribe({
      next: (data) => {
        // console.log(data);
        this.sportProduct = data;
      },
    });
  }
}
