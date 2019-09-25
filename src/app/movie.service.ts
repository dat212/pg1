import { Injectable } from '@angular/core';
import { MOVIES } from './listMovie';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './movie';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies = MOVIES;
  behave = new BehaviorSubject<any>({});
  cast = this.behave.asObservable();

  constructor(private route: ActivatedRoute) { }

  setBehaviorView(behave: Object) {
    this.behave.next(behave);
  }

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
