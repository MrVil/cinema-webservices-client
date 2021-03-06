import {Component} from '@angular/core';
import {Actor} from './actor';
import {ActorService} from './actor.service';

@Component({
  selector: 'fountain-actors',
  template: require('./actors.html'),
  providers: [ActorService]
})

export class ActorsComponent {
  actors: Actor[] = [];

  constructor(private actorService: ActorService) {
    this.actorService.getActors().subscribe(
      actors => {
        actors.forEach(actor => {
          this.actors.push(actor);
        });
      }
    );
  }

  removeActor(act: Actor) {
    window.location.reload();
  }
}
