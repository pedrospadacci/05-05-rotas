import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jojo } from './jojo';

describe('Jojo', () => {
  let component: Jojo;
  let fixture: ComponentFixture<Jojo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Jojo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jojo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
