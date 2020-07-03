import { Component, OnInit } from '@angular/core';
import { SeriesModel } from 'src/app/ComicsVine/Models/Series';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicsVine } from 'src/app/ComicsVine/ComicsVine';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit
{

  series: SeriesModel;
  loading: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private comicVine: ComicsVine)
   {
      this.loading = false;
   }

  ngOnInit(): void
  {
    if(this.comicVine.itens.length == 0)
    {
      this.router.navigateByUrl("/Series");
    }

    this.route.paramMap.subscribe( params =>
    {
      const id = params.get("id");

      const preSeries = this.comicVine.itens.find(c => c.id == id);

      if(!preSeries)
      {
         this.router.navigateByUrl("/Series");
      }

      this.loading = true;

      this.comicVine.LoadDetailedItem<SeriesModel>(SeriesModel, preSeries)
        .subscribe((data) =>
        {
          setTimeout(() =>
          {
              this.series = this.comicVine.itens.find(c => c.id == id) as SeriesModel;

              if(!this.series.startYear)
              {
                  this.router.navigateByUrl(this.router.url);
              }
              this.loading = false;

              console.log(this.series);
            }, 1000);
        });
    });
  }
}
