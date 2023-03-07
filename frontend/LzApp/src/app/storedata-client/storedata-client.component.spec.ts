import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredataClientComponent } from './storedata-client.component';

describe('StoredataClientComponent', () => {
  let component: StoredataClientComponent;
  let fixture: ComponentFixture<StoredataClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoredataClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoredataClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
