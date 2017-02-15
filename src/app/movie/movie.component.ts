import {Component, OnInit} from '@angular/core';
import {Movie} from './movie';
import {MovieService} from './movie.service';

@Component({
  selector: 'movies',
  template: require('./movies.html'),
  providers: [MovieService]
})

export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  errorMessage: string;
  mode = 'Observable';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
    console.log(this.movies);
  }

  getMovies() {
    this.movieService.getMovies()
      .subscribe(
      movies => this.movies = movies,
      error => this.errorMessage = <any>error);
  }

  delete_btn_clicked() {
    /*console.log(event);
    this.movieService.deleteMovie(event);
    window.location.reload();
    */
  }

}
