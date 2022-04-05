import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgAttributesComponent } from './arg-attributes.component';

describe('ArgAttributesComponent', () => {
  let component: ArgAttributesComponent;
  let fixture: ComponentFixture<ArgAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
