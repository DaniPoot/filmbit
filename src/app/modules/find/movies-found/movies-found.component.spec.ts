import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFoundComponent } from './movies-found.component';

describe('MoviesFoundComponent', () => {
  let component: MoviesFoundComponent;
  let fixture: ComponentFixture<MoviesFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
