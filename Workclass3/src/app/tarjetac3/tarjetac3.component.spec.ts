import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjetac3Component } from './tarjetac3.component';

describe('Tarjetac3Component', () => {
  let component: Tarjetac3Component;
  let fixture: ComponentFixture<Tarjetac3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tarjetac3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarjetac3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
