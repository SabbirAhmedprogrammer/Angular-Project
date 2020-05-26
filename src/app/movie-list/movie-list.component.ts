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

  showIndex: number = null;

  constructor(private route: ActivatedRoute, private service: MoviesService) { }

  ngOnInit(): void { }

  addToWatchlist(movie: any) {
    this.service.addToWatchlist(movie);
  }

  setShowIndex(index: number) {
    this.showIndex = index;
  }

  removeShowIndex() {
    this.showIndex = null;
  }


}
