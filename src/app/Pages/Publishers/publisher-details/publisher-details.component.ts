import { Component, OnInit } from '@angular/core';
import { PublisherModel } from 'src/app/ComicsVine/Models/Publisher';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicsVine } from 'src/app/ComicsVine/ComicsVine';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styleUrls: ['./publisher-details.component.css']
})
export class PublisherDetailsComponent implements OnInit
{

  publisher: PublisherModel;
  loading: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private comicVine: ComicsVine)
   {
      this.loading = false;
   }

  ngOnInit(): void
  {
    if(this.comicVine.itens.length == 0)
    {
      this.router.navigateByUrl("/publishers");
    }

    this.route.paramMap.subscribe( params =>
    {
      const id = params.get("id");

      const prePublisher = this.comicVine.itens.find(c => c.id == id);

      if(!prePublisher)
      {
         this.router.navigateByUrl("/publishers");
      }

      this.loading = true;

      this.comicVine.LoadDetailedItem<PublisherModel>(PublisherModel, prePublisher)
        .subscribe((data) =>
        {
          setTimeout(() =>
          {
              this.publisher = this.comicVine.itens.find(c => c.id == id) as PublisherModel;

              if(!this.publisher.characters)
              {
                  this.router.navigateByUrl(this.router.url);
              }
              this.loading = false;

              console.log(this.publisher);
            }, 1000);
        });
    });
  }
}
