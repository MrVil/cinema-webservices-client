import {Component, Input} from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';

@Component({
  selector: 'fountain-create-category',
  template: require('./create-category.html'),
  providers: [CategoryService]
})

export class CreateCategoryComponent {
  @Input() category: Category = new Category('Default');
  errorMessage: String;

  constructor(private categoryService: CategoryService) {}

  onCreateClicked() {
    this.categoryService.create(this.category).subscribe(
                     category  => this.category = category,
                     error =>  this.errorMessage = <any>error);
  }
}
