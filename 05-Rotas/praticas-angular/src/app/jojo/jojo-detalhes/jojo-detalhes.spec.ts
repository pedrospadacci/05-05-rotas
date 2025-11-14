import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JojoDetalhes } from './jojo-detalhes';

describe('JojoDetalhes', () => {
  let component: JojoDetalhes;
  let fixture: ComponentFixture<JojoDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JojoDetalhes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JojoDetalhes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
