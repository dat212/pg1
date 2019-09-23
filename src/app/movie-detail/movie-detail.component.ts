import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getMovieFromService(this.movie.id);
    this.getMovieFromRoute();
  }

  getMovieFromRoute() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.movie = this.movieService.getMovieById(id);
  }

}
