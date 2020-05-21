import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  genre: any = null;

  yearsArray: number[] = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.service.getGenreData().subscribe((response) => {
      console.log(response);
      this.genre = response;
    })
  }

  getYearData() {

  }

}
