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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getGenreData().subscribe((response) => {
      // console.log(response["genres"]); ------------------------------review the bracket notation to access data
      this.genre = response;
    });
    // this.getFormData(findForm);
    //get initial movie data!!
    //     this.service.getDiscoverData().subscribe((response) => {
    //       console.log(response);
    //       this.data = response;
    //     });


    // why the brackets and quotes?
    this.service.getPopularMovies().subscribe((response) => {
      // console.log(response["results"]);
      this.popularMovies = response["results"];
    })
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
