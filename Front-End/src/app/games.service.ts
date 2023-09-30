import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  api: string = '4e7e6fd9dac20aab990497f467a08566';
  constructor(private http: HttpClient) {}
  getAllMovies(pageNumber: number=1, pageSize: number=5): Observable<any> {
    let querydata = `pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.http.get(`http://localhost:3000/games?${querydata}`);
  }
  getMovieById(prodId: number): Observable<any> {
    return this.http.get(`http://localhost:3000/games/${prodId}`);
  }

  searchAllMovie(movieName: string): Observable<any> {
    if (movieName == '') {
      return this.getAllMovies();
    } else {
      return this.http.get(
        // `https://api.themoviedb.org/3/search/movie?api_key=${this.api}&query=${movieName}`
        `http://localhost:3000/search/${movieName}`
      );
    }
  }
}
