import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportWarningComponent } from './import-warning.component';

describe('ImportWarningComponent', () => {
  let component: ImportWarningComponent;
  let fixture: ComponentFixture<ImportWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
