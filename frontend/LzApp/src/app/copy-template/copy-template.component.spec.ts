import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyTemplateComponent } from './copy-template.component';

describe('CopyTemplateComponent', () => {
  let component: CopyTemplateComponent;
  let fixture: ComponentFixture<CopyTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
