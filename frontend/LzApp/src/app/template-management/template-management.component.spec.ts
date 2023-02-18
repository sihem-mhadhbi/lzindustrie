import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateManagementComponent } from './template-management.component';

describe('TemplateManagementComponent', () => {
  let component: TemplateManagementComponent;
  let fixture: ComponentFixture<TemplateManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
