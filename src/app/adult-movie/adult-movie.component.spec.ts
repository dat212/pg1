import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultMovieComponent } from './adult-movie.component';

describe('AdultMovieComponent', () => {
  let component: AdultMovieComponent;
  let fixture: ComponentFixture<AdultMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
