import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonModel } from 'src/app/ComicsVine/Models/Person';
import { ComicsVine } from 'src/app/ComicsVine/ComicsVine';

@Component({
  selector: 'author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit
{
  author: PersonModel;
  loading: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private comicVine: ComicsVine)
   {
      this.loading = false;
   }

  ngOnInit(): void
  {
    if(this.comicVine.itens.length == 0)
    {
      this.router.navigateByUrl("/Authors");
    }

    this.route.paramMap.subscribe( params =>
    {
      const id = params.get("id");

      const preAuthor = this.comicVine.itens.find(c => c.id == id);

      if(!preAuthor)
      {
         this.router.navigateByUrl("/Authors");
      }

      this.loading = true;

      this.comicVine.LoadDetailedItem<PersonModel>(PersonModel, preAuthor)
        .subscribe((data) =>
        {
          setTimeout(() =>
          {
              this.author = this.comicVine.itens.find(c => c.id == id) as PersonModel;

              if(!this.author.deck && !this.author.description && !this.author.country)
              {
                  this.router.navigateByUrl(this.router.url);
              }
              this.loading = false;

              console.log(this.author);
            }, 1000);
        });
    });
  }

}
