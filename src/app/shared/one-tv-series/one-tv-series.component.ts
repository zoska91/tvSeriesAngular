import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

import { TvmazeService } from 'src/app/tvmaze.service';
import { TVDetails } from './../../models/TVDetails';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-one-tv-series',
  templateUrl: './one-tv-series.component.html',
  styleUrls: ['./one-tv-series.component.scss']
})
export class OneTvSeriesComponent implements OnInit {
  @Input() idSeries: number;

  tvDetails: TVDetails;
  isLogin: boolean;

  constructor(
    private tvmaze: TvmazeService,
    private location: Location,
    public auth: AuthorizationService
  ) {}

  ngOnInit() {
    if (this.auth.userLogin) {
      console.log(this.auth.userLogin);
    }
  }

  searchOneSeries(id: number) {
    this.tvDetails = null;
    this.tvmaze.getOneSeries(id).subscribe(resp => {
      console.log(resp);
      this.tvDetails = resp;
      if (this.auth.userLogin) this.isLogin = true;
    });
  }
}
