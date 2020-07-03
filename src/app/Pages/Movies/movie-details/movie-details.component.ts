import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/ComicsVine/Models/Movie';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicsVine } from 'src/app/ComicsVine/ComicsVine';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: MovieModel;
  loading: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private comicVine: ComicsVine)
   {
      this.loading = false;
   }

  ngOnInit(): void
  {
    if(this.comicVine.itens.length == 0)
    {
      this.router.navigateByUrl("/Movies");
    }

    this.route.paramMap.subscribe( params =>
    {
      const id = params.get("id");

      const preMovie = this.comicVine.itens.find(c => c.id == id);

      if(!preMovie)
      {
         this.router.navigateByUrl("/Movies");
      }

      this.loading = true;

      this.comicVine.LoadDetailedItem<MovieModel>(MovieModel, preMovie)
        .subscribe((data) =>
        {
          setTimeout(() =>
          {
              this.movie = this.comicVine.itens.find(c => c.id == id) as MovieModel;

              if(!this.movie.characters)
              {
                  this.router.navigateByUrl(this.router.url);
              }
              this.loading = false;

              console.log(this.movie);
            }, 1000);
        });
    });
  }

}
