import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularNodeExpressComponent } from './angular-node-express/angular-node-express.component';
import { CoreModule } from './core/core.module';

import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';

import { TvmazeService } from './tvmaze.service';
import { AuthorizationService } from './authorization.service';

@NgModule({
  declarations: [AppComponent, AngularNodeExpressComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    HomeModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [AuthorizationService, TvmazeService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
