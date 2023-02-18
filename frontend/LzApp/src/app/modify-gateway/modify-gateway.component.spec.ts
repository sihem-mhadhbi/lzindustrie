import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyGatewayComponent } from './modify-gateway.component';

describe('ModifyGatewayComponent', () => {
  let component: ModifyGatewayComponent;
  let fixture: ComponentFixture<ModifyGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyGatewayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
