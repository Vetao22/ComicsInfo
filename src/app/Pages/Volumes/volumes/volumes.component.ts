import { Component, OnInit } from '@angular/core';
import { VolumeModel } from 'src/app/ComicsVine/Models/Volume';
import { ComicsVine } from 'src/app/ComicsVine/ComicsVine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.css']
})
export class VolumesComponent implements OnInit
{

  volumes: Array<VolumeModel>;

  loading: boolean;

  constructor(private comicVine: ComicsVine, private router: Router)
  {
    this.volumes = new Array<VolumeModel>();

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
      if(this.comicVine.itens[0] instanceof VolumeModel)
      {
        this.volumes = this.comicVine.itens as VolumeModel[];
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

    this.comicVine.GetItens<VolumeModel>(VolumeModel, { responseType: "json" }, 10, true, this.comicVine.lastFilter).
        subscribe(() =>
        {
          setTimeout(() =>
          {
            if(!this.comicVine.itens.length)
            {
                this.router.navigateByUrl(this.router.url);
            }

            this.volumes = this.comicVine.itens as VolumeModel[];

            this.loading = false;
          }, 1000);
        });
  }

}
