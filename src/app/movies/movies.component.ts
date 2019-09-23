import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from '../movie.service';
import { MOVIES } from '../listMovie';
import { Movie } from '../movie';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: FormGroup;
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movie = new FormGroup({
      movieName: new FormControl(),
      movieId: new FormControl()
    });

    this.getMovie();
    console.log(this.movie);
  }

  getMovie() {
    this.movies = this.movieService.getMovie();
  }

  // addMovie(id, name) {
  //   const newMovie: Movie = new Movie();
  //   id = this.movie.value.id;
  //   name = this.movie.value.name;
  //   newMovie.id = id;
  //   newMovie.name = name;
  //   this.movieService.addMovie(newMovie);
  // }



}
