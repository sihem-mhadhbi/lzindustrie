import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceClientComponent } from './device-client.component';

describe('DeviceClientComponent', () => {
  let component: DeviceClientComponent;
  let fixture: ComponentFixture<DeviceClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
