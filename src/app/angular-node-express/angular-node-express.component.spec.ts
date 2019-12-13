import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNodeExpressComponent } from './angular-node-express.component';

describe('AngularNodeExpressComponent', () => {
  let component: AngularNodeExpressComponent;
  let fixture: ComponentFixture<AngularNodeExpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularNodeExpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularNodeExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
