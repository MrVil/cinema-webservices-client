import {Movie} from './movie';
import {Observable} from 'rxjs/Observable';

import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  private moviesUrl = 'http://localhost:8080/api/movie';  // url to web API

  constructor (private http: Http) {}

  getMoviesByUrl (url: string): Observable<Movie[]> {
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getMovies (): Observable<Movie[]> {
    return this.http.get(this.moviesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  deleteMovie (mov: Movie) {
      return this.http.delete(mov._links.self.href).subscribe((res) =>{});
  }

  private extractData(res: Response) {
    let body = res.json();
    return body._embedded.Movie || { };
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
