import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuyetdinhComponent } from './quyetdinh.component';

describe('QuyetdinhComponent', () => {
  let component: QuyetdinhComponent;
  let fixture: ComponentFixture<QuyetdinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuyetdinhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuyetdinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
