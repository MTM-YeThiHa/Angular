import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeTestComponent } from './badge-test.component';

describe('BadgeTestComponent', () => {
  let component: BadgeTestComponent;
  let fixture: ComponentFixture<BadgeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
