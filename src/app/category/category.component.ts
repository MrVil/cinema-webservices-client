import {Component, Input, OnInit} from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';
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

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
        // tslint:disable-next-line:no-string-literal
        .switchMap((params: Params) => this.categoryService.getCategory(+params['id']))
        .subscribe(category => this.category = category);

  }
}
