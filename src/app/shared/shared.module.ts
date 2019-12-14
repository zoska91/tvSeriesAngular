import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';
import { OneTvSeriesComponent } from './one-tv-series/one-tv-series.component';

@NgModule({
  declarations: [SearchComponent, FormComponent, OneTvSeriesComponent],
  imports: [CommonModule, FormsModule, BrowserModule, HttpClientModule],
  exports: [SearchComponent, FormComponent, OneTvSeriesComponent]
})
export class SharedModule {}
