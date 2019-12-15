import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationService } from 'src/app/authorization.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [AuthorizationService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be 2 links', () => {
    const element = fixture.debugElement.nativeElement;
    const li = element.querySelectorAll('li');
    expect(li.length).toBe(2);
  });

  it('should be property links name', () => {
    const element = fixture.debugElement.nativeElement;
    const links = element.querySelectorAll('a');

    const userIsLogin = component.auth.userLogin;
    if (userIsLogin) {
      expect(links[1].textContent).toBe(' My profile ');
    } else {
      expect(links[1].textContent).toBe(' Log in ');
    }
  });
});
