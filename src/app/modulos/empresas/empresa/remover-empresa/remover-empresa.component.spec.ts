import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverEmpresaComponent } from './remover-empresa.component';

describe('RemoverEmpresaComponent', () => {
  let component: RemoverEmpresaComponent;
  let fixture: ComponentFixture<RemoverEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
