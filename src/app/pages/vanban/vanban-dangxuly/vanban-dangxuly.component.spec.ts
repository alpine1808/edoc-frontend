import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbanDangxulyComponent } from './vanban-dangxuly.component';

describe('VanbanDangxulyComponent', () => {
  let component: VanbanDangxulyComponent;
  let fixture: ComponentFixture<VanbanDangxulyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VanbanDangxulyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VanbanDangxulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
