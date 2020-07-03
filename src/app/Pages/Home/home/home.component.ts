import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itens: Array<Object>;

  constructor()
   {
      this.itens = new Array<Object>();
   }

  async ngOnInit()
  {
      this.itens.push({ ImgSrc: "https://comicvine1.cbsistatic.com/uploads/scale_medium/11/117229/6777461-ce00l1hcatb21.jpg", Type: "Characters", Link: "/Characters" });
      this.itens.push({ ImgSrc: "https://comicvine1.cbsistatic.com/uploads/scale_medium/6/67663/6467101-6275694476-21366.jpg", Type: "Authors", Link: "/Authors" });
      this.itens.push({ ImgSrc:  "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/42/868515-watchmen_final_poster.jpg", Type: "Movies", Link: "/Movies" });
      this.itens.push({ ImgSrc: "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/40/5213245-dc_logo_blue_final.jpg", Type: "Publishers", Link: "/Publishers" });
      this.itens.push({ ImgSrc: "https://comicvine1.cbsistatic.com/uploads/scale_medium/1/14787/3332174-7526015225-s10po.jpg", Type: "Series", Link: "/Series" });
      this.itens.push({ ImgSrc: "https://comicvine1.cbsistatic.com/uploads/scale_medium/6/66303/2647272-aqm_cv15.jpeg", Type: "Story Arcs", Link: "/StoryArcs" });
      this.itens.push({ ImgSrc: "https://comicvine1.cbsistatic.com/uploads/original/0/54/81239-83951-infinite-crisis.jpg", Type: "Volumes", Link: "/Volumes" });
      this.itens.push({ ImgSrc: "https://comicvine1.cbsistatic.com/uploads/scale_medium/11112/111123579/6539556-teen%20tians%203.jpg", Type: "Teams", Link: "/Teams" });

  }

}
