import { Injectable } from '@angular/core';
import { MOVIES } from './listMovie';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies = MOVIES;

  constructor(private route: ActivatedRoute) { }

  addMovie(newMovie: Movie) {
    this.movies.push(newMovie);
  }

  getMovie() {
    return this.movies;
  }

  getMovieById(id: number) {
    return this.movies[id];
  }

}
