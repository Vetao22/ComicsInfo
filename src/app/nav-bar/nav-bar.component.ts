import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterModel } from '../ComicsVine/Models/Character';
import { ComicsVine } from '../ComicsVine/ComicsVine';
import { PersonModel } from '../ComicsVine/Models/Person';
import { MovieModel } from '../ComicsVine/Models/Movie';
import { PublisherModel } from '../ComicsVine/Models/Publisher';
import { SeriesModel } from '../ComicsVine/Models/Series';
import { StoryArcModel } from '../ComicsVine/Models/StoryArc';
import { VolumeModel } from '../ComicsVine/Models/Volume';
import { TeamModel } from '../ComicsVine/Models/Team';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title: string;

  constructor(private comicVine: ComicsVine, private router: Router) { }

  ngOnInit(): void
  {

  }

  Search(searchType: string, searchTerm: string): void
  {
    if(searchTerm)
    {
      this.router.navigateByUrl("/Home");

      switch (searchType) {
        case "Characters":
          this.comicVine.GetItens<CharacterModel>(CharacterModel, { responseType: 'json' },
            10, true, `name:${searchTerm}`).toPromise().then(() => { this.router.navigateByUrl("/Characters"); });
          break;

        case "Authors":
          this.comicVine.GetItens<PersonModel>(PersonModel, { responseType: 'json' },
            10, true, `name:${searchTerm}`).toPromise().then(() => { this.router.navigateByUrl("/Authors"); });
          break;

        case "Movies":
          this.comicVine.GetItens<MovieModel>(MovieModel, { responseType: 'json' },
            10, true, `name:${searchTerm}`).toPromise().then(() => { this.router.navigateByUrl("/Movies"); });
          break;

        case "Publishers":
          this.comicVine.GetItens<PublisherModel>(PublisherModel, { responseType: 'json' },
            10, true, `name:${searchTerm}`).toPromise().then(() => { this.router.navigateByUrl("/Publishers"); });
          break;

        case "Series":
          this.comicVine.GetItens<SeriesModel>(SeriesModel, { responseType: 'json' },
            10, true, `name:${searchTerm}`).toPromise().then(() => { this.router.navigateByUrl("/Series"); });
          break;

        case "StoryArcs":
          this.comicVine.GetItens<StoryArcModel>(StoryArcModel, { responseType: 'json' },
            10, true, `name:${searchTerm}`).toPromise().then(() => { this.router.navigateByUrl("/StoryArcs"); });
          break;

        case "Volumes":
          this.comicVine.GetItens<VolumeModel>(VolumeModel, { responseType: 'json' },
            10, true, `name:${searchTerm}`).toPromise().then(() => { this.router.navigateByUrl("/Volumes"); });
          break;

        case "Teams":
          this.comicVine.GetItens<TeamModel>(TeamModel, { responseType: 'json' },
            10, true, `name:${searchTerm}`).toPromise().then(() => { this.router.navigateByUrl("/Teams"); });
          break;

        default:
          break;
      }
    }
  }

}
