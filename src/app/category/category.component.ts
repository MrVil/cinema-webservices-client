import {Component, Input} from '@angular/core';
import {Category} from './category'

@Component({
  selector: 'category',
  template: require('./category.html')
})

export class CategoryComponent {
  @Input() item: Category;
}