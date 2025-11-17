import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JojoLogin } from './jojo-login';

describe('JojoLogin', () => {
  let component: JojoLogin;
  let fixture: ComponentFixture<JojoLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JojoLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JojoLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
