import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { CharactersComponent } from './Pages/Character/characters/characters.component';
import { AuthorsComponent } from './Pages/Author/authors/authors.component';
import { MoviesComponent } from './Pages/Movies/movies/movies.component';
import { MovieDetailsComponent } from './Pages/Movies/movie-details/movie-details.component';
import { CharacterDetailsComponent } from './Pages/Character/character-details/character-details/character-details.component';
import { AuthorDetailsComponent } from './Pages/Author/author-details/author-details.component';
import { PublishersComponent } from './Pages/Publishers/publishers/publishers.component';
import { PublisherDetailsComponent } from './Pages/Publishers/publisher-details/publisher-details.component';
import { SeriesComponent } from './Pages/Series/series/series.component';
import { SeriesDetailsComponent } from './Pages/Series/series-details/series-details.component';
import { StoryArcsComponent } from './Pages/StoryArcs/story-arcs/story-arcs.component';
import { StoryArcsDetailsComponent } from './Pages/StoryArcs/story-arcs-details/story-arcs-details.component';
import { VolumesComponent } from './Pages/Volumes/volumes/volumes.component';
import { VolumeDetailsComponent } from './Pages/Volumes/volume-details/volume-details.component';
import { TeamDetailsComponent } from './Pages/Teams/team-details/team-details.component';
import { TeamsComponent } from './Pages/Teams/teams/teams.component';


const routes: Routes =
[
  { path: "", redirectTo: "Home", pathMatch: "full" },
  { path: "Home", component: HomeComponent},
  { path: "Characters", component: CharactersComponent},
  { path: "CharacterDetails/:id", component: CharacterDetailsComponent},
  { path: "Authors", component: AuthorsComponent},
  { path: "AuthorDetails/:id", component: AuthorDetailsComponent},
  { path: "Movies", component: MoviesComponent},
  { path: "MovieDetails/:id", component: MovieDetailsComponent},
  { path: "Publishers", component: PublishersComponent},
  { path: "PublisherDetails/:id", component: PublisherDetailsComponent},
  { path: "Series", component: SeriesComponent},
  { path: "SeriesDetails/:id", component: SeriesDetailsComponent},
  { path: "StoryArcs", component: StoryArcsComponent},
  { path: "StoryArcDetails/:id", component: StoryArcsDetailsComponent},
  { path: "Volumes", component: VolumesComponent},
  { path: "VolumeDetails/:id", component: VolumeDetailsComponent},
  { path: "Teams", component: TeamsComponent},
  { path: "TeamDetails/:id", component: TeamDetailsComponent},
  { path: "**", redirectTo: "Home", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
