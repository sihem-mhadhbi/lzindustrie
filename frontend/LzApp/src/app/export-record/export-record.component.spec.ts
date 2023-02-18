import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportRecordComponent } from './export-record.component';

describe('ExportRecordComponent', () => {
  let component: ExportRecordComponent;
  let fixture: ComponentFixture<ExportRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
