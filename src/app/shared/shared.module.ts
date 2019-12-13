import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [SearchComponent, FormComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
