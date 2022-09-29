import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataTestComponent } from './form-data-test.component';

describe('FormDataTestComponent', () => {
  let component: FormDataTestComponent;
  let fixture: ComponentFixture<FormDataTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDataTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDataTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
