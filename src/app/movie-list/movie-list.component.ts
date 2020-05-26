import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() data: any;

  constructor(private route: ActivatedRoute, private service: MoviesService) {}

  ngOnInit(): void {}
  // addToWatchlist(index: number) {
  //   let newMovie = {
  //     image: 'https://image.tmdb.org/t/p/w500/{{movie.poster_path}}',
  //     //What to call?!
  //     title: this.data[index].original_title,
  //     date: this.data.release_date,
  //   };
  //   this.watchlistContainer.push(newMovie);
  //   this.service.setWatchlistMovie(this.watchlistContainer);
  // }

  addToWatchlist(movie: any) {
    this.service.addToWatchlist(movie);
  }
}
