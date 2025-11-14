import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobro } from './jobro';

describe('Jobro', () => {
  let component: Jobro;
  let fixture: ComponentFixture<Jobro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Jobro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jobro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
