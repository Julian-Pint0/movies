import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavInputComponent } from './nav-input.component';

describe('NavInputComponent', () => {
  let component: NavInputComponent;
  let fixture: ComponentFixture<NavInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
