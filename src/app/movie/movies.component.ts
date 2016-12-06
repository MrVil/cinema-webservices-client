import {Component} from '@angular/core';
import {Movie} from './movie';
import {MovieService} from './movie.service';

@Component({
  selector: 'movies',
  template: require('./movies.html'),
  providers: [MovieService]
})

export class MoviesComponent {
  movies:Movie[] = [];

  constructor(private movieService: MovieService){
    this.movieService.findMovies().subscribe(
      movies => {
        movies.forEach(movie => {
          this.movies.push(movie);
        });
      }
    );
  }
}