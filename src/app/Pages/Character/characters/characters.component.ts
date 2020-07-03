import { Component, OnInit } from '@angular/core';
import { CharacterModel } from '../../../ComicsVine/Models/Character';
import { ComicsVine } from '../../../ComicsVine/ComicsVine';
import { networkInterfaces } from 'os';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit
{

  characters: Array<CharacterModel>;

  loading: boolean;

  constructor(private comicVine: ComicsVine, private router: Router)
  {
    this.characters = new Array<CharacterModel>();

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
      if(this.comicVine.itens[0] instanceof CharacterModel)
      {
        this.characters = this.comicVine.itens as CharacterModel[];
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

    this.comicVine.GetItens<CharacterModel>(CharacterModel, { responseType: "json" }, 10, true, this.comicVine.lastFilter).
        subscribe(() =>
        {
          setTimeout(() =>
          {
            if(!this.comicVine.itens.length)
            {
                this.router.navigateByUrl(this.router.url);
            }

            this.characters = this.comicVine.itens as CharacterModel[];
            this.loading = false;
          }, 1000);
        });
  }

}
