import { TvmazeService } from './../../tvmaze.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';

import { OneTvSeriesComponent } from './one-tv-series.component';
import { AuthorizationService } from 'src/app/authorization.service';
import { AuthGuardService } from 'src/app/auth-guard.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('OneTvSeriesComponent', () => {
  let component: OneTvSeriesComponent;
  let fixture: ComponentFixture<OneTvSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OneTvSeriesComponent],
      providers: [
        HttpClientModule,
        AuthorizationService,
        AuthGuardService,
        TvmazeService,
        Location
      ],

      imports: [HttpClientModule, Location, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
