import {Movie} from './movie';
import {Observable} from 'rxjs/Rx';

export class MovieService {
  findMovies(): Observable<Movie[]>{
    return Observable.of([
      new Movie('Star Wars episode I'),
      new Movie('Star Wars episode II'),
      new Movie('Star Wars episode III'),
      new Movie('Star Wars episode IV'),
      new Movie('Star Wars episode V'),
      new Movie('Star Wars episode VI'),
      new Movie('Star Wars episode VII')
    ]);
  }
}