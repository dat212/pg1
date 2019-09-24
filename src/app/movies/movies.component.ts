import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from '../movie.service';
import { MOVIES } from '../listMovie';
import { Movie } from '../movie';
import { Location } from '@angular/common';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: FormGroup;
  movies: Movie[];

  constructor(private movieService: MovieService, private location: Location) { }

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
    console.log(this.movies);
  }

  goBack() {
    this.location.back();
  }


}
