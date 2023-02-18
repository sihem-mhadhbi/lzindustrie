import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportBsheetComponent } from './import-bsheet.component';

describe('ImportBsheetComponent', () => {
  let component: ImportBsheetComponent;
  let fixture: ComponentFixture<ImportBsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportBsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportBsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
