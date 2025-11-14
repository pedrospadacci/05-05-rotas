import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JojoForms } from './jojo-forms';

describe('JojoForms', () => {
  let component: JojoForms;
  let fixture: ComponentFixture<JojoForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JojoForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JojoForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
