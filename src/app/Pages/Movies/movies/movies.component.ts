import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../../ComicsVine/Models/Movie';
import { ComicsVine } from '../../../ComicsVine/ComicsVine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit
{

  movies: Array<MovieModel>;

  loading: boolean;

  constructor(private comicVine: ComicsVine, private router: Router)
  {
    this.movies = new Array<MovieModel>();

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
      if(this.comicVine.itens[0] instanceof MovieModel)
      {
        this.movies = this.comicVine.itens as MovieModel[];
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

    this.comicVine.GetItens<MovieModel>(MovieModel, { responseType: "json" }, 10, true, this.comicVine.lastFilter).
        subscribe(() =>
        {
          setTimeout(() =>
          {
            if(!this.comicVine.itens.length)
            {
                this.router.navigateByUrl(this.router.url);
            }

            this.movies = this.comicVine.itens as MovieModel[];
            this.loading = false;
          }, 1000);
        });
  }

}
