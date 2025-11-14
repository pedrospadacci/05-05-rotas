import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NendoDetalhe } from './nendo-detalhe';

describe('NendoDetalhe', () => {
  let component: NendoDetalhe;
  let fixture: ComponentFixture<NendoDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NendoDetalhe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NendoDetalhe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
