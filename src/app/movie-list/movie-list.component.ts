import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  data: any = {};
  watchlistContainer = [];

  constructor(private route: ActivatedRoute, private service: MoviesService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      // console.log(response);
      this.service.getDiscoverData(response.year, response.voteCount, response.genre).subscribe((response) => {
        this.data = response;
        // console.log(response);
      });
    });
  }
  addToWatchlist(index: number) {
    newMovie = {
      image: "https://image.tmdb.org/t/p/w500/{{movie.poster_path}}",
      title: movie[index].original_title,
      date: movie.release_date,
    };
    this.watchlistContainer.push(newMovie);
    this.service.setWatchlistMovie(this.watchlistContainer);
  }

}
// response.vote was changed to response.votecount because of search-criteria.component.ts