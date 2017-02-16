import {Component, OnInit, Input} from '@angular/core';
import {Movie} from './movie';
import {MovieService} from './movie.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Category} from '../category/category'

@Component({
  selector: 'fountain-movie',
  template: require('./movie.html'),
  providers: [MovieService]
})

export class MovieComponent implements OnInit {
  movie: Movie = new Movie('', 0, 0, 0, ' ', new Category(' '));

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
        // tslint:disable-next-line:no-string-literal
        .switchMap((params: Params) => this.movieService.getMovie(+params['id']))
        .subscribe(movie => this.movie = movie);
  }

  onSaveClicked() {
    this.movieService.modify(this.movie).subscribe(
      movie  => this.onMovieModified(movie),
      error =>  this.onCreationError(error));
  }

  onMovieModified(movie: Movie){
    window.location.href = '/movies';
  }

  onCreationError(error: any) {
    window.location.href = '/movies';
  }

}
