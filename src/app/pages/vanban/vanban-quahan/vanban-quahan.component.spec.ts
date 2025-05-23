import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbanQuahanComponent } from './vanban-quahan.component';

describe('VanbanQuahanComponent', () => {
  let component: VanbanQuahanComponent;
  let fixture: ComponentFixture<VanbanQuahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VanbanQuahanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VanbanQuahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
