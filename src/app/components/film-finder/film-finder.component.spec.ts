import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmFinderComponent } from './film-finder.component';

describe('FilmFinderComponent', () => {
  let component: FilmFinderComponent;
  let fixture: ComponentFixture<FilmFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
