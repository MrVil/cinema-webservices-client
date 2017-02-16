/**
 * Created by thomasd on 16/02/17.
 */
import {Component, Input} from '@angular/core';
import {Actor} from './actor';
import {ActorService} from "./actor.service";

@Component({
  selector: 'fountain-create-actor',
  template: require('./create-actor.html'),
  providers: [ActorService]
})

export class CreateActorComponent {
  public actor: Actor;
  errorMessage: String;

  constructor(private actorService: ActorService) {
    this.actor = new Actor('Default','default','default','default');
  }

  onCreateClicked() {
    this.actorService.create(this.actor).subscribe(
      actor  => this.onActorCreated(actor),
      error =>  this.onCreationError(error));
  }

  onActorCreated(data: any) {
    window.location.href = '/actors';
  }

  onCreationError(error: any) {
    this.errorMessage = <any>error;
    window.location.href = '/actors';
  }
}
