import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavClientComponent } from './nav-client.component';

describe('NavClientComponent', () => {
  let component: NavClientComponent;
  let fixture: ComponentFixture<NavClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
