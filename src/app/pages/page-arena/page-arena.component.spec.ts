import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArenaComponent } from './page-arena.component';

describe('PageArenaComponent', () => {
  let component: PageArenaComponent;
  let fixture: ComponentFixture<PageArenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageArenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
