import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreListPageComponent } from './genre-list-page.component';

describe('GenreListPageComponent', () => {
  let component: GenreListPageComponent;
  let fixture: ComponentFixture<GenreListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
