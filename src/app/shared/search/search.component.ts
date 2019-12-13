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

  constructor(private tvmaze: TvmazeService) {}

  ngOnInit() {}

  search(title: string) {
    this.tvmaze.searchTitle(title).subscribe(resp => {
      console.log(resp);
      this.results = resp;
      console.log(this.results);
    });
    console.log(title);
    this.searchTitle = '';
  }
}
