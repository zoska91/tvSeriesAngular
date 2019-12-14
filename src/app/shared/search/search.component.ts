import { Component, OnInit, ViewChild } from '@angular/core';
import { scrollTo } from 'scroll-js';

import { TVInfo } from './../../models/TVInfo';

import { TvmazeService } from './../../tvmaze.service';
import { OneTvSeriesComponent } from '../one-tv-series/one-tv-series.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild(OneTvSeriesComponent, { static: false })
  child: OneTvSeriesComponent;

  searchTitle: string;
  results: TVInfo[];
  noResults: string;
  idSeries: number;
  offsetTop: number;

  constructor(private tvmaze: TvmazeService) {}

  ngOnInit() {
    const offsetTop = document.querySelector('.container-one-tv-series')
      .offsetTop;
    this.offsetTop = offsetTop;
  }

  search(title: string) {
    this.noResults = null;
    this.results = [];
    this.tvmaze.searchTitle(title).subscribe(resp => {
      console.log(resp);
      if (resp.length === 1) {
        this.idSeries = resp[0].show.id;
        this.getIdSeries(this.idSeries);
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
    scrollTo(document.body, { top: this.offsetTop });
    this.child.searchOneSeries(id);
  }
}
