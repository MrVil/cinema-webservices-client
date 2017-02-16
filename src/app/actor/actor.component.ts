import {Component, Input} from '@angular/core';
import {Actor} from './actor';

@Component({
  selector: 'fountain-actor',
  template: require('./actor.html')
})

export class ActorComponent {
  @Input() item: Actor;
}
