import { Component, OnInit } from '@angular/core';
import { ComicsVine } from '../../../ComicsVine/ComicsVine';
import { Router } from '@angular/router';
import { PersonModel } from 'src/app/ComicsVine/Models/Person';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit
{

  authors: Array<PersonModel>;

  loading: boolean;

  constructor(private comicVine: ComicsVine, private router: Router)
  {
    this.authors = new Array<PersonModel>();

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
      if(this.comicVine.itens[0] instanceof PersonModel)
      {
        this.authors = this.comicVine.itens as PersonModel[];
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

    this.comicVine.GetItens<PersonModel>(PersonModel, { responseType: "json" }, 10, true, this.comicVine.lastFilter).
        subscribe(() =>
        {
          setTimeout(() =>
          {
            if(!this.comicVine.itens.length)
            {
                this.router.navigateByUrl(this.router.url);
            }

            this.authors = this.comicVine.itens as PersonModel[];

            this.loading = false;
          }, 1000);
        });
  }
}
