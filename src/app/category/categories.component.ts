import {Component} from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';

@Component({
  selector: 'categories',
  template: require('./categories.html'),
  providers: [CategoryService]
})

export class CategoriesComponent {
  categories:Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.findCategories().subscribe(
      categories => {
        categories.forEach(category => {
          this.categories.push(category);
        });
      }
    );
  }
}