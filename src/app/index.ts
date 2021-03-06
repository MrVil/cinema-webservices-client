import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {HttpModule}    from '@angular/http';
import {FormsModule}   from '@angular/forms';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {CategoriesComponent} from './category/categories.component';
import {CategoryComponent} from './category/category.component';
import {CreateCategoryComponent} from './category/create-category.component';
import {ActorsComponent} from './actor/actors.component';
import {ActorComponent} from './actor/actor.component';
import {MoviesComponent} from './movie/movies.component';
import {MovieComponent} from './movie/movie.component';

import {CategoryService} from './category/category.service';
import {ActorService} from './actor/actor.service';
import {MovieService} from './movie/movie.service';
import {CreateActorComponent} from "./actor/create-actor-component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
    CreateCategoryComponent,
    CreateActorComponent,
    ActorsComponent,
    ActorComponent,
    MoviesComponent,
    MovieComponent
  ],
  bootstrap: [RootComponent],
  providers: [CategoryService, ActorService, MovieService]
})
export class AppModule {}
