import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayClientComponent } from './gateway-client.component';

describe('GatewayClientComponent', () => {
  let component: GatewayClientComponent;
  let fixture: ComponentFixture<GatewayClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatewayClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
