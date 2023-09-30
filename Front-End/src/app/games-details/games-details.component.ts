import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { MoviesService } from '../movies.service';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-details',
  templateUrl: './games-details.component.html',
  styleUrls: ['./games-details.component.css']
})
export class GamesDetailsComponent implements OnInit {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  selectedmovie: any;
  //Dependency Injection
  constructor(
    private route: ActivatedRoute,
    private GamesService: GamesService
  ) {}
  //lifecycle function
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.GamesService.getMovieById(id).subscribe({
      next: (response) => {
        console.log(response);
        this.selectedmovie = response;
      },
    });
  }

}
