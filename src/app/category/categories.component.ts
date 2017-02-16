import {Component, OnInit} from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';

@Component({
  selector: 'fountain-categories',
  template: require('./categories.html'),
  providers: [CategoryService]
})

export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  errorMessage: string;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
    console.log(new Category('').getId());
  }

  getCategories() {
    this.categoryService.getCategories()
                        .subscribe(
                          categories => this.onGet(categories),
                          error =>  this.errorMessage = <any>error);
  }

  onGet(data: any) {
    console.log(data);
    this.categories = data;
  }

  onDelete(category: Category) {
    this.categoryService.delete(category._links.self.href).subscribe(
        cat => this.onDeleteSuccess(category),
        error =>  this.onDeleteSuccess(category)/*this.errorMessage = <any>error*/
    );
  }

  onDeleteSuccess(category: Category) {
    var index = this.categories.indexOf(category, 0);
    if (index > -1) {
      this.categories.splice(index, 1);
    }
  }

  onModify(category: Category) {
    location.href = 'categories/' + category.getId();//+ category.getId();
  }

}
