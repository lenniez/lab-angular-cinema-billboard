import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
  providers: [MoviesService]
})
export class MyMovieComponent implements OnInit {
  movieId: number;
  currentMovie: any;

  constructor(private route: ActivatedRoute, private movies: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.movieId = Number(params.id);
      console.log(this.movieId);

      this.currentMovie = this.movies.getMovie(this.movieId);
      console.log(this.currentMovie);
    });
  }

}
