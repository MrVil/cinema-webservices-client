import {Component, Input} from '@angular/core';
import {Category} from './category';

@Component({
  selector: 'fountain-create-category',
  template: require('./create-category.html')
})

export class CreateCategoryComponent {
  @Input() category: Category;
}
