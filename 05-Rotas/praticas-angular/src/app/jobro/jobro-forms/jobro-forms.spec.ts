import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobroForms } from './jobro-forms';

describe('JobroForms', () => {
  let component: JobroForms;
  let fixture: ComponentFixture<JobroForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobroForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobroForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
