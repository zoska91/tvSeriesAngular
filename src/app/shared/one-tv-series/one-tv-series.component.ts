import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-tv-series',
  templateUrl: './one-tv-series.component.html',
  styleUrls: ['./one-tv-series.component.scss']
})
export class OneTvSeriesComponent implements OnInit {
  @Input() idSeries: number;

  constructor() {}

  ngOnInit() {
    console.log(this.idSeries);
  }
}
