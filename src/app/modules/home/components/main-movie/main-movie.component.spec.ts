import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMovieComponent } from './main-movie.component';

describe('MainMovieComponent', () => {
  let component: MainMovieComponent;
  let fixture: ComponentFixture<MainMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
