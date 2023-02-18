import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityManagementComponent } from './authority-management.component';

describe('AuthorityManagementComponent', () => {
  let component: AuthorityManagementComponent;
  let fixture: ComponentFixture<AuthorityManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorityManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
