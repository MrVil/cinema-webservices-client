import {Component, Input} from '@angular/core';
import {Movie} from './movie'

@Component({
  selector: 'movie',
  template: require('./movie.html')
})

export class MovieComponent {
  @Input() item: Movie;
}