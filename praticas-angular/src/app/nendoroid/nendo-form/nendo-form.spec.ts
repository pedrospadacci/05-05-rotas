import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NendoForm } from './nendo-form';

describe('NendoForm', () => {
  let component: NendoForm;
  let fixture: ComponentFixture<NendoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NendoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NendoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
