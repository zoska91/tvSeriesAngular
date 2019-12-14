import { Component, OnInit } from '@angular/core';

import { TVInfo } from './../../models/TVInfo';

import { TvmazeService } from './../../tvmaze.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTitle: string;
  results: TVInfo[];
  noResults: string;
  idSeries: number;
  constructor(private tvmaze: TvmazeService) {}

  ngOnInit() {}

  search(title: string) {
    this.noResults = null;
    this.results = [];
    this.tvmaze.searchTitle(title).subscribe(resp => {
      console.log(resp);
      if (resp.length === 1) {
        this.idSeries = resp[0].show.id;
        console.log(this.idSeries);
      } else if (resp.length > 0) {
        this.results = resp;
      } else {
        this.noResults = title;
      }
    });
    this.searchTitle = '';
  }

  getIdSeries(id: number) {
    console.log(id);
    this.idSeries = id;
  }
}
