import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {CategoriesComponent} from './category/categories.component';
import {CategoryComponent} from './category/category.component';
import {ActorsComponent} from './actor/actors.component';
import {ActorComponent} from './actor/actor.component';
import {MoviesComponent} from './movie/movies.component';
import {MovieComponent} from './movie/movie.component';



@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    CategoryComponent,
    ActorsComponent,
    ActorComponent,
    MoviesComponent,
    MovieComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
