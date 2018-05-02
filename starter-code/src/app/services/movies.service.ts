import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import movies from "../../sample-movies";


@Injectable()
export class MoviesService {
  movies: Movie[] = movies;
  

  constructor() { }

  getMovies(): Array<object> {
    return this.movies;
  }

  getMovie(id): Movie {
    return this.movies.find((movie): boolean => {
      return movie.id === id;
    });
  }

}
