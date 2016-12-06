import {Component, Input} from '@angular/core';
import {Actor} from './actor'

@Component({
  selector: 'actor',
  template: require('./actor.html')
})

export class ActorComponent {
  @Input() item: Actor;
}