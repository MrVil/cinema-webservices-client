import {Actor} from './actor';
import {Observable} from 'rxjs/Rx';

export class ActorService {
  findActors(): Observable<Actor[]>{
    return Observable.of([
      new Actor('John'),
      new Actor('Phillips'),
      new Actor('Keira'),
      new Actor('Silvie')
    ]);
  }
}