import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  data: any = null;
  constructor(private route: ActivatedRoute, private service: MoviesService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      console.log(response);
      this.service.getDiscoverData(response.year, response.vote, response.genre).subscribe((response) => {
        this.data = response;
        console.log(response);
      });
    });
  }

}
