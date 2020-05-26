import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  popularMovies: any;
  genre: any = null;
  data: Object;

  constructor(
    private service: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      console.log(response);
      this.service
        .getDiscoverData(response.year, response.voteCount, response.genre)
        .subscribe((response) => {
          this.data = response;
          console.log(response);
        });
    });

    this.service.getGenreData().subscribe((response) => {
      this.genre = response;
    });

    // why the brackets and quotes?
    this.service.getPopularMovies().subscribe((response) => {
      this.popularMovies = response['results'];
    });
  }

  getFormData(form: NgForm): void {
    this.router.navigate(['main-page'], {
      queryParams: {
        voteCount: form.value['vote-text'],
        year: form.value['year-text'],
        genre: form.value['select-genre'],
      },
    });
    form.reset();
  }
}
