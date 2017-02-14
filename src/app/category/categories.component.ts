import {Component, OnInit} from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';

@Component({
  selector: 'categories',
  template: require('./categories.html'),
  providers: [CategoryService]
})

export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  errorMessage: string;
  mode = 'Observable';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
    console.log(this.categories);
  }

  getCategories() {
    this.categoryService.getCategories()
                     .subscribe(
                       categories => this.categories = categories,
                       error =>  this.errorMessage = <any>error);
  }

}
