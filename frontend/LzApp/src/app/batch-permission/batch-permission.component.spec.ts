import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchPermissionComponent } from './batch-permission.component';

describe('BatchPermissionComponent', () => {
  let component: BatchPermissionComponent;
  let fixture: ComponentFixture<BatchPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchPermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
