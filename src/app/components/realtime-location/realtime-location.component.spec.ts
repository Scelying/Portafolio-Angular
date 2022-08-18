import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeLocationComponent } from './realtime-location.component';

describe('RealtimeLocationComponent', () => {
  let component: RealtimeLocationComponent;
  let fixture: ComponentFixture<RealtimeLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtimeLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtimeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
