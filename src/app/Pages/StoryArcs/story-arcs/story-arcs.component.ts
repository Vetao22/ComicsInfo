import { Component, OnInit } from '@angular/core';
import { StoryArcModel } from 'src/app/ComicsVine/Models/StoryArc';
import { ComicsVine } from 'src/app/ComicsVine/ComicsVine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-arcs',
  templateUrl: './story-arcs.component.html',
  styleUrls: ['./story-arcs.component.css']
})
export class StoryArcsComponent implements OnInit
{
  storyArcs: Array<StoryArcModel>;

  loading: boolean;

  constructor(private comicVine: ComicsVine, private router: Router)
  {
    this.storyArcs = new Array<StoryArcModel>();

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
      if(this.comicVine.itens[0] instanceof StoryArcModel)
      {
        this.storyArcs = this.comicVine.itens as StoryArcModel[];
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

    this.comicVine.GetItens<StoryArcModel>(StoryArcModel, { responseType: "json" }, 10, true, this.comicVine.lastFilter).
        subscribe(() =>
        {
          setTimeout(() =>
          {
            if(!this.comicVine.itens.length)
            {
                this.router.navigateByUrl(this.router.url);
            }

            this.storyArcs = this.comicVine.itens as StoryArcModel[];

            this.loading = false;
          }, 1000);
        });
  }

}
