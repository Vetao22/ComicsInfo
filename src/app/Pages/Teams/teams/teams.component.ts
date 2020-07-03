import { Component, OnInit } from '@angular/core';
import { TeamModel } from 'src/app/ComicsVine/Models/Team';
import { ComicsVine } from 'src/app/ComicsVine/ComicsVine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit
{
  teams: Array<TeamModel>;

  loading: boolean;

  constructor(private comicVine: ComicsVine, private router: Router)
  {
    this.teams = new Array<TeamModel>();

    this.loading = false;
  }

  ngOnInit(): void
  {
    if(this.comicVine.itens.length === 0)
    {
      this.Load();
    }
    else
    {
      if(this.comicVine.itens[0] instanceof TeamModel)
      {
        this.teams = this.comicVine.itens as TeamModel[];
      }
      else
      {
         this.Load();
      }
    }
  }

  Load(): void
  {
    this.loading = true;

    this.comicVine.GetItens<TeamModel>(TeamModel, { responseType: "json" }, 10, true, this.comicVine.lastFilter).
        subscribe(() =>
        {
          setTimeout(() =>
          {
            if(!this.comicVine.itens.length)
            {
                this.router.navigateByUrl(this.router.url);
            }

            this.teams = this.comicVine.itens as TeamModel[];

            this.loading = false;
          }, 1000);
        });
  }

}
