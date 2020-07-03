import { Component, OnInit } from '@angular/core';
import { PublisherModel } from 'src/app/ComicsVine/Models/Publisher';
import { ComicsVine } from 'src/app/ComicsVine/ComicsVine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit
{

  publishers: Array<PublisherModel>;

  loading: boolean;

  constructor(private comicVine: ComicsVine, private router: Router)
  {
    this.publishers = new Array<PublisherModel>();

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
      if(this.comicVine.itens[0] instanceof PublisherModel)
      {
        this.publishers = this.comicVine.itens as PublisherModel[];
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

    this.comicVine.GetItens<PublisherModel>(PublisherModel, { responseType: "json" }, 10, true, this.comicVine.lastFilter).
        subscribe(() =>
        {
          setTimeout(() =>
          {
            if(!this.comicVine.itens.length)
            {
                this.router.navigateByUrl(this.router.url);
            }

            this.publishers = this.comicVine.itens as PublisherModel[];
            this.loading = false;
          }, 1000);
        });
  }
}
