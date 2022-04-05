import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeofeedComponent } from './geofeed.component';

describe('GeofeedComponent', () => {
  let component: GeofeedComponent;
  let fixture: ComponentFixture<GeofeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeofeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeofeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
