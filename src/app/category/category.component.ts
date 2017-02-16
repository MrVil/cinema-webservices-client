import {Component, OnInit} from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';
import {Movie} from '../movie/movie';
import {MovieService} from '../movie/movie.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'fountain-category',
  template: require('./category.html'),
  providers: [CategoryService]
})

export class CategoryComponent implements OnInit {
  category: Category = new Category('');
  movies: Movie[] = [];

  constructor(
    private categoryService: CategoryService,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
        // tslint:disable-next-line:no-string-literal
        .switchMap((params: Params) => this.categoryService.getCategory(+params['id']))
        .subscribe(category => this.onCategoryGet(category));
  }

  onCategoryGet(category: Category) {
    this.category = category;
    this.movieService.getMoviesByUrl(this.category._links.movies.href)
      .subscribe(movies => this.onMoviesGet(movies));
  }

  onMoviesGet(movies: Movie[]) {
    this.movies = movies;
  }

  onSaveClicked() {
    this.categoryService.modify(this.category).subscribe(
      category  => this.onCategoryModified(category),
      error =>  this.onCreationError(error));
  }

  onCategoryModified(category: Category){
    window.location.href = '/categories';
  }

  onCreationError(error: any) {
    window.location.href = '/categories';
  }

}
