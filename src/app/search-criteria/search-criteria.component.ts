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
  genre: any = null;

  yearsArray: number[] = [
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,
  ];
  data: Object;

  constructor(
    private service: MoviesService,

    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getGenreData().subscribe((response) => {
      // console.log(response);
      this.genre = response;
    });
    // this.getFormData(findForm);
    //get initial movie data!!
    //     this.service.getDiscoverData().subscribe((response) => {
    //       console.log(response);
    //       this.data = response;
    //     });
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
