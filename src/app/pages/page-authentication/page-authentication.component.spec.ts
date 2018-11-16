import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAuthenticationComponent } from './page-authentication.component';

describe('PageAuthenticationComponent', () => {
  let component: PageAuthenticationComponent;
  let fixture: ComponentFixture<PageAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
