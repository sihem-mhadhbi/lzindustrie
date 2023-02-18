import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayManagementComponent } from './gateway-management.component';

describe('GatewayManagementComponent', () => {
  let component: GatewayManagementComponent;
  let fixture: ComponentFixture<GatewayManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatewayManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
