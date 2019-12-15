import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AuthorizationService } from './../authorization.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, HeaderComponent],
  providers: [AuthorizationService]
})
export class CoreModule {}
