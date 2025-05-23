import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbanDenComponent } from './vanban-den.component';

describe('VanbanDenComponent', () => {
  let component: VanbanDenComponent;
  let fixture: ComponentFixture<VanbanDenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VanbanDenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VanbanDenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
