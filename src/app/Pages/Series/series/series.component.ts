import { Component, OnInit } from '@angular/core';
import { SeriesModel } from 'src/app/ComicsVine/Models/Series';
import { ComicsVine } from 'src/app/ComicsVine/ComicsVine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit
{

  series: Array<SeriesModel>;

  loading: boolean;

  constructor(private comicVine: ComicsVine, private router: Router)
  {
    this.series = new Array<SeriesModel>();

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
      if(this.comicVine.itens[0] instanceof SeriesModel)
      {
        this.series = this.comicVine.itens as SeriesModel[];
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

    this.comicVine.GetItens<SeriesModel>(SeriesModel, { responseType: "json" }, 10, true, this.comicVine.lastFilter).
        subscribe(() =>
        {
          setTimeout(() =>
          {
            if(!this.comicVine.itens.length)
            {
                this.router.navigateByUrl(this.router.url);
            }

            this.series = this.comicVine.itens as SeriesModel[];

            this.loading = false;
          }, 1000);
        });
  }

}
