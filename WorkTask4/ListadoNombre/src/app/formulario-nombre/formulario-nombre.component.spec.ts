import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNombreComponent } from './formulario-nombre.component';

describe('FormularioNombreComponent', () => {
  let component: FormularioNombreComponent;
  let fixture: ComponentFixture<FormularioNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
