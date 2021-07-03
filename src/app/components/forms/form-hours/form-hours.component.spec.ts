import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHoursComponent } from './form-hours.component';

describe('FormHoursComponent', () => {
  let component: FormHoursComponent;
  let fixture: ComponentFixture<FormHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
