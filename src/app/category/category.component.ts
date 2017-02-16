import {Component, Input, OnInit} from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'fountain-category',
  template: require('./category.html')
})

export class CategoryComponent implements OnInit {
  @Input() category: Category;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.route.params
    //     .switchMap((params: Params) => this.categoryService.getCategory(+params['id']))
    //     .subscribe(category => this.category = category)

  }
}
