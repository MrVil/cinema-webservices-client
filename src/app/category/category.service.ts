import {Category} from './category';
import {Observable} from 'rxjs/Rx';

export class CategoryService {
  findCategories(): Observable<Category[]>{
    return Observable.of([
      new Category('Horror'),
      new Category('Action'),
      new Category('Bromance'),
      new Category('Nuclear')
    ]);
  }
}