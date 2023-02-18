import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportBatchComponent } from './import-batch.component';

describe('ImportBatchComponent', () => {
  let component: ImportBatchComponent;
  let fixture: ComponentFixture<ImportBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportBatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
