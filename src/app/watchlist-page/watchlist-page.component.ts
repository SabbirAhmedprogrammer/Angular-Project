import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css'],
})
export class WatchlistPageComponent implements OnInit {
  data: any = null;

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.data = this.service.getWatchlist();
  }

  // getData() {
  //   this.service.getData("2012").subscribe(response => {
  //     console.log(response);
  //   })
  // }
}

// this.data = this.service.getData()
//so this sends a response and we wait for the response, then do something via .subscribe.
//the .get method is the observable
