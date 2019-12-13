import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTvSeriesComponent } from './one-tv-series.component';

describe('OneTvSeriesComponent', () => {
  let component: OneTvSeriesComponent;
  let fixture: ComponentFixture<OneTvSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTvSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
