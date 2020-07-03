import { Component, OnInit } from '@angular/core';
import { TeamModel } from 'src/app/ComicsVine/Models/Team';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicsVine } from 'src/app/ComicsVine/ComicsVine';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit
{
  team: TeamModel;
  loading: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private comicVine: ComicsVine)
   {
      this.loading = false;
   }

  ngOnInit(): void
  {
    if(this.comicVine.itens.length == 0)
    {
      this.router.navigateByUrl("/Teams");
    }

    this.route.paramMap.subscribe( params =>
    {
      const id = params.get("id");

      const preTeam = this.comicVine.itens.find(c => c.id == id);

      if(!preTeam)
      {
         this.router.navigateByUrl("/Teams");
      }

      this.loading = true;

      this.comicVine.LoadDetailedItem<TeamModel>(TeamModel, preTeam)
        .subscribe((data) =>
        {
          setTimeout(() =>
          {
              this.team = this.comicVine.itens.find(c => c.id == id) as TeamModel;

              if(!this.team.characters)
              {
                  this.router.navigateByUrl(this.router.url);
              }
              this.loading = false;

              console.log(this.team);
            }, 1000);
        });
    });
  }

}
