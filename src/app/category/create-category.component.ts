import {Component} from '@angular/core';

@Component({
  selector: 'create-category',
  template: require('./create-category.html')
})

export class CreateCategoryComponent {
    constructor(private location: Location) {}
}
