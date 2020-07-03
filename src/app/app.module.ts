import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicsVine } from './ComicsVine/ComicsVine';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './Pages/Home/home/home.component';
import { CharactersComponent } from './Pages/Character/characters/characters.component';
import { AuthorsComponent } from './Pages/Author/authors/authors.component';
import { MoviesComponent } from './Pages/Movies/movies/movies.component';
import { MovieDetailsComponent } from './Pages/Movies/movie-details/movie-details.component';
import { PublishersComponent } from './Pages/Publishers/publishers/publishers.component';
import { PublisherDetailsComponent } from './Pages/Publishers/publisher-details/publisher-details.component';
import { CharacterDetailsComponent } from './Pages/Character/character-details/character-details/character-details.component';
import { AuthorDetailsComponent } from './Pages/Author/author-details/author-details.component';
import { SeriesComponent } from './Pages/Series/series/series.component';
import { SeriesDetailsComponent } from './Pages/Series/series-details/series-details.component';
import { StoryArcsComponent } from './Pages/StoryArcs/story-arcs/story-arcs.component';
import { StoryArcsDetailsComponent } from './Pages/StoryArcs/story-arcs-details/story-arcs-details.component';
import { VolumesComponent } from './Pages/Volumes/volumes/volumes.component';
import { VolumeDetailsComponent } from './Pages/Volumes/volume-details/volume-details.component';
import { TeamsComponent } from './Pages/Teams/teams/teams.component';
import { TeamDetailsComponent } from './Pages/Teams/team-details/team-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,

    CharactersComponent,
    CharacterDetailsComponent,

    AuthorsComponent,
    AuthorDetailsComponent,

    MoviesComponent,
    MovieDetailsComponent,
    PublishersComponent,
    PublisherDetailsComponent,
    SeriesComponent,
    SeriesDetailsComponent,
    StoryArcsComponent,
    StoryArcsDetailsComponent,
    VolumesComponent,
    VolumeDetailsComponent,
    TeamsComponent,
    TeamDetailsComponent,
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
    ],
    providers: [ComicsVine],
  bootstrap: [AppComponent]
})
export class AppModule { }
