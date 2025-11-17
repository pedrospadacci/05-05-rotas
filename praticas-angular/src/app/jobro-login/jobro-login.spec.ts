import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobroLogin } from './jobro-login';

describe('JobroLogin', () => {
  let component: JobroLogin;
  let fixture: ComponentFixture<JobroLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobroLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobroLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
