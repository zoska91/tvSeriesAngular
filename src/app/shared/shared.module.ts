import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [SearchComponent, FormComponent],
  imports: [CommonModule, FormsModule, BrowserModule, HttpClientModule],
  exports: [SearchComponent, FormComponent]
})
export class SharedModule {}
