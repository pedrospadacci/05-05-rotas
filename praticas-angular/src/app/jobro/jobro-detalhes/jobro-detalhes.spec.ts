import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobroDetalhes } from './jobro-detalhes';

describe('JobroDetalhes', () => {
  let component: JobroDetalhes;
  let fixture: ComponentFixture<JobroDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobroDetalhes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobroDetalhes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
