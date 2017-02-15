/// <reference path="../../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CategoriesComponent} from './category/categories.component';
import {CategoryComponent} from './category/category.component';
import {CreateCategoryComponent} from './category/create-category.component';
import {ActorsComponent} from './actor/actors.component';
import {MoviesComponent} from './movie/movies.component';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'categories',
    component: CategoriesComponent
  }, {
    path: 'categories/:id',
    component: CategoryComponent
  }, {
    path: 'create',
    component: CreateCategoryComponent
  }, {
    path: 'movies',
    component: MoviesComponent
  }, {
    path: 'actors',
    component: ActorsComponent
  }, {
    path: 'about',
    component: AboutComponent
  }
];

export const routing = RouterModule.forRoot(routes);
