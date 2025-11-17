import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nendoroids } from './nendoroids';

describe('Nendoroid', () => {
  let component: Nendoroids;
  let fixture: ComponentFixture<Nendoroids>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nendoroids]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nendoroids);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
