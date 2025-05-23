import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbanDaxulyComponent } from './vanban-daxuly.component';

describe('VanbanDaxulyComponent', () => {
  let component: VanbanDaxulyComponent;
  let fixture: ComponentFixture<VanbanDaxulyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VanbanDaxulyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VanbanDaxulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
