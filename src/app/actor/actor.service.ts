import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import {Actor} from './actor';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ActorService {

  private actorsUrl = 'http://localhost:8080/api/actor'

  /*findActors(): Observable<Actor[]> {
    return Observable.of([
      new Actor('John'),
      new Actor('Phillips'),
      new Actor('Keira'),
      new Actor('Silvie')
    ]);
  }*/

  constructor (private http: Http) {}

  getActors(): Observable<Actor[]> {
    return this.http.get(this.actorsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  create(actor: Actor): Observable<Actor> {
    console.log('Service called !');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.actorsUrl, JSON.stringify(actor), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteActor (act: Actor) {
    console.log(`${act._links.self.href}`);
    return this.http.delete(`${act._links.self.href}`).subscribe((res) =>{});
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(res);
    console.log(body);
    return body._embedded.Actor || { };
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
