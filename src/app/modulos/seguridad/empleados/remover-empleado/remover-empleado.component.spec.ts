import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverEmpleadoComponent } from './remover-empleado.component';

describe('RemoverEmpleadoComponent', () => {
  let component: RemoverEmpleadoComponent;
  let fixture: ComponentFixture<RemoverEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
