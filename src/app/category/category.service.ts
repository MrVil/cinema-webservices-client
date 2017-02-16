import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Category } from './category';

@Injectable()
export class CategoryService {

  private categoriesUrl = 'http://localhost:8080/api/category';  // url to web API

  constructor (private http: Http) {}

  getCategories (): Observable<Category[]> {
    return this.http.get(this.categoriesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  create(category: Category): Observable<Category> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.categoriesUrl, JSON.stringify(category), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  delete(link: string): Observable<Category> {
    return this.http.delete(link)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body._embedded.Category || { };
  }

  private handleError (error: Response | any) {
    // in a real world app, we might use a remote logging infrastructure
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);

    return Observable.throw(errMsg);
  }
}
