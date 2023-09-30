import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  private searchval: string = '';
  allMovies: any[] = [];
  allData: any[] = this.allMovies;
  totalProducts!: number;
  pageSize:number = 10;
  currentPage: number = 1;

  constructor(private GamesService: GamesService) {}

  ngOnInit(): void {
    this.GamesService.getAllMovies(this.currentPage,this.pageSize).subscribe({
      next: (data) => {
        console.log(data);
        this.allMovies = data.games;
        this.totalProducts=data.totalGames;
      },
    });
  }

  set searchValue(value: string) {
    this.searchval = value;
    console.log(this.searchval);
    this.searchallMovies(value);
  }

  searchallMovies(movieTitle: string) {
    this.GamesService.searchAllMovie(movieTitle).subscribe({
      next: (response) => {
        this.allMovies = response;
        this.allData = this.allMovies;
      },
    });
  }

  changePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.GamesService.getAllMovies(this.currentPage,this.pageSize).subscribe({
      next: (response) => {
        console.log("change",response,"page")
        this.allMovies = response.games;
        this.allData = this.allMovies;
      },
    });
  }
}
