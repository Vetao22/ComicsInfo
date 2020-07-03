import { Component, OnInit } from '@angular/core';
import { VolumeModel } from 'src/app/ComicsVine/Models/Volume';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicsVine } from 'src/app/ComicsVine/ComicsVine';

@Component({
  selector: 'app-volume-details',
  templateUrl: './volume-details.component.html',
  styleUrls: ['./volume-details.component.css']
})
export class VolumeDetailsComponent implements OnInit
{
  volume: VolumeModel;
  loading: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private comicVine: ComicsVine)
   {
      this.loading = false;
   }

  ngOnInit(): void
  {
    if(this.comicVine.itens.length == 0)
    {
      this.router.navigateByUrl("/Volumes");
    }

    this.route.paramMap.subscribe( params =>
    {
      const id = params.get("id");

      const preVolume = this.comicVine.itens.find(c => c.id == id);

      if(!preVolume)
      {
         this.router.navigateByUrl("/Volumes");
      }

      this.loading = true;

      this.comicVine.LoadDetailedItem<VolumeModel>(VolumeModel, preVolume)
        .subscribe((data) =>
        {
          setTimeout(() =>
          {
              this.volume = this.comicVine.itens.find(c => c.id == id) as VolumeModel;

              if(!this.volume.countOfIssues)
              {
                  this.router.navigateByUrl(this.router.url);
              }
              this.loading = false;

              console.log(this.volume);
            }, 1000);
        });
    });
  }
}
