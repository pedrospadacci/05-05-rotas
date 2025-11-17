import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NendoLogin } from './nendo-login';

describe('NendoLogin', () => {
  let component: NendoLogin;
  let fixture: ComponentFixture<NendoLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NendoLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NendoLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
