import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotrinhComponent } from './totrinh.component';

describe('TotrinhComponent', () => {
  let component: TotrinhComponent;
  let fixture: ComponentFixture<TotrinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotrinhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotrinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
