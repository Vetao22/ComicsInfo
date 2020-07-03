import { Component, OnInit } from '@angular/core';
import { StoryArcModel } from 'src/app/ComicsVine/Models/StoryArc';
import { ComicsVine } from 'src/app/ComicsVine/ComicsVine';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story-arcs-details',
  templateUrl: './story-arcs-details.component.html',
  styleUrls: ['./story-arcs-details.component.css']
})
export class StoryArcsDetailsComponent implements OnInit
{

  storyArc: StoryArcModel;
  loading: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private comicVine: ComicsVine)
   {
      this.loading = false;
   }

  ngOnInit(): void
  {
    if(this.comicVine.itens.length == 0)
    {
      this.router.navigateByUrl("/StoryArcs");
    }

    this.route.paramMap.subscribe( params =>
    {
      const id = params.get("id");

      const preStoryArc = this.comicVine.itens.find(c => c.id == id);

      if(!preStoryArc)
      {
         this.router.navigateByUrl("/StoryArc");
      }

      this.loading = true;

      this.comicVine.LoadDetailedItem<StoryArcModel>(StoryArcModel, preStoryArc)
        .subscribe((data) =>
        {
          setTimeout(() =>
          {
              this.storyArc = this.comicVine.itens.find(c => c.id == id) as StoryArcModel;

              if(!this.storyArc.publisher)
              {
                  this.router.navigateByUrl(this.router.url);
              }
              this.loading = false;

              console.log(this.storyArc);
            }, 1000);
        });
    });
  }
}
