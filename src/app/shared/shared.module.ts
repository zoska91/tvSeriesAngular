import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';
import { OneTvSeriesComponent } from './one-tv-series/one-tv-series.component';
import { AuthorizationService } from 'src/app/authorization.service';

@NgModule({
  declarations: [SearchComponent, FormComponent, OneTvSeriesComponent],
  imports: [CommonModule, FormsModule, BrowserModule, HttpClientModule],
  exports: [SearchComponent, FormComponent, OneTvSeriesComponent],
  providers: [AuthorizationService]
})
export class SharedModule {}
