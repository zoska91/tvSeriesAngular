import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularNodeExpressComponent } from './angular-node-express/angular-node-express.component';

import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';

import { CoreModule } from './core/core.module';

import { AuthorizationService } from './authorization.service';

@NgModule({
  declarations: [AppComponent, AngularNodeExpressComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    HomeModule,
    CoreModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
