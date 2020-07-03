import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
    title = 'mycomics';

    constructor()
    {
    }

    ngOnInit()
    {

    }

    OnActivate(event)
    {
      let scrollToTop = window.setInterval(() =>
      {
          let pos = window.pageYOffset;
          if (pos > 0)
          {
              window.scrollTo(0, pos - 30);
          } else
          {
              window.clearInterval(scrollToTop);
          }
      }, 16);
    }
}
