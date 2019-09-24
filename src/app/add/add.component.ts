import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  movieAdd: FormGroup;

  constructor(private movieService: MovieService, private location: Location) { }

  ngOnInit() {
    this.movieAdd = new FormGroup({
      movieId: new FormControl(),
      movieName: new FormControl()
    });

  }

  addMovie() {
    console.log(this.movieAdd.value);

    const newMovie = new Movie();

    newMovie.id = +this.movieAdd.value.movieId;
    newMovie.name = this.movieAdd.value.movieName;
    console.log(newMovie);
    this.movieService.addMovie(newMovie);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
