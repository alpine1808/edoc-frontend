import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbanDiComponent } from './vanban-di.component';

describe('VanbanDiComponent', () => {
  let component: VanbanDiComponent;
  let fixture: ComponentFixture<VanbanDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VanbanDiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VanbanDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
