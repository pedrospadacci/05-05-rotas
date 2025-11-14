import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobroNaoEncontrado } from './jobro-nao-encontrado';

describe('JobroNaoEncontrado', () => {
  let component: JobroNaoEncontrado;
  let fixture: ComponentFixture<JobroNaoEncontrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobroNaoEncontrado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobroNaoEncontrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
