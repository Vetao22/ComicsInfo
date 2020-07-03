import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterModel } from 'src/app/ComicsVine/Models/Character';
import { ComicsVine } from 'src/app/ComicsVine/ComicsVine';

@Component({
  selector: 'character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit
{
  char: CharacterModel;
  loading: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private comicVine: ComicsVine)
   {
      this.loading = false;
   }

  ngOnInit(): void
  {
    if(this.comicVine.itens.length == 0)
    {
      this.router.navigateByUrl("/Characters");
    }

    this.route.paramMap.subscribe( params =>
    {
      const id = params.get("id");

      const preChar = this.comicVine.itens.find(c => c.id == id);

      if(!preChar)
      {
         this.router.navigateByUrl("/Characters");
      }

      this.loading = true;

      this.comicVine.LoadDetailedItem<CharacterModel>(CharacterModel, preChar)
        .subscribe((data) =>
        {
          setTimeout(() =>
          {
              this.char = this.comicVine.itens.find(c => c.id == id) as CharacterModel;

              if(!this.char.description && !this.char.deck)
              {
                  this.router.navigateByUrl(this.router.url);
              }
              this.loading = false;

              console.log(this.router.url);
            }, 1000);
        });
    });
  }

}
