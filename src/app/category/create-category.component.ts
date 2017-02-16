import {Component} from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';

@Component({
  selector: 'fountain-create-category',
  template: require('./create-category.html'),
  providers: [CategoryService]
})

export class CreateCategoryComponent {
  public category: Category;
  errorMessage: String;

  constructor(private categoryService: CategoryService) {
    this.category = new Category('Default');
  }

  onCreateClicked() {
    this.categoryService.create(this.category).subscribe(
                     category  => this.onCategoryCreated(category),
                     error =>  this.onCreationError(error));
  }

  onCategoryCreated(data: any) {
    window.location.href = '/categories';
  }

  onCreationError(error: any) {
    this.errorMessage = <any>error;
    window.location.href = '/categories';
  }
}
