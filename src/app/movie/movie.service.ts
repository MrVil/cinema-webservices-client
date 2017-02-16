import {Movie} from './movie';
import {Observable} from 'rxjs/Observable';

import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  private moviesUrl = 'http://localhost:8080/api/movie';  // url to web API

  constructor (private http: Http) {}

  getMovies (): Observable<Movie[]> {
    return this.http.get(this.moviesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


    getMovie (id: number): Observable<Movie> {
      return this.http.get(this.moviesUrl + '/' + id)
                      .map(res => res.json())
                      .catch(this.handleError);
    }

    create(movie: Movie): Observable<Movie> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(this.moviesUrl, JSON.stringify(movie), options)
                      .map(res => res.json())
                      .catch(this.handleError);
    }

    modify(movie: Movie): Observable<Movie> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.put(movie._links.self.href, JSON.stringify(movie), options)
                      .map(res => res.json())
                      .catch(this.handleError);
    }

  deleteMovie (mov: Movie) {
      console.log(mov._links.self.href);
      return this.http.delete(mov._links.self.href).subscribe((res) =>{});
  }

  private extractData(res: Response) {
    var body = res.json();
    var movs: Movie[] = [];
    if (body._embedded.Movie) {
      for (let m of body._embedded.Movie){
        let mov: Movie = new Movie(m.title, m.budget, m.income, m.length, m.releaseDate, m.category);
        mov._links = m._links;
        movs.push(mov);
      }
    }
    return movs || { };
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
