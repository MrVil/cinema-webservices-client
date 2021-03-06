import {Component, OnInit} from '@angular/core';
import {Movie} from './movie';
import {MovieService} from './movie.service';

@Component({
  selector: 'fountain-movies',
  template: require('./movies.html'),
  providers: [MovieService]
})

export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  errorMessage: string;
  mode = 'Observable';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies()
      .subscribe(
      movies => this.movies = movies,
      error => this.errorMessage = <any>error);
  }

  delete_btn_clicked(event: Movie) {
    console.log(this.movieService.deleteMovie(event));
    // window.location.reload();
  }

  onModify(movie: Movie) {
    location.href = 'movies/' + movie.getId();
  }
}
