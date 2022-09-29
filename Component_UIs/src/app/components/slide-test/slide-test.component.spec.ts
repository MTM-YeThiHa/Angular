import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTestComponent } from './slide-test.component';

describe('SlideTestComponent', () => {
  let component: SlideTestComponent;
  let fixture: ComponentFixture<SlideTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
