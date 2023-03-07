import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarClientComponent } from './topbar-client.component';

describe('TopbarClientComponent', () => {
  let component: TopbarClientComponent;
  let fixture: ComponentFixture<TopbarClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
